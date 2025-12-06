"use client"

import Link from "next/link"
import { ArrowRight, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollReveal from "@/components/animations/ScrollReveal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { experience } from "@/data/experience"
import HoverLift from "@/components/animations/HoverLift"

export default function ExperiencePreview() {
  return (
    <ScrollReveal>
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
              <Button asChild variant="ghost">
                <Link href="/experience">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <HoverLift>
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl">{experience.role}</CardTitle>
                      <CardDescription className="text-lg mt-1">
                        {experience.company} • {experience.period}
                      </CardDescription>
                    </div>
                    <Briefcase className="h-8 w-8 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{experience.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {experience.techStack.slice(0, 6).map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </HoverLift>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}

