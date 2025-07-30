"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Link from "next/link";

export function HeroSection() {
  const words = [
    { text: "Frontend" },
    { text: "Developer" },
    { text: "&" },
    { text: "Next", className: "text-blue-500 dark:text-blue-500" },
    { text: "Specialist", className: "text-blue-500 dark:text-blue-500" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <BackgroundBeams />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Hi, I'm <span className="text-blue-500">Mutaz Ahmed</span>
          </h1>
          <div className="mb-6">
            <TypewriterEffect words={words} />
          </div>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Passionate about creating beautiful, responsive web applications
            with modern technologies. Ready to bring your ideas to life with
            clean code and stunning user experiences.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            onClick={() => scrollToSection("projects")}
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 bg-transparent"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <Link
            href="https://github.com/Mutaz-3301"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mutaz-ahmed-146ba132a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin size={24} />
          </Link>
          <Link
            href="mailto:ezoo8937@gmail.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail size={24} />
          </Link>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="text-gray-400 hover:text-white transition-colors animate-bounce"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
}
