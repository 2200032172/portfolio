import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <p className="text-xl mb-2">Welcome</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            I'm <span className="text-rose-500">Nishita</span> Amara
          </h1>
          <div className="bg-rose-500 text-white px-6 py-2 rounded-full inline-block">
            Future-Ready Software Engineer with a Passion for DevOps
          </div>

          <div className="absolute bottom-8">
            <span className="animate-bounce block w-6 h-6 border-2 border-white rounded-full"></span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[500px] border-4 border-rose-500">
            <Image src="/placeholder.svg?height=600&width=500" alt="Profile picture" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Amara Lakshmi Nishita</h2>
            <div className="text-rose-500 font-medium mb-4">
              Aspiring Full Stack Software Engineer | B.Tech Student at K L University | DevOps Enthusiast
            </div>
            <p className="text-gray-600 mb-6">
              I’m a passionate Full Stack Software Engineer, dedicated to innovation and building impactful digital
              solutions. I specialize in developing responsive and scalable web applications using modern technologies
              such as React, Next.js, and Node.js.
            </p>
            <p className="text-gray-600 mb-6">
              Currently pursuing my B.Tech degree at K L University, I’m constantly learning and exploring new
              technologies, with a growing interest in DevOps practices. My goal is to create software that not only
              solves real-world problems but also delivers lasting value to users.
            </p>
            <div className="flex gap-4">
              <Link
                href="/C:\Users\nishi\Downloads\Resumes\Amara Lakshmi Nishita.pdf"
                className="bg-rose-500 text-white px-6 py-2 rounded hover:bg-rose-600 transition"
              >
                Download CV
              </Link>
              <Link
                href="/contact"
                className="border-2 border-rose-500 text-rose-500 px-6 py-2 rounded hover:bg-rose-500 hover:text-white transition"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
