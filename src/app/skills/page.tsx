import { Metadata } from "next"
import ScrollReveal from "@/components/animations/ScrollReveal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { skills } from "@/data/skills"

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical skills and expertise of Daksh Patel in Machine Learning, Deep Learning, and Software Engineering",
}

export default function SkillsPage() {
  return (
    <div className="container py-20">
      <ScrollReveal>
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold">Skills</h1>
            <p className="text-xl text-muted-foreground">
              Technologies and tools I work with
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((category, idx) => (
              <ScrollReveal key={category.name} delay={idx * 0.1}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
}

