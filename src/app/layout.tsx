import type { Metadata } from 'next'
import '../styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'The ArtLogic — Next.js 15 Starter',
  description: 'Four-page website built with Next.js 15 (src/ structure).',
}

export default function RootLayout({ children }:{ children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
