import Image from "next/image"

export const HeaderCommnent = () => {
    return (
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
    )
}
