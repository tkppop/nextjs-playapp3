import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css"
import NavBar from '../components/NavBar'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <NavBar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
