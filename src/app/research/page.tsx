import { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "@/components/animations/ScrollReveal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { research } from "@/data/research"
import { Award, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Research",
  description: "IEEE-published research on lightweight U-Net for medical imaging by Daksh Patel",
}

export default function ResearchPage() {
  return (
    <div className="container py-20">
      <ScrollReveal>
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold">Research</h1>
            <p className="text-xl text-muted-foreground">
              Advancing medical imaging through efficient deep learning
            </p>
          </div>

          {/* Publication Card */}
          <Card className="border-2">
            <CardHeader>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-600 text-white text-base px-3 py-1">
                    <Award className="mr-2 h-4 w-4" />
                    IEEE {research.venue}
                  </Badge>
                  <Badge variant="outline">{research.year}</Badge>
                </div>
                <CardTitle className="text-3xl">{research.title}</CardTitle>
                <CardDescription className="text-base">
                  {research.description}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Abstract */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Abstract</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {research.abstract}
                </p>
              </div>

              <Separator />

              {/* Metrics */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Key Results</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {research.metrics.map((metric, idx) => (
                    <ScrollReveal key={idx} delay={idx * 0.1}>
                      <div className="text-center p-4 rounded-lg border bg-muted/50">
                        <div className="text-3xl font-bold gradient-text mb-2">
                          {metric.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Technologies */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Technologies & Methods</h3>
                <div className="flex flex-wrap gap-2">
                  {research.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-sm py-1 px-3">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Links */}
              <div className="flex flex-wrap gap-4">
                {research.paperUrl && (
                  <Button asChild variant="default" size="lg">
                    <Link href={research.paperUrl} target="_blank" rel="noopener noreferrer">
                      <FileText className="mr-2 h-4 w-4" />
                      View Publication
                    </Link>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Impact Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Research Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  This research contributes to the field of medical image
                  segmentation by demonstrating that significant parameter
                  reduction is possible without compromising accuracy. The
                  optimized model enables real-time inference on edge devices,
                  making advanced medical imaging more accessible.
                </p>
                <p>
                  The 40% parameter reduction and 35% faster inference time
                  make this architecture particularly suitable for deployment in
                  resource-constrained environments, opening new possibilities
                  for point-of-care medical imaging applications.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </ScrollReveal>
    </div>
  )
}

