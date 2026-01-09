import { Briefcase, MapPin, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Consultant Intern",
    company: "Perficient India",
    location: "Chennai",
    duration: "Apr 2025 – May 2025",
    responsibilities: [
      "Applied SQL (PostgreSQL), including CTEs, window functions, and complex joins, to design and optimize data queries for real-time business insights",
      "Built and orchestrated data pipelines in Azure Databricks with Data Lake integration, Auto Loader streaming ingestion, and data transformation workflows",
      "Developed Python solutions for file handling, logging, data manipulation (Pandas), and CRUD operations with PostgreSQL, improving data processing efficiency",
    ],
    skills: ["PostgreSQL", "Azure Databricks", "Python", "Pandas", "Data Pipelines"],
  },
]

const certifications = [
  { name: "R Programming (Basic)", provider: "Coursera" },
  { name: "SQL for Data Science", provider: "Great Learning Academy" },
  { name: "PostgreSQL Project", provider: "Infosys Springboard" },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Professional Journey</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    </div>
                    <p className="text-lg text-muted-foreground">{exp.company}</p>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {exp.duration}
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {resp}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="font-normal">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-foreground mb-6">Certifications</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-4">
                  <p className="font-medium text-foreground">{cert.name}</p>
                  <p className="text-sm text-muted-foreground">{cert.provider}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
