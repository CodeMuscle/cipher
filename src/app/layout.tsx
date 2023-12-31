import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import db from '@/lib/supabase/db';
import { ThemeProvider } from '@/lib/providers/next-theme-provider';

const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  title: 'cipher.',
  description: 'Your go-to notes app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark"
          enableSystem  
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export { metadata };
