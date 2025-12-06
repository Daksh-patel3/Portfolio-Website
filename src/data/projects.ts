export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  techStack: string[]
  metrics: string[]
  githubUrl?: string
  liveUrl?: string
  image?: string
}

export const projects: Project[] = [
  {
    id: "customer-retention",
    title: "Enterprise Customer Retention System",
    description: "ANN-based system achieving 90.3% accuracy with 22% retention improvement",
    longDescription: "Developed a comprehensive customer retention system using Artificial Neural Networks to predict customer churn. The system processes large-scale customer data and provides actionable insights for retention strategies.",
    techStack: ["Python", "TensorFlow", "PySpark", "Docker", "AWS", "PostgreSQL"],
    metrics: ["90.3% accuracy", "22% retention improvement", "40% faster ETL", "<50ms API latency"],
    githubUrl: "https://github.com/Daksh-patel3/Customer-Churn-MLP_Project",
  },
  {
    id: "phishing-detection",
    title: "Intelligent Phishing Detection Platform",
    description: "NLP-based system achieving 94% precision and 92% recall on 2.5M+ URLs",
    longDescription: "Built an intelligent phishing detection platform using NLP techniques and TF-IDF vectorization. The system analyzes URLs and email content to identify potential phishing attempts with high accuracy.",
    techStack: ["Python", "NLP", "TF-IDF", "AWS ECS", "Docker", "Scikit-learn"],
    metrics: ["94% precision", "92% recall", "2.5M+ URLs analyzed", "500+ daily predictions"],
    githubUrl: "https://github.com/Daksh-patel3/Malicious-URL-Detection-Project-End-to-End",
  },
  {
    id: "neural-language-model",
    title: "Neural Language Model",
    description: "LSTM/GRU/Transformer hybrid achieving 32% perplexity reduction with <100ms inference",
    longDescription: "Developed a hybrid neural language model combining LSTM, GRU, and Transformer architectures. Implemented beam search and caching mechanisms for efficient inference.",
    techStack: ["Python", "PyTorch", "LSTM", "GRU", "Transformer", "Beam Search"],
    metrics: ["32% perplexity reduction", "<100ms inference time"],
    githubUrl: "https://github.com/Daksh-patel3/Next-Word-Predictor-LSTM-GRU",
  },
]

