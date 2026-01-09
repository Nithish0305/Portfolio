import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "S. Nithish Kumar | Data Science Portfolio",
  description:
    "Data Science student at Amrita Vishwa Vidyapeetham specializing in machine learning, data analysis, and visualization. View my projects, skills, and experience.",
  keywords: ["Data Science", "Machine Learning", "Python", "Portfolio", "S. Nithish Kumar"],
  authors: [{ name: "S. Nithish Kumar" }],
  openGraph: {
    title: "S. Nithish Kumar | Data Science Portfolio",
    description: "Data Science student specializing in machine learning, data analysis, and visualization.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  )
}
