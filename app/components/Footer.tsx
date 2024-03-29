import { Github, InstagramIcon, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer id="testimonials">
      <div className="flex flex-col border-t-2 border-zinc-800 px-5 py-10 text-center sm:justify-around md:flex-row lg:flex-row-reverse">
        <span className="title-font sm:text-md mb-12 flex flex-col text-sm font-medium text-zinc-200">
          Site implementado usando Next.js, Tailwind, TypeScript.
          <span className="title-font sm:text-md mb-1 text-sm font-medium text-zinc-400">
            Database e deployment utilizando Vercel.
          </span>
        </span>

        <div className="flex justify-center gap-6">
          <Link target="_blank" href="https://www.instagram.com/caiohvc/">
            <InstagramIcon className="hover:text-zinc-200" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/caio-carvalho-285023b3/"
          >
            <Linkedin className="hover:text-zinc-200" />
          </Link>
          <Link target="_blank" href="https://github.com/CaiioCarvalho">
            <Github className="hover:text-zinc-200" />
          </Link>
        </div>
        <p className="title-font sm:text-md mb-2 mt-4 text-sm font-medium text-zinc-500">
          © 2024 Caio Carvalho. Nenhum direito reservado.
        </p>
      </div>
    </footer>
  )
}

export default Footer
