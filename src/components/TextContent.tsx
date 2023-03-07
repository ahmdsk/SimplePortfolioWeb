import { ReactNode } from "react"

interface Props {
    children: ReactNode,
    className?: string
}

export default function TextContent({ children, className }: Props) {
  return <p className={`font-normal py-4 ${className}`}>{children}</p>
}
