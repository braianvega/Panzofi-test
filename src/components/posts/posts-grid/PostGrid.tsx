import { CommentsGrid } from "@/components/comments/comments-grid/CommentsGrid"
import { Post } from "@/components/post/Post"
import { PostInterface } from "@/interfaces"

const getPost = async () => {
  const data: [PostInterface] = await fetch('http://localhost:8000/api/v1/post/all-details/')
    .then(res => res.json())
  console.log(data)
  return data;
}

export const PostGrid = async () => {

  const posts = await getPost();
  console.log(posts)

  return (
    <div className="grid gap-4 min-h-fit">
      {
        posts.map(post =>
          <div key={post.id}>
            <Post key={post.id} post={post} />
            {post.comments&&
            <CommentsGrid key={post.id} comments={post.comments}/>
            }
          </div>
        )
      }
    </div>
  )
}
