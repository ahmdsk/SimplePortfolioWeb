import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
    name: string,
    url: string
}

export default function MenuLink({ name, url }: Props) {
    const router = useRouter()

    return (
        <li className="mb-5"><Link href={url} className={`${router.pathname == url && 'bg-[#F1F5F9] font-bold'} text-[#0F172A] rounded-md px-3 py-2 font-medium`}>{name}</Link></li>
    )
}