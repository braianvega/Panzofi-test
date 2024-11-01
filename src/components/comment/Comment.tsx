import Image from "next/image"

export const Comment = () => {
    return (
        <div className="w-full ">
            {/* title user */}
            <div className="flex items-center space-x-2">
                <Image
                    src={'/img/githubUserLogo.png'}
                    alt="user Image"
                    width={50}
                    height={50}
                    className="rounded-full" />
                <span className="font-sans font-bold text-gray-700">
                    r/programming
                </span>
                <p className="font-sans text-gray-500">
                    14 hr. ago
                </p>
            </div>
            <div className="w-full mx-6 border-gray-200 border-l-2">
                <p className=" mx-6 font-sans text-gray-500">
                    "tesd"
                </p>
                <p className=" mx-6 font-sans text-gray-500">
                    "tesd"
                </p>
                <p className=" mx-6 font-sans text-gray-500">
                    "tesd"
                </p>
            </div>
        </div>
    )
}
