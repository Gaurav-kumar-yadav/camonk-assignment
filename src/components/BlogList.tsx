import { useQuery } from "@tanstack/react-query"
import { getBlogs } from "@/api/blogApi"
import BlogCard from "./BlogCard"
import LoadingSkeleton from "./LoadingSkeleton"

const BlogList = ({ onSelect }: { onSelect: (id: number) => void }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  })

  if (isLoading) return <LoadingSkeleton />

  return (
    <div className="space-y-4">
      {data?.map((blog) => (
        <BlogCard key={blog.id} blog={blog} onClick={() => onSelect(blog.id)} />
      ))}
    </div>
  )
}

export default BlogList
