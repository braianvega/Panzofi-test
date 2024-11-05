'use client'

import { PiArrowFatDownLight, PiArrowFatUpLight, PiLinkBold, PiTextAlignCenterLight, PiTextBBold, PiTextItalic, PiTextStrikethroughBold } from "react-icons/pi"
import { VscComment, VscEllipsis } from "react-icons/vsc"
import Image from "next/image"
import { Comment as CommentInterface } from "@/interfaces"
import { Reply } from "../reply/Reply"
import { FormEvent, useState } from "react"
import { MdOutlineReportGmailerrorred, MdOutlineTextIncrease } from "react-icons/md"
import { useRouter } from "next/navigation"
import { useAppSelector } from "@/store"

interface Props {
    comment: CommentInterface
}

export const Comment = ({ comment }: Props) => {

    const [toggleState, setToggleState] = useState(false)
    const [replayValue, setReplayValue] = useState('')
    const router = useRouter();
    const userStore = useAppSelector(store =>store.user.userAuthor);

    const onSubmit = async (e: FormEvent) => {
        const reply = await fetch(`http://localhost:8000/api/v1/reply/`,
            {
                method: 'POST',
                body: JSON.stringify({
                    textContent: replayValue,
                    author_id: userStore.id,
                    comment: comment.id
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            }).then(res => res.json())
        console.log(reply)
        setReplayValue('');
        router.refresh()
        console.log(replayValue);
    }

    return (
        <div className="w-full ml-2">
            {/* title user */}
            <div className="flex items-center space-x-2">
                <Image
                    src={comment.author.userUrlImage}
                    alt="user Image"
                    width={50}
                    height={50}
                    className="rounded-full" />
                <span className="font-sans font-bold text-gray-700">
                    {comment.author.name}
                </span>
                <p className="font-sans text-gray-500">
                    {comment.created_at}
                </p>
            </div>
            <div className="w-full mx-6 border-gray-200 border-l-2 py-1">
                <p className=" mx-6 font-sans text-gray-500">
                    {comment.textContent}
                </p>
                <div className="grid grap-3 mt-3 px-6">
                    <div className="flex gap-4 text-gray-500 items-center font-semibold">
                        <span className="flex gap-1 items-center">
                            <PiArrowFatDownLight size={25} />
                            <span className="text-center text-gray-600">123</span>
                            <PiArrowFatUpLight size={25} />
                        </span>
                        <span
                            onClick={() => setToggleState(true)}
                            className="flex gap-2 text-sm items-center cursor-pointer">
                            <VscComment size={25} />
                            <p>Reply</p>
                        </span>
                        <p className="text-sm">Share</p>
                        <VscEllipsis size={25} />
                    </div>
                    {
                        toggleState &&
                        <div className="border-gray-200 border-l-2 mt-6 px-6">
                            <form className="grid rounded-md border-gray-300 border text-gray-500 mr-16">

                                <textarea
                                    className="w-full bg-slate-50 placeholder:font-medium placeholder:font-sans placeholder:text-lg  pl-4 pt-4 outline-gray-300"
                                    name="comment"
                                    id="comment"
                                    value={replayValue}
                                    onChange={(e) => setReplayValue(e.target.value)}
                                    rows={6}
                                    placeholder="What are your thoughts?" />

                                {/* footer textArea */}
                                <div className="flex justify-between w-full bg-gray-200">
                                    <div className="flex gap-4 py-2 px-2">
                                        <PiTextBBold size={25} />
                                        <PiTextItalic size={25} />
                                        <PiLinkBold size={25} />
                                        <PiTextStrikethroughBold size={25} />
                                        <PiTextAlignCenterLight size={25} />
                                        <MdOutlineTextIncrease size={25} />
                                        <MdOutlineReportGmailerrorred size={25} className="mr-10" />
                                    </div>

                                    <div className="flex gap-4 items-center mx-3">

                                        <span className="font-semibold text-orange-600 text-sm">Markdown Mode</span>
                                        <span
                                            onClick={() => setToggleState(false)}
                                            className="font-semibold text-orange-600 text-sm cursor-pointer">
                                            Cancel
                                        </span>

                                        <button
                                            disabled={replayValue === ""}
                                            type="submit"
                                            onClick={onSubmit}
                                            className={
                                                `font-semibold py-1 px-5 rounded-xl text-sm
                                                    ${replayValue !== ""
                                                    ? (' bg-orange-600 text-slate-50')
                                                    : (' bg-gray-700 text-gray-400 opacity-50')
                                                }`}>
                                            Reply
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    }
                    <div className="grid gap-4 mt-5">
                        {
                            comment.replies.map(reply =>
                                <Reply key={comment.id} reply={reply} />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
