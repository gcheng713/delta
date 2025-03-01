import './css/style.css'

import { Inter, Caveat } from 'next/font/google'
import localFont from 'next/font/local'
import Theme from './theme-provider'
import Header from '@/components/ui/header'
import QuoteTitle from '@/components/quote-title'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap'
})

const orbiter = localFont({
  src: [
    {
      path: '../public/fonts/OrbiterDisplay-Bold.woff',
      weight: '700',
    },
  ],
  variable: '--font-orbiter',
  display: 'swap',
})

import { metadata } from './metadata'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>{/* suppressHydrationWarning: https://github.com/vercel/next.js/issues/44343 */}
      <body className={`${inter.variable} ${caveat.variable} ${orbiter.variable} font-inter antialiased bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-200 tracking-tight overflow-hidden`}>
        <Theme>
          <div className="flex flex-col h-screen overflow-hidden">

            <Header />

            <div className="grow flex flex-col lg:flex-row">

              {/* Left side */}
              <QuoteTitle title="Speculative Decoding with Diffusion LLMs at Scale" date="28 February, 2025" />

              {/* Right side */}
              <main className="max-lg:grow flex flex-col w-full lg:w-1/2 lg:ml-auto">
                {children}
              </main>

            </div>

          </div>
        </Theme>
      </body>
    </html>
  )
}
