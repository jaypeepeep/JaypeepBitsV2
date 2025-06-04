"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Sparkles,
  User,
  Code,
  Briefcase,
  FolderOpen,
  Mail,
  Github,
  Linkedin,
  Facebook,
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

const rotatingWords = ["develop", "create", "research", "code", "innovate"]

const aboutInfo = [
  {
    title: "Education",
    icon: "🎓",
    items: ["Bachelor of Science in Computer Science (BSCS)", "Polytechnic University of the Philippines - Sta. Mesa", "Expected Graduation: 2025", "CHED Merit Scholar"],
  },
  {
    title: "Personal Info",
    icon: "👤",
    items: ["Age: 21", "Location: Cavite, Philippines", "Languages: English, Filipino", "Hobbies: Coding, Gaming, traveling, trying new foods, and spending time on social media."],
  },
 {
  title: "Certifications",
  icon: "🏆",
  items: [
    "DICT-ICT017 Advanced Level of Software Engineering",
    "DICT-ICT013 Intermediate Level of Software Engineering",
    "DICT-WD001 Principles of Web Development and Introduction to HTML",
    "DICT-WD002 Using HTML and CSS to Design a Website",
    "DICT-WD003 Basic JavaScript for Web Development",
  ],
},
{
  title: "Interests",
  icon: "💡",
  items: [
    "Backend Development",
    "Database Design & Management",
    "System Administration",
    "Exploring New Technologies",
    "Research & Problem Solving",
    "Building Side Projects"
  ],
}

]

const groupedSkills = {
  "Programming Languages": [
    "PHP", "JavaScript", "Python", "HTML", "CSS", "SQL", "Java", "Kotlin", "XML",
  ],
  "Frameworks & Libraries": [
    "React", "Node.js", "Express.js", "Flask", "Jupyter", "Axios", "PyQt5", "Tailwind CSS",
  ],
  "Databases": [
    "MySQL", "SQLite", "Oracle",
  ],
  "Developer Tools": [
    "PHPRunner", "phpMyAdmin", "Stripe", "Google Cloud", "VSCode", "Postman", "WAMP",
    "XAMPP", "Android Studio", "Git", "GitHub", "SQL Maestro", "Microsoft Office",
  ],
  "Design Tools": [
    "Figma", "Canva",
  ],
}


// Skill icons mapping
const skillIcons = {
  // Programming Languages
  PHP: "🐘",
  JavaScript: "💛",
  Python: "🐍",
  HTML: "📄",
  CSS: "🎨",
  SQL: "🗄️",
  Java: "☕",
  Kotlin: "🧬",
  XML: "📘",

  // Frameworks & Libraries
  React: "⚛️",
  "Node.js": "🟢",
  "Express.js": "🚂",
  Flask: "🌶️",
  Jupyter: "📓",
  Axios: "🔗",
  PyQt5: "🖼️",
  "Tailwind CSS": "💨",

  // Databases
  MySQL: "🐬",
  SQLite: "📁",
  Oracle: "🔶",

  // Developer Tools
  PHPRunner: "🛠️",
  phpMyAdmin: "🧰",
  Stripe: "💳",
  "Google Cloud": "☁️",
  VSCode: "🖥️",
  Postman: "📬",
  WAMP: "🧃",
  XAMPP: "🔥",
  "Android Studio": "📱",
  Git: "📝",
  GitHub: "🐙",
  "SQL Maestro": "📊",
  "Microsoft Office": "📎",

  // Design Tools
  Figma: "🎨",
  Canva: "🖌️",
}


const skills = Object.keys(skillIcons)

