import { CommentsGrid } from "@/components/comments/comments-grid/CommentsGrid"
import { Post } from "@/components/post/Post"
import { TextArea } from "@/components/ui/text-area/TextAreaPost"

export const PostGrid = () => {
  return (
    <div className="grid gap-4 min-h-fit">
      <div>
        <Post />
        <CommentsGrid />
      </div>
    </div>
  )
}
