import Link from "next/link"
import { FiLink } from "react-icons/fi"
import { RiExternalLinkFill } from "react-icons/ri"

export const PostBody = () => {
    return (
        <div className="text-gray-800 mt-2 flex justify-between">
            <div className="col-span-3">
                <h3 className="font-semibold text-lg">
                    What AI won'nt replace in your programming
                </h3>
                <Link className="text-orange-600 underline flex" href={'/'}>
                    <span>link</span>
                    <RiExternalLinkFill />
                </Link>
            </div>
            <div className="rounded-md text-orange-600 border-orange-600 border-2 m-2 min-h-32 w-44">
                <div className="flex items-center justify-center h-full">
                    <FiLink />
                </div>
            </div>
        </div>
    )
}
