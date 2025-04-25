"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileDown, Github, Linkedin, Mail, Phone } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  const handleDownloadCV = () => {
    // In a real implementation, this would point to your actual CV file
    const link = document.createElement("a")
    link.href = "/cv.pdf" // This would be your actual CV path
    link.download = "Ashirvad_Dubey_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

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
      <motion.h1
        variants={item}
        className="mb-8 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-center text-4xl font-bold text-transparent md:text-6xl"
      >
        Hello, I'm Ashirvad Dubey
      </motion.h1>

      <motion.div variants={item} className="mb-8">
        <div className="group relative mx-auto h-48 w-48 overflow-hidden rounded-full">
          <Image
            src="/images/profile.png"
            alt="Ashirvad Dubey"
            width={192}
            height={192}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </div>
      </motion.div>

      <motion.div variants={item} className="mb-8 max-w-2xl text-center text-lg text-gray-200">
        <p>
          I'm a passionate Full Stack Developer with expertise in React, JavaScript, and MERN stack. Currently pursuing
          B.Tech in Computer Science at Lovely Professional University.
        </p>
      </motion.div>

      <motion.div variants={item} className="mb-8 flex flex-wrap justify-center gap-4">
        <Button
          onClick={handleDownloadCV}
          className="group bg-gradient-to-r from-purple-600 to-blue-500 transition-all duration-300 hover:from-purple-700 hover:to-blue-600"
        >
          <FileDown className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
          Download CV
        </Button>

        <a href="https://github.com/Ashirvaddubey" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="border-purple-500 bg-transparent text-white hover:bg-purple-500/20">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </a>

        <a href="https://linkedin.com/in/ashirvad-dubey-a43bb7253/" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="border-blue-500 bg-transparent text-white hover:bg-blue-500/20">
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
        </a>
      </motion.div>

      <motion.div variants={item} className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card className="overflow-hidden border-purple-500/30 bg-black/30 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/70 hover:shadow-lg hover:shadow-purple-500/20">
          <CardContent className="flex items-center p-4">
            <Mail className="mr-3 h-5 w-5 text-purple-400" />
            <a href="mailto:dubeyashirvad50@gmail.com" className="text-gray-200 hover:text-purple-400">
              dubeyashirvad50@gmail.com
            </a>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-blue-500/30 bg-black/30 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/70 hover:shadow-lg hover:shadow-blue-500/20">
          <CardContent className="flex items-center p-4">
            <Phone className="mr-3 h-5 w-5 text-blue-400" />
            <a href="tel:+916387522919" className="text-gray-200 hover:text-blue-400">
              +91 63875 22919
            </a>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
