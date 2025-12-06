import { Metadata } from "next"
import ScrollReveal from "@/components/animations/ScrollReveal"
import ProjectCard from "@/components/features/ProjectCard"
import { projects } from "@/data/projects"

export const metadata: Metadata = {
  title: "Projects",
  description: "Machine Learning and Data Science projects by Daksh Patel",
}

export default function ProjectsPage() {
  return (
    <div className="container py-20">
      <ScrollReveal>
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold">Projects</h1>
            <p className="text-xl text-muted-foreground">
              Building intelligent systems that solve real-world problems
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <ScrollReveal key={project.id} delay={idx * 0.1}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
}

