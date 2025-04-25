"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Send, X, Minimize2, Maximize2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface Message {
  role: "user" | "assistant"
  content: string
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi there! I'm Ashirvad's virtual assistant. How can I help you learn more about his experience and skills?",
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // CV data for the chatbot to reference
  const cvData = {
    name: "Ashirvad Dubey",
    location: "Gorakhpur, Uttar Pradesh 273401",
    email: "dubeyashirvad50@gmail.com",
    phone: "+91 63875 22919",
    links: {
      linkedin: "linkedin.com/in/ashirvad-dubey-a43bb7253/",
      github: "github.com/Ashirvaddubey",
    },
    education: [
      {
        institution: "Lovely Professional University",
        degree: "B. Tech in CSE",
        location: "Phagwara, Punjab",
        period: "2022 – 2026",
        details: ["CGPA: 8.02", "Coursework: DBMS, Operating System, Computer Network, DSA"],
      },
      {
        institution: "RPM Academy",
        degree: "12th Science",
        location: "Gorakhpur, Uttar Pradesh",
        period: "2020 – 2021",
        details: ["Percentage: 90"],
      },
      {
        institution: "Atmadeep Academy",
        degree: "10th Science",
        location: "Gorakhpur, Uttar Pradesh",
        period: "2019 – 2020",
        details: ["Percentage: 91"],
      },
    ],
    experience: [
      {
        role: "Full Stack Intern",
        company: "DTNBWED",
        location: "Gorakhpur, Uttar Pradesh",
        period: "Jan 2023 – Apr 2023",
        responsibilities: [
          "Enhanced user experience through UI improvements and bug fixes utilizing React.js and Node.js.",
          "Improved security and transaction reliability by optimizing JWT authentication, role-based access, and Razorpay integration.",
          "Converted recorded videos into multiple formats using FFmpeg, reducing storage costs and enhancing playback quality.",
          "Streamlined database queries and improved API response times while collaborating effectively with a team using Git and Agile methodologies.",
        ],
      },
    ],
    projects: [
      {
        name: "MedStores",
        date: "Mar 2025",
        description: "An online medicine and e-commerce platform for seamless medicine ordering and delivery.",
        details: [
          "Integrated Firebase authentication for secure user login and account management.",
          "Utilize Google Maps API to help users locate nearby pharmacies and delivery zones.",
        ],
        technologies: ["React", "JavaScript", "Firebase", "Google Maps API", "Tailwind CSS", "MongoDB"],
        github: "github.com/Ashirvaddubey/medStores",
      },
      {
        name: "SpeechToTextAssistant",
        date: "Feb 2025",
        description: "A speech-to-text application with AI-powered task extraction and calendar integration.",
        details: [
          "Enhanced speech-to-text accuracy by fine-tuning the Deepgram API, accommodating varied accents and background noise.",
          "Reduced API latency by 40% through optimized request batching and caching for quicker task and calendar event generation.",
          "Leveraged AI for action extraction to automatically identify tasks, deadlines, and key discussion points.",
        ],
        technologies: ["MERN", "Deepgram API", "Gemini API", "Google Calendar API"],
        github: "github.com/Ashirvaddubey/SpeechToTextAssistant",
      },
      {
        name: "E-Voting System",
        date: "Nov 2024",
        description: "A secure and efficient online E-Voting system to ensure transparent and tamper-proof elections.",
        details: [
          "Implemented user authentication and role-based access using Firebase for secure voter verification.",
          "Managed voter data and election results efficiently with MySQL, ensuring data integrity and security.",
        ],
        technologies: ["PHP", "XAMPP", "MySQL", "Tailwind CSS", "Google API", "Firebase"],
        github: "github.com/Ashirvaddubey/E-Voting/tree/main",
      },
    ],
    skills: {
      languages: ["PHP", "C", "Java", "JavaScript", "SQL"],
      technologies: ["React", "Vite", "Git", "GitHub", "Docker"],
      frontend: ["React", "Tailwind CSS", "HTML/CSS", "Vite"],
      backend: ["Node.js", "Express", "PHP", "Firebase"],
      databases: ["MongoDB", "MySQL", "Firebase"],
      tools: ["Git", "GitHub", "Docker", "XAMPP"],
      other: ["RESTful APIs", "Agile Methodologies", "Problem Solving", "DSA"],
    },
    certifications: [
      {
        name: "Full stack Web Development",
        issuer: "Coursera",
        date: "Feb 2023",
      },
      {
        name: "Data Structures and Algorithms",
        issuer: "Coding Ninjas",
        date: "Dec 2024",
      },
    ],
    achievements: [
      "Attained a 1700 rating on Code360 with 400+ problems solved.",
      "Achieved a 1400 rating on Leetcode after solving over 100 problems.",
      "Ranked 60th in the Coding Ninjas' coding competition, CodeKaze 2024.",
    ],
  }

  // Function to generate responses based on user input
  const generateResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    // Check for greetings
    if (input.match(/^(hi|hello|hey|greetings)/i)) {
      return `Hello! I'm a virtual assistant for ${cvData.name}. How can I help you today?`
    }

    // Check for questions about contact information
    if (input.match(/contact|email|phone|reach|get in touch/i)) {
      return `You can contact ${cvData.name} via:
      • Email: ${cvData.email}
      • Phone: ${cvData.phone}
      • LinkedIn: ${cvData.links.linkedin}
      • GitHub: ${cvData.links.github}`
    }

    // Check for questions about education
    if (input.match(/education|study|college|university|school|degree|qualification/i)) {
      const eduInfo = cvData.education
        .map(
          (edu) =>
            `• ${edu.degree} at ${edu.institution}, ${edu.location} (${edu.period})${edu.details.length > 0 ? " - " + edu.details.join(", ") : ""}`,
        )
        .join("\n")
      return `${cvData.name}'s educational background:\n${eduInfo}`
    }

    // Check for questions about work experience
    if (input.match(/experience|work|job|intern|internship|company/i)) {
      const exp = cvData.experience[0]
      return `${cvData.name} worked as a ${exp.role} at ${exp.company} (${exp.period}).\n\nKey responsibilities included:\n${exp.responsibilities.map((r) => `• ${r}`).join("\n")}`
    }

    // Check for questions about projects
    if (input.match(/project|portfolio|work|app|application|website|develop/i)) {
      if (input.includes("medstores") || input.includes("medicine")) {
        const project = cvData.projects.find((p) => p.name === "MedStores")!
        return `MedStores (${project.date}):\n${project.description}\n\nKey features:\n${project.details.map((d) => `• ${d}`).join("\n")}\n\nTechnologies: ${project.technologies.join(", ")}\nGitHub: ${project.github}`
      }

      if (input.includes("speech") || input.includes("text") || input.includes("assistant")) {
        const project = cvData.projects.find((p) => p.name === "SpeechToTextAssistant")!
        return `SpeechToTextAssistant (${project.date}):\n${project.description}\n\nKey features:\n${project.details.map((d) => `• ${d}`).join("\n")}\n\nTechnologies: ${project.technologies.join(", ")}\nGitHub: ${project.github}`
      }

      if (input.includes("voting") || input.includes("election")) {
        const project = cvData.projects.find((p) => p.name === "E-Voting System")!
        return `E-Voting System (${project.date}):\n${project.description}\n\nKey features:\n${project.details.map((d) => `• ${d}`).join("\n")}\n\nTechnologies: ${project.technologies.join(", ")}\nGitHub: ${project.github}`
      }

      return `${cvData.name} has worked on several projects:\n\n1. MedStores - An online medicine platform\n2. SpeechToTextAssistant - A speech-to-text application with AI features\n3. E-Voting System - A secure online voting platform\n\nAsk about a specific project to learn more!`
    }

    // Check for questions about skills
    if (input.match(/skill|technology|tech stack|language|framework|tool/i)) {
      if (input.includes("language")) {
        return `Programming Languages: ${cvData.skills.languages.join(", ")}`
      }
      if (input.includes("frontend") || input.includes("front-end") || input.includes("front end")) {
        return `Frontend Skills: ${cvData.skills.frontend.join(", ")}`
      }
      if (input.includes("backend") || input.includes("back-end") || input.includes("back end")) {
        return `Backend Skills: ${cvData.skills.backend.join(", ")}`
      }
      if (input.includes("database") || input.includes("db")) {
        return `Database Skills: ${cvData.skills.databases.join(", ")}`
      }

      return `${cvData.name}'s skills include:\n\n• Languages: ${cvData.skills.languages.join(", ")}\n• Frontend: ${cvData.skills.frontend.join(", ")}\n• Backend: ${cvData.skills.backend.join(", ")}\n• Databases: ${cvData.skills.databases.join(", ")}\n• Tools: ${cvData.skills.tools.join(", ")}`
    }

    // Check for questions about certifications
    if (input.match(/certification|certificate|course/i)) {
      return `${cvData.name}'s certifications:\n\n${cvData.certifications.map((cert) => `• ${cert.name} from ${cert.issuer} (${cert.date})`).join("\n")}`
    }

    // Check for questions about achievements
    if (input.match(/achievement|accomplishment|award|rating|rank|competition/i)) {
      return `${cvData.name}'s achievements:\n\n${cvData.achievements.map((a) => `• ${a}`).join("\n")}`
    }

    // Check for questions about location
    if (input.match(/location|address|city|where|from/i)) {
      return `${cvData.name} is from ${cvData.location}.`
    }

    // Check for questions about the chatbot
    if (input.match(/who are you|what are you|chatbot|bot|assistant/i)) {
      return `I'm a virtual assistant designed to provide information about ${cvData.name}'s professional background, skills, and experience. Feel free to ask me anything about his education, projects, skills, or work experience!`
    }

    // Default response for unrecognized queries
    return `I'm not sure about that. You can ask me about ${cvData.name}'s education, work experience, projects, skills, certifications, or achievements. How can I help you?`
  }

  const handleSendMessage = async () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      // Generate and add assistant response
      const response = generateResponse(input)
      setMessages((prev) => [...prev, { role: "assistant", content: response }])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  return (
    <>
      {/* Chat button */}
      {!isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Button
            onClick={() => setIsOpen(true)}
            className="h-14 w-14 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 p-3 text-white shadow-lg hover:from-purple-700 hover:to-blue-600"
          >
            <MessageSquare className="h-6 w-6" />
          </Button>
        </motion.div>
      )}

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? "auto" : "500px",
              width: isMinimized ? "300px" : "380px",
            }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "fixed bottom-6 right-6 z-50 overflow-hidden rounded-lg shadow-xl",
              isMinimized ? "h-auto w-[300px]" : "h-[500px] w-[380px]",
            )}
          >
            <Card className="flex h-full flex-col border-purple-500/30 bg-black/90 backdrop-blur-md">
              {/* Header */}
              <CardHeader className="border-b border-gray-800 bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar className="mr-2 h-8 w-8">
                      <AvatarImage src="/images/profile.png" alt="Ashirvad" />
                      <AvatarFallback className="bg-purple-700">AD</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-sm font-medium text-white">Ashirvad's Assistant</CardTitle>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 rounded-full text-gray-400 hover:bg-gray-800 hover:text-white"
                      onClick={() => setIsMinimized(!isMinimized)}
                    >
                      {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 rounded-full text-gray-400 hover:bg-gray-800 hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {!isMinimized && (
                <>
                  {/* Messages */}
                  <CardContent className="flex-1 overflow-y-auto p-3 pb-0">
                    <div className="space-y-4">
                      {messages.map((message, index) => (
                        <div
                          key={index}
                          className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}
                        >
                          {message.role === "assistant" && (
                            <Avatar className="mr-2 h-8 w-8">
                              <AvatarImage src="/images/profile.png" alt="Ashirvad" />
                              <AvatarFallback className="bg-purple-700">AD</AvatarFallback>
                            </Avatar>
                          )}
                          <div
                            className={cn(
                              "max-w-[80%] rounded-lg px-3 py-2",
                              message.role === "user" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-100",
                            )}
                          >
                            <p className="whitespace-pre-line text-sm">{message.content}</p>
                          </div>
                        </div>
                      ))}
                      {isTyping && (
                        <div className="flex justify-start">
                          <Avatar className="mr-2 h-8 w-8">
                            <AvatarImage src="/images/profile.png" alt="Ashirvad" />
                            <AvatarFallback className="bg-purple-700">AD</AvatarFallback>
                          </Avatar>
                          <div className="max-w-[80%] rounded-lg bg-gray-800 px-4 py-3 text-white">
                            <div className="flex space-x-1">
                              <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400"></div>
                              <div
                                className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                                style={{ animationDelay: "0.2s" }}
                              ></div>
                              <div
                                className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                                style={{ animationDelay: "0.4s" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      )}
                      <div ref={messagesEndRef} />
                    </div>
                  </CardContent>

                  {/* Input */}
                  <div className="p-3">
                    <div className="flex items-center space-x-2">
                      <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Ask about Ashirvad's skills, projects..."
                        className="border-gray-700 bg-gray-800 text-white focus:border-purple-500"
                      />
                      <Button
                        onClick={handleSendMessage}
                        disabled={!input.trim() || isTyping}
                        className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
