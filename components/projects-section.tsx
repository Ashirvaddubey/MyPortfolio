"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectsSection() {
  const projects = [
    {
      title: "MedStores",
      date: "Mar 2025",
      description: "An online medicine and e-commerce platform for seamless medicine ordering and delivery.",
      points: [
        "Integrated Firebase authentication for secure user login and account management.",
        "Utilize Google Maps API to help users locate nearby pharmacies and delivery zones.",
      ],
      tags: ["React", "JavaScript", "Firebase", "Google Maps API", "Tailwind CSS", "MongoDB"],
      github: "https://github.com/Ashirvaddubey/medStores",
      color: "from-pink-600 to-purple-600",
    },
    {
      title: "SpeechToTextAssistant",
      date: "Feb 2025",
      description: "A speech-to-text application with AI-powered task extraction and calendar integration.",
      points: [
        "Enhanced speech-to-text accuracy by fine-tuning the Deepgram API, accommodating varied accents and background noise.",
        "Reduced API latency by 40% through optimized request batching and caching for quicker task and calendar event generation.",
        "Leveraged AI for action extraction to automatically identify tasks, deadlines, and key discussion points.",
      ],
      tags: ["MERN", "Deepgram API", "Gemini API", "Google Calendar API"],
      github: "https://github.com/Ashirvaddubey/SpeechToTextAssistant",
      color: "from-blue-600 to-cyan-600",
    },
    {
      title: "E-Voting System",
      date: "Nov 2024",
      description: "A secure and efficient online E-Voting system to ensure transparent and tamper-proof elections.",
      points: [
        "Implemented user authentication and role-based access using Firebase for secure voter verification.",
        "Managed voter data and election results efficiently with MySQL, ensuring data integrity and security.",
      ],
      tags: ["PHP", "XAMPP", "MySQL", "Tailwind CSS", "Google API", "Firebase"],
      github: "https://github.com/Ashirvaddubey/E-Voting/tree/main",
      color: "from-green-600 to-teal-600",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      <motion.h2
        variants={item}
        className="mb-8 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-center text-4xl font-bold text-transparent"
      >
        Projects
      </motion.h2>

      <motion.div variants={item} className="grid w-full max-w-5xl gap-6 md:grid-cols-1 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Card
            key={index}
            className={`group overflow-hidden border-transparent bg-black/30 backdrop-blur-sm transition-all duration-500 hover:border-${project.color.split(" ")[0].replace("from-", "")} hover:shadow-lg hover:shadow-${project.color.split(" ")[0].replace("from-", "")}/20`}
          >
            <div
              className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.color} transform transition-transform duration-500 group-hover:scale-x-100`}
              style={{ transformOrigin: "left", transform: "scaleX(0)" }}
            ></div>

            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-bold text-white">{project.title}</CardTitle>
                <div className="flex items-center text-sm text-gray-400">
                  <Calendar className="mr-1 h-4 w-4" />
                  {project.date}
                </div>
              </div>
              <CardDescription className="text-gray-300">{project.description}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-2 pb-2">
              <ul className="ml-5 list-disc space-y-1 text-sm text-gray-300">
                {project.points.map((point, i) => (
                  <li key={i} className="transition-transform duration-300 hover:translate-x-1 hover:text-white">
                    {point}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="flex flex-col items-start space-y-3">
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className={`bg-${project.color.split(" ")[0].replace("from-", "")}/10 text-${project.color.split(" ")[0].replace("from-", "")}-300 hover:bg-${project.color.split(" ")[0].replace("from-", "")}/20`}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button
                  variant="outline"
                  className="w-full border-gray-700 bg-transparent text-white transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </motion.div>
    </motion.div>
  )
}
