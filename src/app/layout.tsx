import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JaypeepBits | Full-Stack Developer Portfolio',
 description: "The personal portfolio of John Patrick Lagatuz (JP), a backend-focused full stack developer passionate about building smart, user-friendly web apps with PHP, Node.js, React, and MySQL. Explore my work, skills, and what I’ve enjoyed creating.",
 generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
        <head>
    <link rel="icon" href="/images/branding/logo.png" />
  </head>
      <body>{children}</body>
    </html>
  )
}