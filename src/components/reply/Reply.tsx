import { Reply as ReplyInterface} from '@/interfaces'
import Image from 'next/image'
import React from 'react'

interface Props{
    reply: ReplyInterface
}

export const Reply = ({reply}:Props) => {
  return (


    <div className="w-full ml-2">
            {/* title user */}
            <div className="flex items-center space-x-2">
                <Image
                    src={reply.author.userUrlImage}
                    alt="user Image"
                    width={50}
                    height={50}
                    className="rounded-full" />
                <span className="font-sans font-bold text-gray-700">
                    {reply.author.name}
                </span>
                <p className="font-sans text-gray-500">
                    {reply.created_at}
                </p>
            </div>
            <div className="w-full mx-6 border-gray-200 border-l-2 py-1">
                <p className=" mx-6 font-sans text-gray-500">
                    {reply.textContent}
                </p>
            </div>
        </div>
  )
}
