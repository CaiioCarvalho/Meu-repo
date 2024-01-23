import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex flex-col items-center px-10 py-20 md:flex-row">
        <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          <h1 className="title-font mb-4 text-3xl font-medium text-white sm:text-4xl">
            Olá, eu me chamo Caio.
            <br className="hidden lg:inline-block" />
            Sou desenvolvedor Full Stack
          </h1>
          <p className="mb-8 leading-relaxed">
            Pronto para implementar aplicações front-end e full stack. Este
            portifófio tem integração com o back-end que me permite armazenar as
            mensagens enviadas pelo formulário de contato.
          </p>
          <div className="flex justify-center">
            <Link
              href="#contact"
              className="inline-flex rounded border-0 bg-green-500 px-6 py-2 text-lg text-white hover:bg-green-600 focus:outline-none"
            >
              Entre em contato
            </Link>
            <Link
              href="#projects"
              className="ml-4 inline-flex rounded border-0 bg-gray-800 px-6 py-2 text-lg text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
            >
              Ver meus projetos
            </Link>
          </div>
        </div>
        <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
          <Image
            className="h-[300px] w-[450px] rounded object-cover object-center"
            alt="hero"
            src="./full-stack-web-developer.svg"
            priority={true}
            width={450}
            height={300}
          />
        </div>
      </div>
    </section>
  )
}

export default About
