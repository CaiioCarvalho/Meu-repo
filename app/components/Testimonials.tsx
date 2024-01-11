import React from 'react'
import { testimonials } from '../lib/data'
import { CommandLineIcon, UsersIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container mx-auto px-5 py-10 text-center">
        <UsersIcon className="mb-4 inline-block w-10" />
        <h1 className="title-font mb-12 text-3xl font-medium text-white sm:text-4xl">
          Client Testimonials
        </h1>
        <div className="m-4 flex flex-wrap">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="w-full p-4 md:w-1/2">
              <div className="h-full rounded bg-gray-800 bg-opacity-40 p-8">
                <CommandLineIcon className="mb-4 block w-8 text-gray-500" />
                <p className="mb-6 leading-relaxed">{testimonial.quote}</p>
                <div className="inline-flex items-center">
                  <Image
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 flex-shrink-0 rounded-full object-cover object-center"
                    width={48}
                    height={48}
                  />
                  <span className="flex flex-grow flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {testimonial.name}
                    </span>
                    <span className="text-sm uppercase text-gray-500">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
