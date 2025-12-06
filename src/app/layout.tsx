import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import NoDevOverlay from "@/components/NoDevOverlay"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  metadataBase: new URL("https://dakshpatel.dev"),
  title: {
    default: "Daksh Patel | Machine Learning Engineer",
    template: "%s | Daksh Patel",
  },
  description: "MS in Computer Science at UMass Amherst. ML Engineer with experience in scalable production ML systems, NLP, Deep Learning, and efficient model architectures. IEEE-published researcher.",
  keywords: ["Machine Learning", "Deep Learning", "Data Science", "ML Engineer", "NLP", "AI Research"],
  authors: [{ name: "Daksh Patel" }],
  creator: "Daksh Patel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dakshpatel.dev",
    title: "Daksh Patel | Machine Learning Engineer",
    description: "MS in Computer Science at UMass Amherst. ML Engineer with experience in scalable production ML systems, NLP, Deep Learning, and efficient model architectures.",
    siteName: "Daksh Patel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daksh Patel | Machine Learning Engineer",
    description: "MS in Computer Science at UMass Amherst. ML Engineer with experience in scalable production ML systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <NoDevOverlay />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

