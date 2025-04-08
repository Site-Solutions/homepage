import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "BuildSimpli - Construction Project Management Made Simple",
  description:
      "The ultimate tool for simplifying construction project management. Designed specifically for construction teams, BuildSimpli streamlines communication, documentation, and task tracking.",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" suppressHydrationWarning>
      <head />
      <body>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
      </body>
      </html>
  )
}