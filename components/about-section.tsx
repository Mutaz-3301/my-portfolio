import { Card, CardContent } from "@/components/ui/card"
import { Code, Lightbulb, Rocket } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A passionate frontend developer with a strong foundation in modern web technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a dedicated frontend developer with expertise in React, Next.js, and TypeScript. While I'm early in my
              career journey, I've built a solid foundation through self-learning and personal projects.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm passionate about creating user-friendly interfaces and writing clean, maintainable code. I stay
              up-to-date with the latest web development trends and best practices, always eager to learn and grow in
              this dynamic field.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Currently seeking my first professional role where I can contribute to meaningful projects and continue
              developing my skills alongside experienced developers.
            </p>
          </div>

          <div className="grid gap-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Code className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Clean Code</h3>
                    <p className="text-gray-400">Writing maintainable and scalable code</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-600 p-3 rounded-lg">
                    <Lightbulb className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Problem Solving</h3>
                    <p className="text-gray-400">Finding creative solutions to complex challenges</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <Rocket className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Fast Learner</h3>
                    <p className="text-gray-400">Quickly adapting to new technologies</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
