import type { Metadata } from "next"
import { Cinzel } from 'next/font/google'
import "./globals.css"

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: ['400', '700', '900'],
})

export const metadata: Metadata = {
  title: "CastleMind AI",
  description: "Intelligent Castle-Themed Dashboard for Enchanted Stays",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cinzel.variable} antialiased`}>
      <body className="bg-black text-foreground min-h-screen">
        {children}
      </body>
    </html>
  )
}