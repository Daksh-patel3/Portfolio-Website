export interface Education {
  institution: string
  degree: string
  period: string
  gpa: string
  coursework: string[]
  highlights?: string[]
}

export const education: Education[] = [
  {
    institution: "UMass Amherst",
    degree: "MS in Computer Science",
    period: "2025–2026",
    gpa: "3.9/4.0",
    coursework: [
      "Advanced Machine Learning",
      "Reinforcement Learning",
      "Data Science Fundamentals",
      "Algorithms",
      "Information Retrieval",
    ],
    highlights: [
      "GPA: 3.9/4.0",
      "Focus on ML and Deep Learning",
      "Research in Medical Imaging",
    ],
  },
  {
    institution: "Pandit Deendayal Energy University",
    degree: "B.Tech in Computer Engineering",
    period: "2020–2024",
    gpa: "3.62/4.0",
    coursework: [
      "Data Structures & Algorithms",
      "Deep Learning",
      "Linear Algebra",
      "Optimization",
      "Databases",
    ],
    highlights: [
      "GPA: 3.62/4.0",
      "Strong foundation in CS fundamentals",
    ],
  },
]

