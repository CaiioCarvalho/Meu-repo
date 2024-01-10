import { Contact, Navbar, About,  Projects,  Skills,  Testimonials } from './components'

export default function Home() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
