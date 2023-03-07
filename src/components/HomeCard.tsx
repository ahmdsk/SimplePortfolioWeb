import Image from 'next/image'
import { BsRocketTakeoff, BsGithub } from 'react-icons/bs'
import { MdShowChart } from 'react-icons/md'

export default function HomeCard() {
    return (
        <div className="border-2 border-gray-200 rounded-xl xl:w-1/2 p-4 flex items-center gap-3">
            <Image src="https://avatars.githubusercontent.com/u/85729997?v=4" alt="Profile" width={100} height={100} className="rounded-full p-2" />
            <div className="space-y-1">
                <div className="flex items-center gap-2">
                    <BsRocketTakeoff />
                    <h3>140 project Selesai</h3>
                </div>

                <div className="flex items-center gap-2">
                    <BsGithub />
                    <h3>120 star di repo ini</h3>
                </div>


                <div className="flex items-center gap-2">
                    <MdShowChart />
                    <h3>42 pengunjung blog</h3>
                </div>
            </div>
        </div>
    )
}
