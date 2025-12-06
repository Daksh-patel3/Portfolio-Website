"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollReveal from "@/components/animations/ScrollReveal"
import { Badge } from "@/components/ui/badge"
import { skills } from "@/data/skills"

export default function SkillsPreview() {
  const topSkills = skills.slice(0, 3)

  return (
    <ScrollReveal>
      <section className="py-20">
        <div className="container">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl md:text-5xl font-bold">Skills</h2>
              <Button asChild variant="ghost">
                <Link href="/skills">
                  View All Skills <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {topSkills.map((category) => (
                <div key={category.name} className="space-y-4">
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.slice(0, 6).map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}

