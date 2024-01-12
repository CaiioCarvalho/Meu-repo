'use client'

import React from 'react'
import { useFormState } from 'react-dom'
import { newMessage } from '../lib/actions'

export default function Contact() {
  const initialState = {
    errors: {},
    message: '',
  }
  const [state, dispatch] = useFormState(newMessage, initialState)
  return (
    <form action={dispatch} id="contact" name="contact2" className="relative">
      <div className="container mx-auto flex flex-wrap px-5 py-10 sm:flex-nowrap">
        <div className="relative flex items-end justify-start overflow-hidden rounded-lg bg-gray-900 p-10 sm:mr-10 md:w-1/2 lg:w-2/3">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{ filter: 'opacity(0.7)' }}
            src="https://www.google.com/maps/embed/v1/place?q=manaus+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="relative flex flex-wrap rounded bg-gray-900 p-4 py-6 shadow-md">
            <div className="pl-4 lg:w-1/2">
              <h2 className="title-font text-xs font-semibold tracking-widest text-white">
                ENDEREÇO
              </h2>
              <p className="mt-1">
                Rua Frei Sabino 1445 <br />
                Manaus, AM
              </p>
            </div>
            <div className="mt-4 pr-10 lg:mt-0 lg:w-1/2">
              <h2 className="title-font text-xs font-semibold tracking-widest text-white">
                EMAIL
              </h2>
              <a className="leading-relaxed text-indigo-400">
                caiohenrique043@gmail.com
              </a>
              <h2 className="title-font mt-4 text-xs font-semibold tracking-widest text-white">
                TELEFONE
              </h2>
              <p className="leading-relaxed">+55 92 98429-7735</p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex w-full flex-col md:ml-auto md:mt-0 md:w-1/2 md:py-8 lg:w-1/3">
          <h2 className="title-font mb-1 text-3xl font-medium text-white sm:text-4xl">
            Entre em contato
          </h2>
          <p className="mb-5 leading-relaxed">
            As mensagens enviadas por aqui são armazenadas em um banco de dados
            da Vercel. Responderei o mais breve possível.
          </p>
          <div className="mb-4">
            <div className="relative">
              <label htmlFor="name" className="text-sm leading-7 text-gray-400">
                Name
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                aria-describedby="nome-error"
                placeholder="Diga seu nome"
                className="w-full rounded border border-gray-700 bg-gray-800 px-3 py-1 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
              />
            </div>
            <div id="nome-error" aria-live="polite" aria-atomic="true">
              {state.errors?.nome &&
                state.errors.nome.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
          <div className="mb-4">
            <div className="relative">
              <label htmlFor="name" className="text-sm leading-7 text-gray-400">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Informe seu email"
                aria-describedby="email-error"
                className="w-full rounded border border-gray-700 bg-gray-800 px-3 py-1 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
              />
            </div>
            <div id="email-error" aria-live="polite" aria-atomic="true">
              {state.errors?.email &&
                state.errors.email.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
          <div className="mb-4">
            <div className="relative">
              <label
                htmlFor="custoMessage"
                className="text-sm leading-7 text-gray-400"
              >
                Mensagem
              </label>
              <textarea
                id="custoMessage"
                name="custoMessage"
                aria-describedby="custoMessage-error"
                placeholder="Helo world"
                className="w-full rounded border border-gray-700 bg-gray-800 px-3 py-1 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
              />
            </div>
            <div id="custoMessage-error" aria-live="polite" aria-atomic="true">
              {state.errors?.custoMessage &&
                state.errors.custoMessage.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
          <button
            type="submit"
            className="rounded border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}
