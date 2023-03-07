import { ReactNode } from "react"
import { Inter } from 'next/font/google'
import Menu from "./Menu"

const inter = Inter({ subsets: ['latin'] })

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <section className={`${inter.className} md:container mx-auto flex justify-center py-20`}>
      <Menu />
      <div className="w-1/2">
        {children}
      </div>
    </section>
  )
}
