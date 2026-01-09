import { Code2, Database, Brain, BarChart3 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "R", "SQL"],
  },
  {
    title: "Tools & Libraries",
    icon: BarChart3,
    skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Plotly", "TensorFlow", "PyTorch"],
  },
  {
    title: "Concepts",
    icon: Brain,
    skills: ["Regression Analysis", "Multivariate Statistics", "Machine Learning", "Deep Learning"],
  },
  {
    title: "Data Engineering",
    icon: Database,
    skills: ["PostgreSQL", "Databricks", "Spark", "Hadoop", "MongoDB", "Cassandra"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Technical Expertise</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="bg-card border-border">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="font-normal">
                      {skill}
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
