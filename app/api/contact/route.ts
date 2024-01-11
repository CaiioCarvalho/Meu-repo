
import { redirect } from 'next/navigation';
import { Resend } from 'resend';

export async function POST(req: Request, res: Response) {
  const { name, email, message} = await req.json()
  const PASSWORD = process.env.password
const resend = new Resend(PASSWORD);

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'caiohenrique043@gmail.com',
  subject: `New Job Aplicattion`,
  html: `<p>O ${name} mandou uma mensagem para você<strong> ${email}</strong><div>${message}</div</p>`
});

redirect(`https://meu-repo-alpha.vercel.app/success`)
}
