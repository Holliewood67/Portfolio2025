import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})


export const metadata = {
  title: "Ethan Cantrell- Developer",
  description: "Portfolio of Ethan Cantrell — clean code, creative projects, and community-driven events.",
  siteName: 'Ethan Cantrell- Developer',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: "Ethan Cantrell- Developer",
    description: "Portfolio of Ethan Cantrell — clean code, creative projects, and community-driven events.",
  
    images: [
      {
        url: 'https://www.ethancantrell.com/portfolio.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ]
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.variable} `}
      >
        {children}
      </body>
    </html>
  );
}
