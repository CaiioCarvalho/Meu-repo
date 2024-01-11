import { Contact, Navbar, About, Projects, Skills } from './components'

export default function Home() {
  return (
    <main className="body-font bg-gray-900 text-gray-400">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
