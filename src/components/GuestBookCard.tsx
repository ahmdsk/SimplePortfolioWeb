import Image from 'next/image'

interface Props {
    username?: string,
    message?: string
}

export default function GuestBookCard({ username, message }: Props) {
    return (
        <div className="flex items-center gap-2 mb-1">
            <Image src="https://avatars.githubusercontent.com/u/9632756?v=4" alt="Profile" width={65} height={65} className="rounded-full p-2" />
            <h3 className="text-gray-900 font-bold">{username ?? 'User Test'} :</h3>
            <span>{message}</span>
        </div>
    )
}
