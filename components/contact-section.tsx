import { Mail, Phone, MapPin, Linkedin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "nithishkumar030305@gmail.com",
    href: "mailto:nithishkumar030305@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9629910281",
    href: "tel:+919629910281",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "s-nithishkumar",
    href: "https://linkedin.com/in/s-nithishkumar",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Coimbatore, India",
    href: null,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {
              "I'm currently looking for internship opportunities. Feel free to reach out if you'd like to discuss potential collaborations or opportunities."
            }
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contactInfo.map((item) => (
            <Card key={item.label} className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-3 rounded-xl bg-muted mb-4">
                  <item.icon className="h-5 w-5 text-foreground" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="font-medium text-foreground hover:text-primary transition-colors break-all"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="font-medium text-foreground">{item.value}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <a href="mailto:nithishkumar030305@gmail.com">Send me an Email</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
