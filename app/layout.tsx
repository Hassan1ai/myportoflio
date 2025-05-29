import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hassan Mohamed - Frontend Developer & Graphic Designer",
  description:
    "Portfolio of Hassan Mohamed, a passionate Frontend Developer and Graphic Designer specializing in React.js, Next.js, and creative design solutions.",
  keywords: [
    "Hassan Mohamed",
    "Frontend Developer",
    "Graphic Designer",
    "React.js",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Hassan Mohamed" }],
  creator: "Hassan Mohamed",
  openGraph: {
    title: "Hassan Mohamed - Frontend Developer & Graphic Designer",
    description: "Portfolio showcasing innovative web development and creative design projects",
    url: "https://hassan-portfolio.vercel.app",
    siteName: "Hassan Mohamed Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hassan Mohamed Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hassan Mohamed - Frontend Developer & Graphic Designer",
    description: "Portfolio showcasing innovative web development and creative design projects",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
