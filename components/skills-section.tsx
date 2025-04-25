"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Server, Globe, GitGraphIcon as Git, Terminal } from "lucide-react"

export default function SkillsSection() {
  const skillCategories = [
    {
      name: "Languages",
      icon: <Code className="h-6 w-6 text-blue-400" />,
      skills: ["PHP", "C", "Java", "JavaScript", "SQL"],
      color: "border-blue-500/30 hover:border-blue-500 hover:shadow-blue-500/20",
    },
    {
      name: "Frontend",
      icon: <Globe className="h-6 w-6 text-pink-400" />,
      skills: ["React", "Tailwind CSS", "HTML/CSS", "Vite"],
      color: "border-pink-500/30 hover:border-pink-500 hover:shadow-pink-500/20",
    },
    {
      name: "Backend",
      icon: <Server className="h-6 w-6 text-green-400" />,
      skills: ["Node.js", "Express", "PHP", "Firebase"],
      color: "border-green-500/30 hover:border-green-500 hover:shadow-green-500/20",
    },
    {
      name: "Databases",
      icon: <Database className="h-6 w-6 text-yellow-400" />,
      skills: ["MongoDB", "MySQL", "Firebase"],
      color: "border-yellow-500/30 hover:border-yellow-500 hover:shadow-yellow-500/20",
    },
    {
      name: "Tools",
      icon: <Git className="h-6 w-6 text-purple-400" />,
      skills: ["Git", "GitHub", "Docker", "XAMPP"],
      color: "border-purple-500/30 hover:border-purple-500 hover:shadow-purple-500/20",
    },
    {
      name: "Other",
      icon: <Terminal className="h-6 w-6 text-cyan-400" />,
      skills: ["RESTful APIs", "Agile Methodologies", "Problem Solving", "DSA"],
      color: "border-cyan-500/30 hover:border-cyan-500 hover:shadow-cyan-500/20",
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
        className="mb-8 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-center text-4xl font-bold text-transparent"
      >
        Skills & Technologies
      </motion.h2>

      <motion.div variants={item} className="grid w-full max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <Card
            key={index}
            className={`group overflow-hidden border-${category.color.split(" ")[0]} bg-black/30 backdrop-blur-sm transition-all duration-500 hover:shadow-lg ${category.color}`}
          >
            <CardContent className="p-6">
              <div className="mb-4 flex items-center">
                <div className="mr-3 rounded-full bg-black/50 p-2 transition-transform duration-300 group-hover:scale-110">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.name}</h3>
              </div>

              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center transition-transform duration-300 hover:translate-x-1">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-white/70"></div>
                    <span className="text-gray-200 transition-colors duration-300 hover:text-white">{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </motion.div>
  )
}
