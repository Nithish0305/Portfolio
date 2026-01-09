import type React from "react"
import { ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LeetCodeIcon, GitHubIcon, LinkedInIcon, HackerRankIcon, KaggleIcon } from "@/components/icons"

interface Profile {
  platform: string
  icon: string
  url: string
  username: string
  badges?: string[]
  description: string
  color: string
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  leetcode: LeetCodeIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  hackerrank: HackerRankIcon,
  kaggle: KaggleIcon,
}

export function ProfileCard({ profile }: { profile: Profile }) {
  const Icon = iconMap[profile.icon] || GitHubIcon

  return (
    <a href={profile.url} target="_blank" rel="noopener noreferrer" className="group block">
      <Card className="bg-card border-border h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-xl bg-muted">
              <Icon className="h-6 w-6 text-foreground" />
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <h3 className="font-semibold text-foreground mb-1">{profile.platform}</h3>
          <p className="text-sm text-muted-foreground mb-4">@{profile.username}</p>
          <p className="text-sm text-muted-foreground mb-4">{profile.description}</p>

          {profile.badges && profile.badges.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {profile.badges.slice(0, 3).map((badge) => (
                <Badge key={badge} variant="secondary" className="text-xs font-normal">
                  {badge}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </a>
  )
}
