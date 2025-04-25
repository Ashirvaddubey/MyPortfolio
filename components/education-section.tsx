"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar, Award } from "lucide-react"

export default function EducationSection() {
  const education = [
    {
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      degree: "B. Tech in CSE",
      period: "2022 – 2026",
      details: ["CGPA: 8.02", "Coursework: DBMS, Operating System, Computer Network, DSA"],
      color: "from-amber-500 to-yellow-500",
    },
    {
      institution: "RPM Academy",
      location: "Gorakhpur, Uttar Pradesh",
      degree: "12th Science",
      period: "2020 – 2021",
      details: ["Percentage: 90"],
      color: "from-orange-500 to-amber-500",
    },
    {
      institution: "Atmadeep Academy",
      location: "Gorakhpur, Uttar Pradesh",
      degree: "10th Science",
      period: "2019 – 2020",
      details: ["Percentage: 91"],
      color: "from-red-500 to-orange-500",
    },
  ]

  const certifications = [
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
  ]

  const achievements = [
    "Attained a 1700 rating on Code360 with 400+ problems solved.",
    "Achieved a 1400 rating on Leetcode after solving over 100 problems.",
    "Ranked 60th in the Coding Ninjas' coding competition, CodeKaze 2024.",
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
        className="mb-8 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-center text-4xl font-bold text-transparent"
      >
        Education & Achievements
      </motion.h2>

      <div className="grid w-full max-w-5xl gap-8 md:grid-cols-2">
        {/* Education Column */}
        <motion.div variants={item} className="space-y-6">
          <h3 className="text-2xl font-semibold text-white">Education</h3>

          {education.map((edu, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-yellow-500/30 bg-black/30 backdrop-blur-sm transition-all duration-500 hover:border-yellow-500 hover:shadow-lg hover:shadow-yellow-500/20"
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${edu.color} transform transition-transform duration-500 group-hover:scale-x-100`}
                style={{ transformOrigin: "left", transform: "scaleX(0)" }}
              ></div>

              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-bold text-white">{edu.institution}</CardTitle>
                  <div className="flex items-center text-sm text-yellow-300">
                    <Calendar className="mr-1 h-4 w-4" />
                    {edu.period}
                  </div>
                </div>
                <CardDescription className="flex items-center text-yellow-200">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  {edu.degree} - {edu.location}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="ml-5 list-disc space-y-1 text-sm text-gray-300">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="transition-transform duration-300 hover:translate-x-1 hover:text-yellow-200">
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Certifications & Achievements Column */}
        <motion.div variants={item} className="space-y-6">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Certifications</h3>

            <Card className="border-purple-500/30 bg-black/30 backdrop-blur-sm transition-all duration-500 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20">
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {certifications.map((cert, index) => (
                    <li
                      key={index}
                      className="flex items-start justify-between rounded-md p-2 transition-colors duration-300 hover:bg-purple-500/10"
                    >
                      <div className="flex items-center">
                        <Award className="mr-3 h-5 w-5 text-purple-400" />
                        <div>
                          <p className="font-medium text-white">{cert.name}</p>
                          <p className="text-sm text-gray-400">{cert.issuer}</p>
                        </div>
                      </div>
                      <span className="text-sm text-purple-300">{cert.date}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Achievements</h3>

            <Card className="border-green-500/30 bg-black/30 backdrop-blur-sm transition-all duration-500 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="flex items-start rounded-md p-2 transition-colors duration-300 hover:bg-green-500/10"
                    >
                      <div className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                        {index + 1}
                      </div>
                      <p className="text-gray-200 transition-colors duration-300 hover:text-white">{achievement}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
