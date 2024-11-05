/* eslint-disable */
import { IoSearch } from "react-icons/io5"
import { Comment } from "../../comment/Comment"

interface Props {
  comments: any[]
}

export const CommentsGrid = ({ comments }: Props) => {
  console.log(comments)
  return (
    <div className="grid w-full">
      {/* Header Filter */}
      <div className="flex mx-14 mt-7 items-center">
        <div className="flex pr-3 border-r-gray-200 border-r-2">
          <label htmlFor="sortBy" className="font-semibold text-sm border-0 text-orange-600 z-10">Sort By:</label>
          <select className="font-semibold bg-slate-50  text-sm border-0 text-orange-600 outline-none" name="sortBy" id="sortBy">
            <option value="option 1">Old</option>
            <option value="option 2">Old 2</option>
            <option value="option 3">Old 3</option>
          </select>
        </div>
        <div className="flex w-min ml-4 border-gray-200 items-center border-2 text-gray-400">
          <label htmlFor="SearchComments" className="sr-only">Searh Comments:</label>
          <IoSearch size={22} className=" absolute ml-2" />
          <input type="text" id="SearchComments" placeholder="Search Comments" className="p-2 pl-9 bg-slate-50 text-sm" />
        </div>
      </div>
      <hr className="mx-14  my-2 bg-gray-500" />

      <div className="flex mx-14 justify-end">
        <span className="text-orange-600 text-sm font-semibold">View discussions in 1 other community</span>
      </div>
      <div className="grid mt-8">
        {comments.map((comment,i) =>
          <Comment key={i} comment={comment} />
        )}
      </div>
    </div>
  )
}
