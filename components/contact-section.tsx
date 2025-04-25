"use client"

import type React from "react"
import { useState, type FormEvent, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import emailjs from '@emailjs/browser'

interface ContactSectionProps {
  email: string
}

// EmailJS configuration
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!

export default function ContactSection({ email }: ContactSectionProps) {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Initialize EmailJS in useEffect to ensure it runs on client side
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: email,
        reply_to: formData.email,
      }

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY // Add public key here as well
      )

      if (response.status === 200) {
        toast({
          title: "Message sent successfully!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        })
        // Reset form
        setFormData({ name: "", email: "", message: "" })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error: any) {
      console.error('Error sending email:', error?.message || error)
      toast({
        title: "Failed to send message",
        description: error?.message || "Please try again later or contact me directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
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
      <motion.h2
        variants={item}
        className="mb-8 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-center text-4xl font-bold text-transparent"
      >
        Get In Touch
      </motion.h2>

      <div className="grid w-full max-w-5xl gap-8 md:grid-cols-2">
        {/* Contact Info */}
        <motion.div variants={item} className="space-y-6">
          <Card className="border-red-500/30 bg-black/30 backdrop-blur-sm transition-all duration-500 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20">
            <CardHeader>
              <CardTitle className="text-xl text-white">Contact Information</CardTitle>
              <CardDescription className="text-gray-400">
                Feel free to reach out through any of these channels
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="group flex items-center rounded-md p-2 transition-colors duration-300 hover:bg-red-500/10">
                <div className="mr-4 rounded-full bg-red-500/20 p-2 text-red-400 transition-transform duration-300 group-hover:scale-110">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href={`mailto:${email}`} className="text-white transition-colors duration-300 hover:text-red-400">
                    {email}
                  </a>
                </div>
              </div>

              <div className="group flex items-center rounded-md p-2 transition-colors duration-300 hover:bg-red-500/10">
                <div className="mr-4 rounded-full bg-red-500/20 p-2 text-red-400 transition-transform duration-300 group-hover:scale-110">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+916387522919" className="text-white transition-colors duration-300 hover:text-red-400">
                    +91 63875 22919
                  </a>
                </div>
              </div>

              <div className="group flex items-center rounded-md p-2 transition-colors duration-300 hover:bg-red-500/10">
                <div className="mr-4 rounded-full bg-red-500/20 p-2 text-red-400 transition-transform duration-300 group-hover:scale-110">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">Gorakhpur, Uttar Pradesh 273401</p>
                </div>
              </div>

              <div className="mt-6 flex space-x-4">
                <a
                  href="https://linkedin.com/in/ashirvad-dubey-a43bb7253/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-full bg-black/50 p-2 transition-all duration-300 hover:bg-blue-500/20"
                >
                  <Linkedin className="h-5 w-5 text-gray-400 transition-colors duration-300 group-hover:text-blue-400" />
                </a>

                <a
                  href="https://github.com/Ashirvaddubey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-full bg-black/50 p-2 transition-all duration-300 hover:bg-purple-500/20"
                >
                  <Github className="h-5 w-5 text-gray-400 transition-colors duration-300 group-hover:text-purple-400" />
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={item}>
          <Card className="border-red-500/30 bg-black/30 backdrop-blur-sm transition-all duration-500 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20">
            <CardHeader>
              <CardTitle className="text-xl text-white">Send Me a Message</CardTitle>
              <CardDescription className="text-gray-400">I'll get back to you as soon as possible</CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="border-gray-700 bg-black/50 text-white focus:border-red-500 focus:ring-red-500/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="border-gray-700 bg-black/50 text-white focus:border-red-500 focus:ring-red-500/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    required
                    className="min-h-[120px] border-gray-700 bg-black/50 text-white focus:border-red-500 focus:ring-red-500/20"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-pink-600 transition-all duration-300 hover:from-red-700 hover:to-pink-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  )
}
