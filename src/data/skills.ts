export interface SkillCategory {
  name: string
  skills: string[]
  icon?: string
}

export const skills: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: ["Python", "C++", "SQL", "R"],
  },
  {
    name: "ML/DL Frameworks",
    skills: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "XGBoost", "HuggingFace"],
  },
  {
    name: "Data Processing",
    skills: ["Pandas", "NumPy", "PySpark"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, Lambda, SageMaker)", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    name: "Other Skills",
    skills: [
      "Feature Engineering",
      "Model Evaluation",
      "Data Engineering",
      "MLOps",
      "REST APIs",
      "System Design",
    ],
  },
]

