'use client'

import { useAppSelector } from "@/store"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import { BsListOl } from "react-icons/bs"
import { MdOutlineReportGmailerrorred, MdOutlineTextIncrease } from "react-icons/md"
import { PiLinkBold, PiListBullets, PiTextAlignCenterLight, PiTextBBold, PiTextItalic, PiTextStrikethroughBold } from "react-icons/pi"
import { TbTextSize } from "react-icons/tb"
import { VscEllipsis } from "react-icons/vsc"

interface Props{
  idPost:number
}

export const TextArea = ({idPost}:Props) => {

  const router = useRouter();
  
  const [commentValue, setCommentValue] = useState("")
  const userStore = useAppSelector(store =>store.user.userAuthor);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const Comment = await fetch(`http://localhost:8000/api/v1/comment/`,
      {
        method: 'POST',
        body: JSON.stringify({
          textContent:commentValue,
          author_id:userStore.id,
          post: idPost
          }),
        headers: {
          'Content-type': 'application/json'
        }
      }).then(res => res.json())
    console.log(Comment)
    setCommentValue('');
    router.refresh()
    console.log(commentValue);
  }

  return (
    <div>
      <p className=" font-sans text-gray-600">
        {"Comment as "} <span className="text-orange-600">{userStore.username}</span>
      </p>
      <form className="grid rounded-md border-gray-300 border text-gray-500 mr-16">


        <textarea
          className="w-full bg-slate-50 placeholder:font-medium placeholder:font-sans placeholder:text-lg  pl-4 pt-4 outline-gray-300"
          name="comment"
          id="comment"
          value={commentValue}
          onChange={(e) => setCommentValue(e.target.value)}
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

            <TbTextSize size={25} />
            <PiListBullets size={25} />
            <BsListOl size={25} />
            <VscEllipsis size={25} />


          </div>

          <div className="flex gap-4 items-center mx-3">

            <span className="font-semibold text-orange-600 text-sm">Markdown Mode</span>
            <button
              disabled={commentValue === ""}
              type="submit"
              onClick={onSubmit}
              className={
                `font-semibold py-1 px-5 rounded-xl text-sm
                ${commentValue !== ""
                  ? (' bg-orange-600 text-slate-50')
                  : (' bg-gray-700 text-gray-400 opacity-50')
                }`}>
              Comment
            </button>
          </div>
        </div>
      </form>
    </div>

  )
}
