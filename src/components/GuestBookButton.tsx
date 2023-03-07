import { BsGithub } from "react-icons/bs"

interface Props {
  onclick?: () => void
}

export default function GuestBookButton({ onclick }: Props) {
  return (
    <button onClick={onclick} className="bg-zinc-900 rounded-lg py-2 px-4 flex items-center gap-3 mb-3 text-white text-sm font-medium"><BsGithub className="text-2xl" /> Sign in with Github</button>
  )
}
