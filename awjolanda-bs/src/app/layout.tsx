import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'awjolanda.ch',
  description: 'Von Tim Freitag',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de-CH">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
