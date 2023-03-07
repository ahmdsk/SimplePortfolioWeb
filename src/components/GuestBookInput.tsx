import { BsArrowRight } from 'react-icons/bs'

interface Props {
    onclick?: () => void
}

export default function GuestBookInput({ onclick }: Props) {
    return (
        <div className="mb-4 space-y-2">
            <div className="relative w-fit">
                <input type="text" className="bg-gray-200 pl-4 pr-24 py-2 rounded-md outline-none w-96" placeholder="Pesan kamu..." />
                <button className="bg-gray-400 rounded-md text-white font-medium py-1 px-4 absolute top-1 right-1">Kirim</button>
            </div>
            <button onClick={onclick} className="text-xs flex gap-1 items-center text-gray-800 font-medium"><BsArrowRight /> Sign out</button>
        </div>
    )
}
