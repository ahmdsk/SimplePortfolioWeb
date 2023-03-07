import Image from "next/image";

export default function BlogCard() {
    return (
        <div className="flex gap-4 mb-4">
            <Image src="/rectangle.png" alt="Blog Image" width={70} height={70} />
            <div className="flex flex-col justify-between my-1 mx-2">
                <h2 className="font-semibold text-lg">Cara Jadi Orang Kaya!</h2>
                <div className="flex justify-between">
                    <h5 className="font-light text-sm">2 Hari yang lalu</h5>
                    <h5 className="font-light text-sm">180x dilihat</h5>
                </div>
            </div>
        </div>
    )
}
