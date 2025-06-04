"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  User,
  Code,
  Briefcase,
  FolderOpen,
  Mail,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  MapPin,
  Phone,
  Send,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Sidebar,
  SidebarContent,
  SidebarProvider,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"

// Skill icons mapping
const skillIcons = {
  React: "⚛️",
  TypeScript: "📘",
  "Next.js": "▲",
  "Node.js": "🟢",
  Python: "🐍",
  JavaScript: "💛",
  "HTML/CSS": "🎨",
  Git: "📝",
  Docker: "🐳",
  AWS: "☁️",
  MongoDB: "🍃",
  PostgreSQL: "🐘",
}

const skills = Object.keys(skillIcons)

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with React and Node.js",
    github: "https://github.com/username/ecommerce",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "React-based task management with real-time updates",
    github: "https://github.com/username/task-app",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Weather app with location-based forecasts",
    github: "https://github.com/username/weather-app",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js and Tailwind",
    github: "https://github.com/username/portfolio",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const workExperience = [
  {
    year: "2024",
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    description: "Led frontend development team, implemented modern React applications",
  },
  {
    year: "2022",
    title: "Full Stack Developer",
    company: "Digital Agency Co.",
    description: "Developed web applications using React, Node.js, and MongoDB",
  },
  {
    year: "2021",
    title: "Junior Developer",
    company: "StartUp Ventures",
    description: "Built responsive websites and learned modern development practices",
  },
  {
    year: "2020",
    title: "Frontend Intern",
    company: "Web Design Studio",
    description: "Assisted in creating user interfaces and gained hands-on experience",
  },
]

function AppSidebar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Sidebar className="border-r border-green-200">
      <SidebarHeader className="p-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-green-500">
            <Image src="/placeholder.svg?height=96&width=96" alt="Profile Picture" fill className="object-cover" />
          </div>
          <div className="text-center">
            <h2 className="font-bold text-lg">John Doe</h2>
            <p className="text-sm text-muted-foreground">Full Stack Developer</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => scrollToSection("about")} className="w-full justify-start">
              <User className="w-4 h-4" />
              <span>About</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => scrollToSection("skills")} className="w-full justify-start">
              <Code className="w-4 h-4" />
              <span>Skills</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => scrollToSection("projects")} className="w-full justify-start">
              <FolderOpen className="w-4 h-4" />
              <span>Projects</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => scrollToSection("experience")} className="w-full justify-start">
              <Briefcase className="w-4 h-4" />
              <span>Experience</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => scrollToSection("contact")} className="w-full justify-start">
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-6">
        <div className="flex justify-center space-x-4">
          <Link href="https://github.com" className="text-muted-foreground hover:text-green-500 transition-colors">
            <Github className="w-5 h-5" />
          </Link>
          <Link href="https://linkedin.com" className="text-muted-foreground hover:text-green-500 transition-colors">
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link href="https://twitter.com" className="text-muted-foreground hover:text-green-500 transition-colors">
            <Twitter className="w-5 h-5" />
          </Link>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen">
        <AppSidebar />

        <main className="flex-1">
          {/* About Section - Dark Theme */}
          <section id="about" className="min-h-screen bg-gray-900 text-white flex items-center">
            <div className="container mx-auto px-8 py-16">
              <div className="max-w-4xl">
                <h1 className="text-5xl font-bold mb-6">
                  Hi, I'm <span className="text-green-400">John Doe</span>
                </h1>
                <h2 className="text-2xl text-gray-300 mb-8">Full Stack Developer</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  I'm a passionate full-stack developer with 4+ years of experience creating modern web applications. I
                  specialize in React, Node.js, and cloud technologies. I love turning complex problems into simple,
                  beautiful, and intuitive solutions.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or sharing my knowledge through technical writing and mentoring.
                </p>
                <div className="mt-8">
                  <Button
                    className="bg-green-500 hover:bg-green-600 text-white"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Get In Touch
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section - Light Theme */}
          <section id="skills" className="min-h-screen bg-white flex items-center">
            <div className="container mx-auto px-8 py-16">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                My <span className="text-green-500">Skills</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {skills.map((skill) => (
                  <Card key={skill} className="hover:shadow-lg transition-shadow border-green-100">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-3">{skillIcons[skill as keyof typeof skillIcons]}</div>
                      <h3 className="font-semibold text-gray-900">{skill}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section - Dark Theme */}
          <section id="projects" className="min-h-screen bg-gray-900 text-white flex items-center">
            <div className="container mx-auto px-8 py-16">
              <h2 className="text-4xl font-bold text-center mb-12">
                My <span className="text-green-400">Projects</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {projects.map((project) => (
                  <Card
                    key={project.id}
                    className="bg-gray-800 border-gray-700 hover:border-green-400 transition-colors group cursor-pointer"
                  >
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Link href={project.github} target="_blank" rel="noopener noreferrer">
                            <Button
                              variant="outline"
                              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
                            >
                              <Github className="w-4 h-4 mr-2" />
                              View Code
                              <ExternalLink className="w-4 h-4 ml-2" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                        <p className="text-gray-300">{project.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Work Experience Section - Light Theme */}
          <section id="experience" className="min-h-screen bg-white flex items-center">
            <div className="container mx-auto px-8 py-16">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                Work <span className="text-green-500">Experience</span>
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-500"></div>

                  {workExperience.map((job, index) => (
                    <div key={index} className="relative flex items-start mb-12">
                      {/* Timeline dot */}
                      <div className="absolute left-6 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>

                      {/* Content */}
                      <div className="ml-16">
                        <Badge variant="outline" className="mb-2 border-green-500 text-green-600">
                          {job.year}
                        </Badge>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{job.title}</h3>
                        <h4 className="text-lg text-green-600 mb-3">{job.company}</h4>
                        <p className="text-gray-600">{job.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section - Dark Theme */}
          <section id="contact" className="min-h-screen bg-gray-900 text-white flex items-center">
            <div className="container mx-auto px-8 py-16">
              <h2 className="text-4xl font-bold text-center mb-12">
                Get In <span className="text-green-400">Touch</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Contact Info */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-green-400">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-green-400" />
                      <span>john.doe@email.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-green-400" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-green-400" />
                      <span>San Francisco, CA</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-4 text-green-400">Follow Me</h4>
                    <div className="flex space-x-4">
                      <Link href="https://github.com" className="text-gray-300 hover:text-green-400 transition-colors">
                        <Github className="w-6 h-6" />
                      </Link>
                      <Link
                        href="https://linkedin.com"
                        className="text-gray-300 hover:text-green-400 transition-colors"
                      >
                        <Linkedin className="w-6 h-6" />
                      </Link>
                      <Link href="https://twitter.com" className="text-gray-300 hover:text-green-400 transition-colors">
                        <Twitter className="w-6 h-6" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-green-400">Send Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-green-400"
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-green-400"
                    />
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-green-400"
                    />
                    <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </SidebarProvider>
  )
}
