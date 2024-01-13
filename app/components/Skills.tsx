import React from 'react'
import { skills } from '../lib/data'
import { CpuChipIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'

const Skills = () => {
  return (
    <section id="skills">
      <div className="container mx-auto px-5 py-10">
        <div className="mb-20 text-center">
          <CpuChipIcon className="mb-4 inline-block w-10" />
          <h1 className="title-font mb-4 text-3xl font-medium text-white sm:text-4xl">
            Skills &amp; Tecnologias
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-3/4 xl:w-2/4">
            Algumas tecnologias de que tenho domínio e continuo me
            aperfeiçoando. Atualmente tenho utilizado mais o Next.js,
            TypeScript, Tailwind e SQL.
          </p>
        </div>
        <div className="-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-4/5">
          {skills.map((skill) => (
            <div key={skill.name} className="w-full p-2 sm:w-1/2">
              <div className="flex h-full items-center rounded bg-gray-800 p-4">
                <Image
                  width={24}
                  height={24}
                  src={skill.logo}
                  alt=""
                  className="mr-4 flex-shrink-0"
                />
                <span className="title-font font-medium text-white">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
