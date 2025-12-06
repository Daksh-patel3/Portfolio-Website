"use client"

import ScrollReveal from "@/components/animations/ScrollReveal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/lib/constants"

export default function ContactPage() {
  return (
    <div className="container py-20">
      <ScrollReveal>
        <div className="max-w-2xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold">Get In Touch</h1>
            <p className="text-xl text-muted-foreground">
              Let&apos;s connect and discuss opportunities
            </p>
          </div>

          {/* Connect With Me */}
          <Card>
            <CardHeader>
              <CardTitle>Connect With Me</CardTitle>
              <CardDescription>
                Find me on these platforms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" size="lg" asChild className="flex-1">
                  <Link href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="flex-1">
                  <Link href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="flex-1">
                  <a href={`mailto:${siteConfig.links.email}`}>
                    <Mail className="mr-2 h-5 w-5" />
                    Email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </ScrollReveal>
    </div>
  )
}

