import { ProfileCard } from "@/components/profile-card"

const profiles = [
  {
    platform: "LeetCode",
    icon: "leetcode",
    url: "https://leetcode.com/",
    username: "nithishkumar",
    badges: ["SQL50", "50 Days Badge 2025", "Introduction to Pandas"],
    description: "Active problem solver focusing on SQL and data structures",
    color: "#FFA116",
  },
  {
    platform: "GitHub",
    icon: "github",
    url: "https://github.com/",
    username: "nithishkumar",
    description: "Open source contributions and project repositories",
    color: "#333",
  },
  {
    platform: "LinkedIn",
    icon: "linkedin",
    url: "https://linkedin.com/in/s-nithishkumar",
    username: "s-nithishkumar",
    description: "Professional networking and career updates",
    color: "#0A66C2",
  },
  {
    platform: "HackerRank",
    icon: "hackerrank",
    url: "https://hackerrank.com/",
    username: "nithishkumar",
    badges: ["SQL Silver", "Problem Solving Basic", "Python Basics"],
    description: "Skill certifications and coding challenges",
    color: "#00EA64",
  },
  {
    platform: "Kaggle",
    icon: "kaggle",
    url: "https://kaggle.com/",
    username: "nithishkumar",
    badges: ["Intro to ML", "Intermediate ML", "Python"],
    description: "Machine learning competitions and datasets",
    color: "#20BEFF",
  },
]

export function CodingProfilesSection() {
  return (
    <section id="profiles" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Profiles</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Coding Profiles</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Active on multiple competitive programming and professional platforms, continuously improving
            problem-solving skills and contributing to the developer community.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile) => (
            <ProfileCard key={profile.platform} profile={profile} />
          ))}
        </div>
      </div>
    </section>
  )
}
