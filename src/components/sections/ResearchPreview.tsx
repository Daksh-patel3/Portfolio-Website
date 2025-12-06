"use client"

import Link from "next/link"
import { ArrowRight, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollReveal from "@/components/animations/ScrollReveal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { research } from "@/data/research"
import HoverLift from "@/components/animations/HoverLift"

export default function ResearchPreview() {
  return (
    <ScrollReveal>
      <section className="py-20">
        <div className="container">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl md:text-5xl font-bold">Research</h2>
              <Button asChild variant="ghost">
                <Link href="/research">
                  View Research <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <HoverLift>
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-blue-600 text-white">
                          <Award className="mr-1 h-3 w-3" />
                          IEEE {research.venue}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl">{research.title}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        {research.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {research.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold gradient-text">{metric.value}</div>
                        <div className="text-sm text-muted-foreground">{metric.label}</div>
                      </div>
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

