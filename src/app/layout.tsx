// src/app/layout.tsx

import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Knowlbase AI',
  description: 'Ask your documents anything',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <main className="p-6">{children}</main>
      </body>
    </html>
  )
}
