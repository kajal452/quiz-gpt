import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quiz GPT',
  description: 'Quiz GPT - OpenAI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <section>
        <nav>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/service'>Service</Link>
            <Link href='/contact'>Contact</Link>
        </nav>
   
        {children}
      </section>
        </body>
    </html>
  )
}
