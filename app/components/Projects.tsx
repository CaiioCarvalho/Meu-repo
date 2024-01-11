import React from 'react'
import { projects } from '../lib/data'
import { CodeBracketIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
  return (
    <section id="projects" className="body-font bg-gray-900 text-gray-400">
      <div className="container mx-auto px-5 py-10 text-center lg:px-40">
        <div className="mb-20 flex w-full flex-col">
          <CodeBracketIcon className="mx-auto mb-4 inline-block w-10" />
          <h1 className="title-font mb-4 text-3xl font-medium text-white sm:text-4xl">
            Aplicações que já implementei
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Algumas pequenas aplicações que desenvolvi recentemente, clicando
            nelas você pode conferir meu GitHub e passando o mouse sobre elas
            vai lhe dá mais detalhes da aplicação.
          </p>
        </div>
        <div className="-m-4 flex flex-wrap">
          {projects.map((project) => (
            <Link
              target="_blank"
              href={project.link}
              key={project.title}
              className="w-100 rounded-md p-4 sm:w-1/2"
            >
              <div className="relative flex">
                <Image
                  alt="gallery"
                  className="absolute inset-0 h-full w-full rounded-md object-cover object-center shadow-xl"
                  src={`/${project.image}`}
                  height={200}
                  width={520}
                />
                <div className="relative z-10 w-full border-4 border-gray-800 bg-gray-900 px-8 py-10 opacity-0 hover:opacity-100">
                  <h2 className="title-font mb-1 text-sm font-medium tracking-widest text-green-400">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font mb-3 text-lg font-medium text-white">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
