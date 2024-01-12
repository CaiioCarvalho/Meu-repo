import React from 'react'
import { skills } from '../lib/data'
import { CheckBadgeIcon, CpuChipIcon } from '@heroicons/react/16/solid'

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
            <div key={skill} className="w-full p-2 sm:w-1/2">
              <div className="flex h-full items-center rounded bg-gray-800 p-4">
                <CheckBadgeIcon className="mr-4 h-6 w-6 flex-shrink-0 text-green-400" />
                <span className="title-font font-medium text-white">
                  {skill}
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
