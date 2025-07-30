import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ProjectsSection() {
  const projects = [
    {
      title: "To do Task",
      description:
        "A modern admin dashboard for managing products, orders, and customers with real-time analytics and responsive design.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Dev Blog",
      description:
        "A sleek developer blog built with Next.js, Tailwind CSS, shadcn/ui, and Better Auth.Designed for sharing insights, tutorials, and tools with secure, modern UI components.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "TypeScript", "CSS Modules", "Local Storage"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Weather Forecast App",
      description:
        "A responsive weather application that provides current conditions and 7-day forecasts with beautiful animations and charts.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "Tailwind CSS", "REST API", "Chart.js"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing projects and skills with smooth animations and modern design principles.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Recipe Finder App",
      description:
        "A recipe discovery application with search functionality, favorites system, and detailed cooking instructions.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Recipe API"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Expense Tracker",
      description:
        "A personal finance tracker with category management, spending analytics, and budget planning features.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "Redux Toolkit", "Chart.js", "Local Storage"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of the projects I've built to showcase my skills and
            learn new technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-gray-700 overflow-hidden group hover:border-blue-500 transition-colors"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-white">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-400 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-gray-700 text-gray-300 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-2 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
          >
            <Github size={20} className="mr-2" />
            <Link href={"https://github.com/Mutaz-3301"}>
              View All Projects on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
