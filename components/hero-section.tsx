import { ArrowDown } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Data Science Student</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
          S. Nithish Kumar
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-pretty">
          Building intelligent solutions through data science, machine learning, and analytics. Currently pursuing
          Integrated MSc at Amrita Vishwa Vidyapeetham with a CGPA of 9.13/10.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="#contact">Get in Touch</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#projects">View Projects</Link>
          </Button>
        </div>
        <div className="mt-16 animate-bounce">
          <Link href="#about" aria-label="Scroll to about section">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </Link>
        </div>
      </div>
    </section>
  )
}
