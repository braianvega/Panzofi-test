import { Post } from "@/components/post/Post"

export const PostGrid = () => {
  return (
    <div className="grid gap-4  h-fit">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}
