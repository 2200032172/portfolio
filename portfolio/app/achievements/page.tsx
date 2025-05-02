import { Award, Calendar, Trophy } from "lucide-react"

export default function Achievements() {
  const achievements = [
    {
      title: "First Place - University Hackathon",
      date: "November 2023",
      description:
        "Developed an innovative solution for healthcare management using React and Firebase, winning first place among 50+ teams.",
      category: "Hackathon",
    },
    {
      title: "Open Source Contributor",
      date: "Ongoing",
      description:
        "Active contributor to several open-source projects with over 100+ commits and 10+ pull requests merged.",
      category: "Open Source",
    },
    {
      title: "Web Development Certification",
      date: "August 2023",
      description:
        "Completed an advanced web development certification covering modern frontend and backend technologies.",
      category: "Certification",
    },
    {
      title: "Best Student Project Award",
      date: "May 2023",
      description:
        "Received recognition for developing an innovative project that addressed real-world problems in the education sector.",
      category: "Award",
    },
  ]

  return (
    <div className="min-h-screen pt-20 pb-10 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Achievements</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A collection of milestones, awards, and recognitions that I've received throughout my journey.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

        <div className="space-y-12">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-rose-500 rounded-full transform -translate-x-1/2 z-10"></div>

              {/* Content */}
              <div className="md:w-1/2 ml-8 md:ml-0">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                  <div className="flex items-center mb-2">
                    {achievement.category === "Hackathon" && <Trophy className="text-rose-500 mr-2" />}
                    {achievement.category === "Open Source" && <Award className="text-rose-500 mr-2" />}
                    {achievement.category === "Certification" && <Award className="text-rose-500 mr-2" />}
                    {achievement.category === "Award" && <Trophy className="text-rose-500 mr-2" />}
                    <span className="text-sm font-medium text-rose-500">{achievement.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <div className="flex items-center text-gray-500 mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{achievement.date}</span>
                  </div>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </div>

              {/* Empty div for layout on alternate sides */}
              <div className="md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
