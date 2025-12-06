import { Metadata } from "next"
import ScrollReveal from "@/components/animations/ScrollReveal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { education } from "@/data/education"
import { GraduationCap, Calendar, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Education",
  description: "Academic background and education of Daksh Patel",
}

export default function EducationPage() {
  return (
    <div className="container py-20">
      <ScrollReveal>
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold">Education</h1>
            <p className="text-xl text-muted-foreground">
              Academic journey and achievements
            </p>
          </div>

          {/* Education Cards */}
          <div className="space-y-8">
            {education.map((edu, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.2}>
                <Card className="border-2">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <GraduationCap className="h-6 w-6 text-primary" />
                          <CardTitle className="text-3xl">{edu.degree}</CardTitle>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-muted-foreground ml-9">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                        <p className="text-xl font-semibold ml-9">{edu.institution}</p>
                      </div>
                      <Badge variant="secondary" className="text-lg px-4 py-2 w-fit">
                        <Award className="mr-2 h-4 w-4" />
                        GPA: {edu.gpa}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {edu.highlights && (
                      <>
                        <div className="space-y-2">
                          <h3 className="font-semibold text-lg">Highlights</h3>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            {edu.highlights.map((highlight, highlightIdx) => (
                              <li key={highlightIdx}>{highlight}</li>
                            ))}
                          </ul>
                        </div>
                        <Separator />
                      </>
                    )}
                    <div className="space-y-3">
                      <h3 className="font-semibold text-lg">Key Coursework</h3>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <Badge key={course} variant="outline" className="text-sm py-1 px-3">
                            {course}
                          </Badge>
                        ))}
                      </div>
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

