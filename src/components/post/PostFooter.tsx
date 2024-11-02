import Image from 'next/image'
import React from 'react'
import { PiShareFatThin } from 'react-icons/pi'
import { VscBookmark, VscComment, VscEllipsis } from 'react-icons/vsc'

export const PostFooter = () => {
    return (
        <div className="flex justify-between w-full mt-10">
            <div className="flex gap-4">
                <span className="flex gap-2">
                    <VscComment size={25} />
                    <p>Comments</p>
                </span>
                <span className="flex gap-2">
                    <PiShareFatThin size={25} />
                    <p>Share</p>
                </span>
                <span className="flex gap-2">
                    <VscBookmark size={25} />
                    <p>Save</p>
                </span>
                <span className="flex gap-2">
                    <VscEllipsis size={25} />
                </span>
            </div>
            <div className="flex gap-1 mr-16">
                <span className="">11 people here</span>
                <div className="flex">
                    <Image
                        src={'/img/githubUserLogo.png'}
                        alt="user Image"
                        width={30}
                        height={30}
                        className="rounded-full z-0 absolute" />
                    <Image
                        src={'/img/githubUserLogo.png'}
                        alt="user Image"
                        width={30}
                        height={30}
                        className="rounded-full z-10 ml-3" />
                </div>
            </div>
        </div>
    )
}
