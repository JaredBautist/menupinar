import type { Metadata } from 'next'
import { Pacifico, Oswald, Roboto_Condensed } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const pacifico = Pacifico({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pacifico'
})

const oswald = Oswald({ 
  subsets: ['latin'],
  variable: '--font-oswald'
})

const robotoCondensed = Roboto_Condensed({ 
  subsets: ['latin'],
  variable: '--font-roboto-condensed'
})

export const metadata: Metadata = {
  title: 'Metro Pizza Premium - Carta Menú',
  description: 'Menú digital de Metro Pizza Premium - Pizzas, Crepes, Lasagna, Pastas y más',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${pacifico.variable} ${oswald.variable} ${robotoCondensed.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
