'use server'

import { redirect } from 'next/navigation'
import { sql } from '@vercel/postgres'
import { z } from 'zod'

const FormSchema = z.object({
  nome: z.string().min(2, {
    message: '* Informe seu nome.',
  }),
  email: z.string().email({
    message: '* Informe um e-mail válido.',
  }),
  custoMessage: z.string().min(0),
})

export type State = {
  errors?: {
    nome?: string[]
    email?: string[]
    custoMessage?: string[]
  }
  message?: string | null
}

export async function newMessage(prevState: State, formData: FormData) {
  const validatedFields = FormSchema.safeParse({
    nome: formData.get('nome'),
    email: formData.get('email'),
    custoMessage: formData.get('custoMessage'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Not allowed',
    }
  }
  const { nome, email, custoMessage } = validatedFields.data

  const date = new Date().toISOString().split('T')[0]
  try {
    await sql`
  INSERT INTO contacts (name, email, message, date)
  VALUES (${nome}, ${email}, ${custoMessage}, ${date})
  `
  } catch (error) {
    return {
      message: 'Database Error: Erro ao enviar mensagem.',
    }
  }
  redirect('/success')
}
