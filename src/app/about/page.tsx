import { Metadata } from "next"
import ScrollReveal from "@/components/animations/ScrollReveal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { education } from "@/data/education"
import { experience } from "@/data/experience"

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Daksh Patel's journey in Machine Learning and Data Science",
}

export default function AboutPage() {
  return (
    <div className="container py-20">
      <ScrollReveal>
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold">About Me</h1>
            <p className="text-xl text-muted-foreground">
              My journey in Machine Learning and Data Science
            </p>
          </div>

          {/* My Journey */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">My Journey</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                My passion for Machine Learning began during my undergraduate
                studies at Pandit Deendayal Energy University, where I was
                introduced to the fundamentals of Deep Learning, Linear Algebra,
                and Optimization. This foundation sparked my interest in building
                intelligent systems that can learn and adapt.
              </p>
              <p>
                During my internship at Intrainz, I had the opportunity to work
                on production ML systems, processing millions of records daily
                and building fraud detection models that prevented over $1.5M
                in losses. This experience taught me the importance of
                scalability, efficiency, and real-world impact.
              </p>
              <p>
                Currently, I&apos;m pursuing my MS in Computer Science at UMass
                Amherst, where I&apos;m focusing on advanced ML techniques,
                reinforcement learning, and efficient model architectures. My
                research in medical imaging has been published in IEEE ASSIC
                2025, achieving 96.9% accuracy with 40% fewer parameters.
              </p>
              <p>
                I&apos;m driven by the challenge of making AI more efficient and
                accessible, whether through model optimization, production
                systems, or cutting-edge research. I&apos;m actively seeking Summer
                2026 ML/Data Science internships to continue pushing the
                boundaries of what&apos;s possible.
              </p>
            </div>
          </section>

          {/* Timeline */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Timeline</h2>
            <div className="space-y-8">
              {/* Education Timeline */}
              {education.map((edu, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-2xl">{edu.degree}</CardTitle>
                          <p className="text-muted-foreground mt-1">
                            {edu.institution} • {edu.period}
                          </p>
                        </div>
                        <Badge variant="secondary" className="text-lg px-3 py-1">
                          GPA: {edu.gpa}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p className="font-semibold">Key Coursework:</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course) => (
                            <Badge key={course} variant="outline">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}

              {/* Experience Timeline */}
              <ScrollReveal delay={0.3}>
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl">{experience.role}</CardTitle>
                        <p className="text-muted-foreground mt-1">
                          {experience.company} • {experience.period}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{experience.description}</p>
                    <div className="space-y-3">
                      {experience.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <div>
                            <p className="font-semibold">{achievement.title}</p>
                            <p className="text-sm text-muted-foreground">
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </section>

          {/* Key Achievements */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Key Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">IEEE Publication</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Published research in IEEE ASSIC 2025 on lightweight U-Net
                    for medical imaging
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">$1.5M+ Fraud Prevented</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Developed anomaly detection system preventing significant
                    financial losses
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">10M+ Records/Day</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Built scalable ML pipelines processing millions of records
                    daily
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">3.9 GPA</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Maintaining excellent academic performance at UMass Amherst
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </ScrollReveal>
    </div>
  )
}

