import { Folder } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "DataView Studio",
    description: "An interactive application for uploading, previewing, and analyzing datasets",
    highlights: [
      "Implemented statistical computations including mean, variance, correlation, PCA, and regression analysis",
      "Incorporated dynamic visuals including scatter plot, line chart, bar plot, box plot, violin plot and histograms",
    ],
    technologies: ["Python", "Data Analysis", "Statistical Computing", "Visualization"],
  },
  {
    title: "Car Price Prediction & Recommendation",
    description: "Predicts selling price of preowned cars and provides personalized recommendations",
    highlights: [
      "Analyzes factors such as brand, model, year, mileage, and market trends",
      "Provides personalized car recommendations analyzing user preferences and budget",
      "Published as a conference paper",
    ],
    technologies: ["Machine Learning", "Python", "Regression", "Recommendation Systems"],
    featured: true,
  },
  {
    title: "Autonomous Car Parking RL Agent",
    description: "End-to-end autonomous parking solution using reinforcement learning",
    highlights: [
      "Developed using Python, gymnasium, and stable-baselines3",
      "Trained SAC agent achieving 80%+ parking success rate in randomized scenarios",
      "Implemented environment configuration and reward shaping",
    ],
    technologies: ["Reinforcement Learning", "Python", "Gymnasium", "Stable-Baselines3"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Work</h2>
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <Card key={index} className={`bg-card border-border ${project.featured ? "ring-1 ring-primary/20" : ""}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Folder className="h-5 w-5 text-primary" />
                  </div>
                  <span className="flex-1">{project.title}</span>
                  {project.featured && (
                    <Badge variant="secondary" className="font-normal">
                      Conference Paper
                    </Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>

                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