const projects = [
    {
    id: 1,
  title: "Estate Doc Prep",
description: "A document automation platform for generating U.S. living trust documents through guided forms. Supports multiple user roles to manage workflows and assist clients in the estate planning process.",
  github: null, // or omit this field
  private: true,
  image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Ibaybay Mo Isasalin Ko",
    description: "This project provides an easy-to-use tool for converting between Baybayin and Latin scripts, with features like bidirectional translation, handwriting recognition, and virtual keyboards for both scripts.",
    github: "https://github.com/jaypeepeep/Ibaybay-Mo-Isasalin-Ko",
      private: false,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "D’Tilapia Compiler",
    description: "A compiler designed for a proposed programming language, D'Tilapia, inspired by discrete mathematics. The project features a lexical and syntax analyzer for processing and understanding code, along with a user-friendly interface.",
    github: "https://github.com/jaypeepeep/D-Tilapia-Compiler",
      private: false,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "DoorMe",
    description: "This website helps students find dormitories near their university. It offers easy registration, login, and interactive maps with customizable filters to find the best housing options.",
    github: "https://github.com/jaypeepeep/DoorMe",
    private: false,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "Komyu-Sagip",
    description: "This app helps you stay safe with three ways to ask for help: anonymously, by posting, or in an emergency. Its social media features make it easy to share information and get quick responses when needed.",
    github: "https://github.com/jaypeepeep/Komyu-Sagip-Mobile-Application",
    private: false,
    image: "/placeholder.svg?height=200&width=300",
  },
    {
    id: 6,
    title: "SC-β-VAE-GAN",
    description: "A tool that helps generate and fix missing handwriting data from pen tablets. The tool makes it easier to work with small or incomplete datasets, improving data accuracy and usability through a simple interface.",
    github: "https://github.com/jaypeepeep/SC-Beta-VAE-GAN",
    private: false,
    image: "/placeholder.svg?height=200&width=300",
  },
]

