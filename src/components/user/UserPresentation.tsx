import Image from "next/image"
import { MdOutlineDateRange } from "react-icons/md"

export const UserPresentation = () => {
    return (
        <>
            <div className="flex items-center">
                <Image
                    src={'/img/githubUserLogo.png'}
                    alt="user Image"
                    width={80}
                    height={80}
                    className="rounded-full"
                />
                <span className="font-sans font-semibold text-gray-700">
                    r/programming
                </span>
            </div>
            <div className="ml-4 mb-3">
                <span className="font-sans text-gray-600">
                    Computer Programming
                </span>
                <div className="flex items-center mt-2">
                    <MdOutlineDateRange className="text-gray-700" size={27} />
                    <span className="ml-2 font-sans text-gray-500">
                        Created Feb 28, 2006
                    </span>
                </div>
            </div>
        </>

    )
}
