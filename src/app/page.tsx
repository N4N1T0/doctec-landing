import About from "@/components/about"
import Hero from "@/components/hero"
import Projects from "@/components/projects"



export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Hero />
      <About />
      <Projects />
    </main>
  )
}