const workExperience = [
  {
    year: "Feb 2025 - Present",
    title: "Backend-focused Full Stack Developer",
    company: "The Oscar's Real Estate & Property Management",
    description: "Led the development of a secure document automation platform for U.S. users, with role-based access and integrated payments, using React, Node.js, MySQL, Stripe, and Google Cloud.",
  },
  {
    year: "Sep 2024 - Feb 2025",
    title: "Software Developer",
    company: "8Box Solutions",
    description: "Built and customized admin panels, payroll systems, and multi-level login portals while managing complex databases using PHP, JavaScript, MySQL, and PHPRunner.",
  },
  {
    year: "Jul 2024 - Sep 2024",
    title: "Software Developer Intern",
    company: "8Box Solutions",
    description: "Improved and developed admin panels tailored to client needs using PHP, JavaScript, MySQL, and PHPRunner.",
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
            <h2 className="font-bold text-lg">John Patrick Lagatuz</h2>
            <p className="text-sm text-muted-foreground">Full Stack Developer</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4">
        <SidebarMenu>
             <SidebarMenuItem>
            <SidebarMenuButton onClick={() => scrollToSection("home")} className="w-full justify-start">
              <Sparkles className="w-4 h-4" />
              <span>Home</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
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
          <Link href="https://github.com/jaypeepeep"   target="_blank"
  rel="noopener noreferrer" className="text-muted-foreground hover:text-green-500 transition-colors">
            <Github className="w-5 h-5" />
          </Link>
          <Link href="https://www.linkedin.com/in/john-patrick-lagatuz/"   target="_blank"
  rel="noopener noreferrer" className="text-muted-foreground hover:text-green-500 transition-colors">
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link href="https://www.facebook.com/jeypeeps/"   target="_blank"
  rel="noopener noreferrer" className="text-muted-foreground hover:text-green-500 transition-colors">
            <Facebook className="w-5 h-5" />
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

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("https://formspree.io/f/xyzzlneb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message
      })
    });

    if (response.ok) {
      console.log("Form submitted successfully");
      setFormData({ name: "", email: "", message: "" });
      // Optionally show a success message to the user
    } else {
      console.error("Form submission failed");
      // Optionally show an error message
    }
  } catch (error) {
    console.error("An error occurred:", error);
    // Optionally show a network error message
  }
};


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

    function DynamicHeading() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

 return (
<div className="mb-10 text-white font-extrabold leading-tight">
  <h1 className="text-5xl sm:text-6xl md:text-7xl">Hi, I’m JP!</h1>
  <div className="text-5xl sm:text-6xl md:text-7xl mt-4">
    I <span className="text-green-500">{rotatingWords[index]}</span>
  </div>
  <h2 className="text-5xl sm:text-6xl md:text-7xl mt-2">solutions</h2>
</div>

  )
}
  return (
    <SidebarProvider defaultOpen>
      <div className="flex w-full max-w-full overflow-x-hidden">
        <AppSidebar />

        <main className="flex-1">
          {/* About Section - Dark Theme */}
          <section id="home" className="min-h-screen bg-gray-900 text-white flex items-center">
          <div className="w-full max-w-screen-xl px-8 py-16 mx-auto">

              <div className="max-w-4xl">
               <DynamicHeading />
<p className="text-lg text-gray-300 leading-relaxed mb-4">
  I’m a Filipino <strong className="text-green-400">backend-focused full-stack developer</strong>, a software engineer, and a graduating Computer Science student with <strong className="text-green-400">4 years of hands-on experience</strong> building real-world projects.
</p>
<p className="text-lg text-gray-300 leading-relaxed mb-4">
  Whether I’m working with a team or helping clients, I enjoy turning ideas into something that actually works and makes life easier. I'm always excited to learn something new and take on projects that help me grow.
</p>

            <div className="flex space-x-4 mt-8">
                  <Button
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Get In Touch
                  </Button>
                  <Button
                    variant="outline"
                    className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-8 py-3 text-lg"
                    onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    View My Work
                  </Button>
                </div>
              </div>
            </div>
          </section>

              {/* About Section - Light Theme */}
          <section id="about" className="min-h-screen bg-white flex items-center">
            <div className="container mx-auto px-8 py-16">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                About <span className="text-green-500">Me</span>
              </h2>
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                     I'm a curious and driven backend-focused full-stack developer with 4 years of experience building real projects for teams and clients, including websites, admin panels, payroll systems, and web applications. I genuinely enjoy solving problems, especially the ones that make you stop and think a little longer. I'm always exploring new tools, learning new things, and finding better ways to build and improve.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {aboutInfo.map((info, index) => (
                    <Card key={index} className="border-green-100 hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">{info.icon}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-900">{info.title}</h3>
                        <ul className="space-y-2">
                          {info.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-gray-600 text-sm">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section - Dark Theme */}
<section id="skills" className="min-h-screen bg-gray-900 text-white flex items-center">
  <div className="container mx-auto px-8 py-16">
    <h2 className="text-4xl font-bold text-center mb-12">
      My <span className="text-green-400">Skills</span>
    </h2>
        <div className="text-center mb-12">
      <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
        Over the years, I’ve worked with a wide range of tools and technologies across the stack. While I specialize in backend development, I enjoy picking up new skills and using the right tools to get the job done well.
      </p>
    </div>

    <div className="space-y-16 max-w-6xl mx-auto">
      {Object.entries(groupedSkills).map(([groupTitle, skills]) => (
        <div key={groupTitle}>
          <h3 className="text-2xl font-semibold text-green-400 mb-6">{groupTitle}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <Card key={skill} className="bg-gray-800 border-gray-700 hover:border-green-400 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">
                    {skillIcons[skill as keyof typeof skillIcons]}
                  </div>
                  <h3 className="font-semibold text-white">{skill}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


          {/* Projects Section - Light Theme */}
          <section id="projects" className="min-h-screen bg-white flex items-center">
            <div className="container mx-auto px-8 py-16">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                My <span className="text-green-500">Projects</span>
              </h2>
                      <div className="text-center mb-12">
      <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
       Whether I’m working solo or with a team, I make sure every project has a clear purpose and is grounded in solid research. Some are built to solve business or client needs, while others explore new ideas just for the fun of it. Either way, they’re all made with intention. Feel free to check them out.
      </p>
    </div>
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {projects.map((project) => (
                  <Card
                    key={project.id}
                    className="border-green-100 hover:shadow-lg transition-all group cursor-pointer"
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
                     {project.github ? (
  <Link href={project.github} target="_blank" rel="noopener noreferrer">
    <Button
      variant="outline"
      className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
    >
      <Github className="w-4 h-4 mr-2" />
      View Code
      <ExternalLink className="w-4 h-4 ml-2" />
    </Button>
  </Link>
) : project.private ? (
  <div className="text-sm text-gray-300 italic">Private repository</div>
) : null}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                        <p className="text-gray-600">{project.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

           {/* Work Experience Section - Dark Theme */}
          <section id="experience" className="min-h-screen bg-gray-900 text-white flex items-center">
            <div className="container mx-auto px-8 py-16">
              <h2 className="text-4xl font-bold text-center mb-12">
                Work <span className="text-green-400">Experience</span>
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-400"></div>

             {workExperience.map((job, index) => (
  <div key={index} className="relative flex items-start mb-12">
    {/* Timeline dot */}
    <div className="absolute left-6 w-4 h-4 bg-green-400 rounded-full border-4 border-gray-900 shadow-lg"></div>
    {/* Content */}
    <div className="ml-16">
      <Badge variant="outline" className="mb-2 border-green-400 text-green-400">
        {job.year}
      </Badge>
      <h3 className="text-xl font-semibold text-white mb-1">{job.title}</h3>
      <h4 className="text-lg text-green-400 mb-3">{job.company}</h4>
      <p className="text-gray-300">{job.description}</p>
    </div>
  </div>
))}

{/* Call to Action - Resume */}
<div className="relative flex items-start mb-12">
  <div className="absolute left-6 w-4 h-4 bg-green-400 rounded-full border-4 border-gray-900 shadow-lg"></div>
  <div className="ml-16 bg-gray-800 border border-green-500 rounded-md p-6">
    <h3 className="text-xl font-semibold text-white mb-2">Think we could turn your next opportunity into my next experience?</h3>
    <p className="text-gray-300 mb-4">Feel free to check out my resume. I'm always open to new opportunities to build, collaborate, and make something meaningful.</p>
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
    >
      View Resume
    </a>
  </div>
</div>

                </div>
              </div>
            </div>
          </section>

      
          {/* Contact Section - Light Theme */}
          <section id="contact" className="min-h-screen bg-white flex items-center">
            <div className="container mx-auto px-8 py-16">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                Get In <span className="text-green-500">Touch</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Contact Info */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-green-500">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">patrick.zutagal@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">+63 966 349 2811</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Cavite, Philippines</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-4 text-green-500">Follow Me</h4>
                    <div className="flex space-x-4">
                      <Link href="https://github.com/jaypeepeep"   target="_blank"
  rel="noopener noreferrer" className="text-gray-600 hover:text-green-500 transition-colors">
                        <Github className="w-6 h-6" />
                      </Link>
                      <Link
                        href="https://www.linkedin.com/in/john-patrick-lagatuz/"   target="_blank"
  rel="noopener noreferrer"
                        className="text-gray-600 hover:text-green-500 transition-colors"
                      >
                        <Linkedin className="w-6 h-6" />
                      </Link>
                      <Link href="https://www.facebook.com/jeypeeps/"   target="_blank"
  rel="noopener noreferrer" className="text-gray-600 hover:text-green-500 transition-colors">
                        <Facebook className="w-6 h-6" />
                      </Link>
                    </div>
                  </div>
                </div>

               
                {/* Contact Form */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-green-500">Send Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-green-500"
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                                      className="border-gray-300 focus:border-green-500"
                    />
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="border-gray-300 focus:border-green-500"
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
