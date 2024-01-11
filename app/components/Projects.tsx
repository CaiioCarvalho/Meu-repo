import React from 'react'
import { projects } from '../lib/data';
import { CodeBracketIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeBracketIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Aplicações que já implementei
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Algumas pequenas aplicações que desenvolvi recentemente, clicando nelas você pode conferir meu
            GitHub e passando o mouse sobre elas vai lhe dá mais detalhes da aplicação.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <Link
              target='_blank'
              href={project.link}
              key={project.title}
              className="sm:w-1/2 w-100 p-4 rounded-md">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full rounded-md object-cover object-center shadow-xl"
                  src={`/${project.image}`}
                  height={200}
                  width={520}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
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