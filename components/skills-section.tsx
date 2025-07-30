"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export function SkillsSection() {
  const skills = [
    {
      title: "Frontend Technologies",
      description: "Modern web development with React ecosystem",
      link: "#",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
      ],
    },
    {
      title: "Styling & UI",
      description: "Creating beautiful and responsive user interfaces",
      link: "#",
      technologies: [
        "Tailwind CSS",
        "CSS Modules",
        "Responsive Design",
        "shadcn/ui",
      ],
    },
    {
      title: "State Management",
      description: "Managing application state effectively",
      link: "#",
      technologies: ["Redux Toolkit", "React Context", "Local Storage"],
    },
    {
      title: "Development Tools",
      description: "Version control and development workflow",
      link: "#",
      technologies: ["Git", "GitHub", "VS Code", "npm/yarn"],
    },
    {
      title: "Web Fundamentals",
      description: "Core web development concepts and best practices",
      link: "#",
      technologies: ["REST APIs", "JSON", "ES6+", "Async/Await"],
    },
    {
      title: "Learning & Growth",
      description: "Currently expanding knowledge in these areas",
      link: "#",
      technologies: [
        "Node.js",
        "Testing",
        "Performance Optimization",
        "Accessibility",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are the technologies I work with to build modern web
            applications
          </p>
        </div>

        <div className="mb-16">
          <HoverEffect
            items={skills.map((skill) => ({
              ...skill,
              description: (
                <div className="space-y-4">
                  <p className="text-gray-400">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-gray-800 text-gray-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ),
            }))}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">2+</div>
              <p className="text-gray-400">Years Learning</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">10+</div>
              <p className="text-gray-400">Personal Projects</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-500 mb-2">
                100%
              </div>
              <p className="text-gray-400">Commitment</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
