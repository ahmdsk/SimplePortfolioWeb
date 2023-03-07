import Image from "next/image";
import MenuLink from "./MenuLink";

const links = [
    {
        name: 'Home',
        url: '/'
    },
    {
        name: 'About',
        url: '/about'
    },
    {
        name: 'Blog',
        url: '/blog'
    },
    {
        name: 'Guest Book',
        url: '/guestbook'
    }
]

export default function Menu() {
  return (
    <div className="space-y-8 md:pr-28 pr-16">
        <div className="">
            <Image src="/bread.svg" alt="Logo" width={50} height={50}></Image>
        </div>
        <ul className="min-[300px]:flex md:block">
            {links.map((link, index) => {
                return <MenuLink name={link.name} url={link.url} key={index} />
            })}
        </ul>
    </div>
  )
}
