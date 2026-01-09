import { GraduationCap, MapPin, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">About</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Background</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-pretty">
              A detail-focused and goal-oriented data science student with a solid academic foundation. Looking for an
              internship experience to execute hands-on work in data analysis, machine learning, and visualization,
              develop my skills, and contribute meaningfully to the discipline while learning and developing
              continuously.
            </p>
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Highlights</h3>
              <ul className="space-y-3">
                {[
                  "Strong foundation in Python, R, SQL, and modern data engineering tools",
                  "Experienced with ML frameworks including TensorFlow and PyTorch",
                  "Proficient in data visualization and statistical analysis",
                  "Published conference paper on Car Price Prediction",
                ].map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground">Integrated MSc in Data Science</h4>
                  <p className="text-muted-foreground">Amrita Vishwa Vidyapeetham</p>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Coimbatore
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    2022 – Present
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Current Year</span>
                    <span className="font-medium text-foreground">4th Year (5-year program)</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-muted-foreground">CGPA</span>
                    <span className="font-semibold text-primary">9.04/10</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
