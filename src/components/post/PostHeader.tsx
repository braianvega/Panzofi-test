import Image from "next/image"
import { LuBell } from "react-icons/lu"

export const PostHeader = () => {
    return (
        <div className="mt-3 flex justify-between">
            <div className="flex items-center space-x-2">
                <Image
                    src={'/img/githubUserLogo.png'}
                    alt="user Image"
                    width={30}
                    height={30}
                    className="rounded-full" />
                <span className="font-sans font-bold text-sm text-gray-600">
                    r/programming
                </span>
                <div className="rounded-full size-1 bg-gray-500" />
                <p className="font-sans text-gray-500 text-sm">
                    Posted by u/stronghub 14 hours ago
                </p>
            </div>
            <LuBell className="mr-1" size={25} />
        </div>
    )
}
