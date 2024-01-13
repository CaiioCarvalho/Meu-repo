import { CommandLineIcon } from '@heroicons/react/16/solid'
import { CheckCheck } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Success = () => {
  return (
    <section className="h-screen bg-gray-900">
      <div className="container mx-auto px-5 py-10 text-center">
        <CheckCheck className="mb-4 inline-block h-20 w-20 text-green-500" />
        <h1 className="title-font mb-12 text-3xl font-medium text-white sm:text-4xl">
          Sua mensagem foi enviada com sucesso!
        </h1>
        <div className="m-4 flex flex-wrap items-center justify-center">
          <div className="w-full p-4 md:w-1/2">
            <div className="flex h-full flex-col items-center justify-center rounded bg-gray-800 bg-opacity-40 p-8">
              <CommandLineIcon className="mb-4 w-8 text-gray-500" />
              <p className="mb-6 leading-relaxed"></p>
              <div className="inline-flex items-center">
                <span className="flex flex-grow flex-col pl-4">
                  <span className="title-font font-medium text-white">
                    Obrigado por me contatar
                  </span>
                  <span className="text-sm text-gray-500">
                    Em breve você receberá uma resposta
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <Link
          href="/"
          className="ml-4 inline-flex rounded border-0 px-6 py-2 text-lg text-gray-500 underline hover:text-white focus:outline-none"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </section>
  )
}

export default Success
