"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Menu, X, ChevronDown } from "lucide-react"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import EducationSection from "@/components/education-section"
import ContactSection from "@/components/contact-section"
import AnimatedBackground from "@/components/animated-background"
import Chatbot from "@/components/chatbot"
import { cn } from "@/lib/utils"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const sectionsRef = useRef<HTMLDivElement>(null)

  // Handle scroll for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Smooth scroll to section
  const scrollToSection = (section: string) => {
    setActiveSection(section)
    setMenuOpen(false)

    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Header with Navigation */}
      <header className="fixed top-0 z-50 w-full bg-black/30 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold text-white"
          >
            Ashirvad Dubey
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <Tabs value={activeSection} onValueChange={scrollToSection} className="w-full">
              <TabsList className="bg-black/20 p-1">
                {["about", "experience", "projects", "skills", "education", "contact"].map((section) => (
                  <TabsTrigger
                    key={section}
                    value={section}
                    className="capitalize data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-500 data-[state=active]:text-white"
                  >
                    {section}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <div className="bg-black/80 px-4 py-2 backdrop-blur-md">
                {["about", "experience", "projects", "skills", "education", "contact"].map((section) => (
                  <motion.button
                    key={section}
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection(section)}
                    className={cn(
                      "my-2 block w-full rounded-md px-4 py-2 text-left capitalize transition-colors",
                      activeSection === section
                        ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white"
                        : "text-white hover:bg-white/10",
                    )}
                  >
                    {section}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Scroll Indicator */}
      <div className="fixed bottom-10 left-1/2 z-40 hidden -translate-x-1/2 animate-bounce md:block">
        <ChevronDown className="h-8 w-8 text-white opacity-70" />
      </div>

      {/* Content Sections */}
      <div ref={sectionsRef} className="relative z-10 pt-20">
        {/* About Section */}
        <section id="about" className="min-h-screen w-full py-16">
          <div className="container mx-auto px-4">
            <AboutSection />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen w-full py-16">
          <div className="container mx-auto px-4">
            <ExperienceSection />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen w-full py-16">
          <div className="container mx-auto px-4">
            <ProjectsSection />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen w-full py-16">
          <div className="container mx-auto px-4">
            <SkillsSection />
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="min-h-screen w-full py-16">
          <div className="container mx-auto px-4">
            <EducationSection />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen w-full py-16">
          <div className="container mx-auto px-4">
            <ContactSection email="dubeyashirvad50@gmail.com" />
          </div>
        </section>
      </div>

      {/* Chatbot */}
      <Chatbot />
    </main>
  )
}
