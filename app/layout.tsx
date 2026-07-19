import type { Metadata } from "next"
import { Geist } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const title = "Akash Moradiya"
const description =
  "Portfolio of Akash Moradiya, a frontend engineer building polished interfaces and complex product features with a focus on performance."

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Akash Moradiya" }],
  creator: "Akash Moradiya",
  openGraph: {
    type: "website",
    locale: "en_US",
    title,
    description,
    siteName: "Akash Moradiya",
  },
  twitter: {
    card: "summary",
    creator: "@akash_3444",
    title,
    description,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", "font-sans", geist.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
