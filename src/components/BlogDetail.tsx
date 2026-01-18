import { useQuery } from "@tanstack/react-query"
import { getBlogById } from "@/api/blogApi"

const BlogDetail = ({ id }: { id: number }) => {
  const { data } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id),
  })

  if (!data) return null

  return (
    <div className="animate-fade-in rounded-xl bg-white p-6 shadow-lg space-y-4">
      <img
        src={data.coverImage}
        alt={data.title}
        className="h-56 w-full rounded-lg object-cover"
      />

      <h1 className="text-2xl font-bold text-slate-900">
        {data.title}
      </h1>

      <div className="flex gap-2 text-sm text-slate-500">
        <span>{data.category.join(", ")}</span>
        <span>•</span>
        <span>{new Date(data.date).toDateString()}</span>
      </div>

      <p className="text-slate-700 leading-relaxed">
        {data.content}
      </p>
    </div>
  )
}

export default BlogDetail
