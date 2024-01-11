import { ArrowRightIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className="top-0 z-10 bg-gray-800 md:sticky">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <div className="title-font mb-4 font-medium text-white md:mb-0">
          <Link href="#about" className="ml-3 text-xl">
            Caio Carvalho
          </Link>
        </div>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-4	md:mr-auto md:border-l md:border-gray-700 md:py-1 md:pl-4">
          <Link href="#projects" className="mr-5 hover:text-white">
            Projetos
          </Link>
          <Link href="#skills" className="mr-5 hover:text-white">
            Skills
          </Link>
        </nav>
        <Link
          href="#contact"
          className="mt-4 inline-flex items-center rounded border-0 bg-gray-800 px-3 py-1 text-base hover:bg-gray-700 focus:outline-none md:mt-0"
        >
          Contato
          <ArrowRightIcon className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </header>
  )
}

export default Navbar
