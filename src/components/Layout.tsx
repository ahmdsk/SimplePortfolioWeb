import { ReactNode } from "react"
import { Inter } from 'next/font/google'
import Menu from "./Menu"

const inter = Inter({ subsets: ['latin'] })

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <section className={`${inter.className} md:container mx-auto xl:flex justify-center xl:py-20 p-4`}>
      <Menu />
      <div className="xl:w-1/2">
        {children}
      </div>
    </section>
  )
}
