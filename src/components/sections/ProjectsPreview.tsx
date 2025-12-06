"use client"

import Link from "next/link"
import { ArrowRight, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollReveal from "@/components/animations/ScrollReveal"
import ProjectCard from "@/components/features/ProjectCard"
import { projects } from "@/data/projects"

export default function ProjectsPreview() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <ScrollReveal>
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
              <Button asChild variant="ghost">
                <Link href="/projects">
                  View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}

