import { Card, CardContent } from "@/components/ui/card"
import { Blog } from "@/types/blog"

interface BlogCardProps {
  blog: Blog
  onClick: () => void
}

const BlogCard = ({ blog, onClick }: BlogCardProps) => {
  return (
    <Card
      onClick={onClick}
      className="
        cursor-pointer
        rounded-xl
        bg-card
        text-card-foreground
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        dark:hover:shadow-black/40
      "
    >
      <CardContent className="space-y-3 p-4">
        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {blog.category.map((cat) => (
            <span
              key={cat}
              className="
                rounded-full
                bg-slate-200
                px-2
                py-0.5
                text-xs
                font-semibold
                text-slate-700
                dark:bg-slate-700
                dark:text-slate-200
              "
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold leading-snug">
          {blog.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
          {blog.description}
        </p>
      </CardContent>
    </Card>
  )
}

export default BlogCard
