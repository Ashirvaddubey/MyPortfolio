"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

export default function ExperienceSection() {
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
        className="mb-8 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-center text-4xl font-bold text-transparent"
      >
        Work Experience
      </motion.h2>

      <motion.div variants={item} className="w-full max-w-3xl">
        <Card className="group overflow-hidden border-blue-500/30 bg-black/30 backdrop-blur-sm transition-all duration-500 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20">
          <CardHeader className="relative overflow-hidden pb-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold text-white">Full Stack Intern</CardTitle>
              <div className="flex items-center text-sm text-blue-300">
                <Calendar className="mr-1 h-4 w-4" />
                Jan 2023 – Apr 2023
              </div>
            </div>
            <CardDescription className="flex items-center text-blue-300">
              <Briefcase className="mr-2 h-4 w-4" />
              DTNBWED - Gorakhpur, Uttar Pradesh
            </CardDescription>
          </CardHeader>

          <CardContent className="mt-4 space-y-2">
            <ul className="ml-6 list-disc space-y-2 text-gray-200">
              <li className="transition-transform duration-300 hover:translate-x-1 hover:text-blue-300">
                Enhanced user experience through UI improvements and bug fixes utilizing React.js and Node.js.
              </li>
              <li className="transition-transform duration-300 hover:translate-x-1 hover:text-blue-300">
                Improved security and transaction reliability by optimizing JWT authentication, role-based access, and
                Razorpay integration.
              </li>
              <li className="transition-transform duration-300 hover:translate-x-1 hover:text-blue-300">
                Converted recorded videos into multiple formats using FFmpeg, reducing storage costs and enhancing
                playback quality.
              </li>
              <li className="transition-transform duration-300 hover:translate-x-1 hover:text-blue-300">
                Streamlined database queries and improved API response times while collaborating effectively with a team
                using Git and Agile methodologies.
              </li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
