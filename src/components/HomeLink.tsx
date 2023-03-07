import { ReactNode } from "react"

interface Props {
    text: string,
    link?: string
}

export default function HomeLink({ text, link }: Props) {
  return <a href={link ?? '#'} className="text-[#0F172A] font-medium underline underline-offset-4">{text}</a>
}
