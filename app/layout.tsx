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

const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: title,
}

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://akashmoradiya.com"
  ),
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
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@akash_3444",
    title,
    description,
    images: [ogImage],
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
