import Image from "next/image"
import { Code, Briefcase, GraduationCap } from "lucide-react"

export default function About() {
  const skills = [
    { category: "Frontend", items: ["HTML/CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"] },
    { category: "Tools", items: ["Git", "GitHub", "VS Code", "Figma", "Docker"] },
    { category: "Other", items: ["RESTful APIs", "GraphQL", "Responsive Design", "Testing", "CI/CD"] },
  ]

  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Tech Solutions Inc.",
      period: "Jun 2023 - Aug 2023",
      description:
        "Developed and maintained web applications using React and Node.js. Collaborated with the team to implement new features and fix bugs.",
    },
    {
      title: "Frontend Developer",
      company: "Startup Ventures",
      period: "Jan 2023 - May 2023",
      description:
        "Designed and implemented responsive user interfaces using React and Tailwind CSS. Worked closely with designers to ensure pixel-perfect implementation.",
    },
  ]

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "University Name",
      period: "2020 - 2024",
      description:
        "Relevant coursework: Data Structures, Algorithms, Web Development, Database Management Systems, Software Engineering.",
    },
  ]

  return (
    <div className="min-h-screen pt-20 pb-10 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Get to know more about me, my background, and what I do.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="relative h-[400px] md:h-[500px] border-4 border-rose-500">
          <Image src="/placeholder.svg?height=600&width=500" alt="Profile picture" fill className="object-cover" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Who am I?</h2>
          <p className="text-gray-600 mb-4">
            I'm John Doe, a passionate Full Stack Software Engineer and Startup Enthusiast. I enjoy creating elegant,
            efficient, and user-friendly web applications that solve real-world problems.
          </p>
          <p className="text-gray-600 mb-4">
            Currently pursuing my B.Tech degree in Computer Science, I'm constantly learning and exploring new
            technologies to enhance my skills and stay updated with the latest industry trends.
          </p>
          <p className="text-gray-600 mb-4">
            When I'm not coding, you can find me reading tech blogs, participating in hackathons, or contributing to
            open-source projects. I believe in continuous learning and growth, both personally and professionally.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <h3 className="font-bold">Name:</h3>
              <p>John Doe</p>
            </div>
            <div>
              <h3 className="font-bold">Email:</h3>
              <p>john.doe@example.com</p>
            </div>
            <div>
              <h3 className="font-bold">Location:</h3>
              <p>New York, USA</p>
            </div>
            <div>
              <h3 className="font-bold">Availability:</h3>
              <p>Open to opportunities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-20">
        <div className="flex items-center mb-8">
          <Code size={24} className="text-rose-500 mr-2" />
          <h2 className="text-3xl font-bold">Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-rose-500">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="mb-20">
        <div className="flex items-center mb-8">
          <Briefcase size={24} className="text-rose-500 mr-2" />
          <h2 className="text-3xl font-bold">Experience</h2>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <div className="flex items-center text-rose-500 mb-2">
                <p>{exp.company}</p>
                <span className="mx-2">•</span>
                <p>{exp.period}</p>
              </div>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-20">
        <div className="flex items-center mb-8">
          <GraduationCap size={24} className="text-rose-500 mr-2" />
          <h2 className="text-3xl font-bold">Education</h2>
        </div>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">{edu.degree}</h3>
              <div className="flex items-center text-rose-500 mb-2">
                <p>{edu.institution}</p>
                <span className="mx-2">•</span>
                <p>{edu.period}</p>
              </div>
              <p className="text-gray-600">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
