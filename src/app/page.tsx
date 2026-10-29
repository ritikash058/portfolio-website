"use client";

import MasterLayout from "@/components/MasterLayout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <MasterLayout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
    </MasterLayout>
  );
}