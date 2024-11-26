import './globals.css'
import { Inter, Cormorant_Garamond } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // specify the available weights
  variable: '--font-cormorant',
})

export const metadata = {
  title: 'AtmaVeda - Gateway to Eternal Wisdom',
  description: 'Explore the Vedas, seek divine guidance, and uncover India\'s spiritual legacy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorantGaramond.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
