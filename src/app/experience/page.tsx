import { Metadata } from "next"
import ScrollReveal from "@/components/animations/ScrollReveal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { experience } from "@/data/experience"
import { Briefcase, Calendar, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Experience",
  description: "Daksh Patel's professional experience as a Machine Learning Engineer",
}

export default function ExperiencePage() {
  return (
    <div className="container py-20">
      <ScrollReveal>
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold">Experience</h1>
            <p className="text-xl text-muted-foreground">
              Building production ML systems and solving real-world problems
            </p>
          </div>

          {/* Experience Card */}
          <Card className="border-2">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="space-y-2">
                  <CardTitle className="text-3xl">{experience.role}</CardTitle>
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      <span>{experience.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-muted-foreground">{experience.description}</p>

              <Separator />

              {/* Achievements */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Key Achievements</h3>
                <div className="space-y-6">
                  {experience.achievements.map((achievement, idx) => (
                    <ScrollReveal key={idx} delay={idx * 0.1}>
                      <div className="space-y-3">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-primary font-bold">{idx + 1}</span>
                          </div>
                          <div className="flex-1 space-y-2">
                            <h4 className="text-xl font-semibold">{achievement.title}</h4>
                            <p className="text-muted-foreground">
                              {achievement.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {achievement.metrics.map((metric, metricIdx) => (
                                <Badge key={metricIdx} variant="secondary" className="text-sm">
                                  {metric}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        {idx < experience.achievements.length - 1 && (
                          <Separator className="ml-14" />
                        )}
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Tech Stack */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {experience.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-sm py-1 px-3">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </ScrollReveal>
    </div>
  )
}

