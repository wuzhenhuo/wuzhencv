import type { Metadata } from "next"
import { Space_Grotesk, Space_Mono, Doto, Noto_Sans_SC } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/components/language-provider"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-space-grotesk",
})
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})
const doto = Doto({
  subsets: ["latin"],
  variable: "--font-doto",
})
const notoSansSC = Noto_Sans_SC({
  weight: ["300", "400", "500"],
  variable: "--font-noto-sans-sc",
  preload: false,
})

export const metadata: Metadata = {
  title: "Wu Zhen 吴振 — Multimedia Artist & Projection Designer",
  description:
    "Wu Zhen (吴振) is a multimedia artist, projection designer, and Associate Professor at Beijing Dance Academy. Work spans stage multimedia, AI film, projection mapping, and immersive performance.",
  generator: "v0.app",
  openGraph: {
    title: "Wu Zhen 吴振 — Multimedia Artist & Projection Designer",
    description:
      "Multimedia artist working at the intersection of dance, projection, and artificial intelligence.",
    type: "website",
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
      className={`${spaceGrotesk.variable} ${spaceMono.variable} ${doto.variable} ${notoSansSC.variable} bg-background`}
    >
      <body className="font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
