import { Post } from "@/components/post/Post"
import { TextArea } from "@/components/ui/text-area/TextArea"

export const PostGrid = () => {
  return (
    <div className="grid gap-4 min-h-fit">
      <div>
        <Post />
        <TextArea />
      </div>

      <Post />
      <Post />
      <Post />
    </div>
  )
}
