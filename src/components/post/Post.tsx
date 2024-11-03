import Image from "next/image"
import Link from "next/link"
import { FiLink } from "react-icons/fi"
import { LuBell } from "react-icons/lu"
import { PiShareFatThin } from "react-icons/pi"
import { RiExternalLinkFill } from "react-icons/ri"
import { TbArrowBigDown, TbArrowBigUp } from "react-icons/tb"
import { VscBookmark, VscComment, VscEllipsis } from "react-icons/vsc"
import { PostHeader } from "./PostHeader"
import { PostBody } from "./PostBody"
import { PostFooter } from "./PostFooter"
import { TextArea } from "../ui/text-area/TextAreaPost"

export const Post = () => {
    return (
        <div className="flex text-gray-500 h-fit w-full">
            {/* arows next to post */}
            <div className=" m-3 align-middle flex flex-col gap-1 ">
                <TbArrowBigUp size={30} />
                <span className="font-semibold text-sm text-center">123</span>
                <TbArrowBigDown size={30} />
            </div>

            <div className="w-full">
                {/* Post header */}
                <PostHeader />

                {/* Post body */}

                <PostBody />

                {/* post Footer */}
                <PostFooter />

                {/* User comment text */}
                <p className=" font-sans text-gray-600">
                    {"Comment as "} <Link className="text-orange-600" href={'/'}>Wonderful-External22</Link>
                </p>
                <TextArea isComment={true} />

            </div>

        </div>
    )
}
