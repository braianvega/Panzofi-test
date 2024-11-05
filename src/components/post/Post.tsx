/* eslint-disable */


import Link from "next/link"
import { TbArrowBigDown, TbArrowBigUp } from "react-icons/tb"
import { PostFooter } from "./PostFooter"
import { TextArea } from "../ui/text-area/TextAreaPost"
import { RiExternalLinkFill } from "react-icons/ri"
import { FiLink } from "react-icons/fi"
import { LuBell } from "react-icons/lu"
import Image from "next/image"
import {  } from "@/interfaces"
import { PostInterface } from "@/interfaces/post"

interface Props{
    post: PostInterface
}

export const Post = async ({post}:Props) => {

    return (
        <div className="flex text-gray-500 h-fit w-full">
            
            {/* arows next to post */}
            <div className=" m-3 align-middle flex flex-col gap-1 ">
                <TbArrowBigUp size={30} />
                <span className="font-semibold text-sm text-center">{post.id}</span>
                <TbArrowBigDown size={30} />
            </div>

            <div className="w-full">
                {/* Post header */}
                <div className="mt-3 flex justify-between">
                    <div className="flex items-center space-x-2">
                        <Image
                            src={post.author.userUrlImage}
                            alt="user Image"
                            width={30}
                            height={30}
                            className="rounded-full" />
                        <span className="font-sans font-bold text-sm text-gray-600">
                            {post.author.username}       
                        </span>
                        <div className="rounded-full size-1 bg-gray-500" />
                        <p className="font-sans text-gray-500 text-sm">
                            Posted by u/stronghub 14 hours ago
                        </p>
                    </div>
                    <LuBell className="mr-1" size={25} />
                </div>

                {/* Post body */}

                <div className="text-gray-800 mt-2 flex justify-between">
                    <div className="col-span-3">
                        <h3 className="font-semibold text-lg">
                            {post.textContent}
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

                <PostFooter />

                {/* User comment text */}
                
                <TextArea idPost={post.id}/>

            </div>

        </div>
    )
}
