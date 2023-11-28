import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {ReactNode} from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

type LayoutProps = {
  children: ReactNode
}

export default function RootLayout(props: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>{props.children}</body>
    </html>
  )
}

// export default function RootLayout({children,}: {children: React.ReactNode}) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   )
// }
