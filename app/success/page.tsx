import { CommandLineIcon } from '@heroicons/react/16/solid'
import { CheckCheck, UsersIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Success = () => {
  return (
    <section>
      <div className="container px-5 py-10 mx-auto text-center">
        <CheckCheck className="w-20 h-20 inline-block mb-4 text-green-500" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Sua mensagem foi enviada com sucesso!
        </h1>
        <div className="flex flex-wrap items-center justify-center m-4">
        <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 flex flex-col justify-center items-center bg-opacity-40 p-8 rounded">
                <CommandLineIcon className="w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6"></p>
                <div className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      Obrigado por me contatar
                    </span>
                    <span className="text-gray-500 text-sm">
                      Em breve você receberá uma resposta
                    </span>
                  </span>
                </div>
              </div>
            </div>
        </div>
            <Link
              href="/"
              className="ml-4 inline-flex underline text-gray-500 border-0 py-2 px-6 focus:outline-none hover:text-white rounded text-lg">
              Voltar para a página inicial
            </Link>
      </div>
    </section>
  )
}

export default Success