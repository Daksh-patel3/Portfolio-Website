"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollReveal from "@/components/animations/ScrollReveal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPreview() {
  return (
    <ScrollReveal>
      <section className="py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
              <p className="text-lg text-muted-foreground">
                Passionate Machine Learning Engineer with a strong foundation in
                deep learning, NLP, and production ML systems. Currently pursuing
                my MS in Computer Science at UMass Amherst with a focus on
                efficient model architectures and medical imaging.
              </p>
              <p className="text-lg text-muted-foreground">
                My journey spans from building scalable ML pipelines processing
                10M+ records daily to publishing research in IEEE conferences.
                I'm driven by the challenge of making AI more efficient and
                accessible.
              </p>
              <Button asChild variant="outline">
                <Link href="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl gradient-text">3.9</CardTitle>
                  <CardDescription>GPA at UMass</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl gradient-text">IEEE</CardTitle>
                  <CardDescription>Published Researcher</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl gradient-text">10M+</CardTitle>
                  <CardDescription>Records/Day Processed</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl gradient-text">91%</CardTitle>
                  <CardDescription>Fraud Detection Precision</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}

