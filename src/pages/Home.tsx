import BlogList from "@/components/BlogList"
import BlogDetail from "@/components/BlogDetail"
import CreateBlogForm from "@/components/CreateBlogForm"
import ThemeToggle from "@/components/ThemeToggle"
import { useState } from "react"

const Home = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-300 dark:from-slate-900 dark:to-slate-800 p-6 transition-colors">
      
      <div className="mx-auto mb-4 flex max-w-6xl justify-end">
        <ThemeToggle />
      </div>

      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* LEFT */}
        <div className="space-y-6">
          <CreateBlogForm />
          <BlogList onSelect={setSelectedId} />
        </div>

        {/* RIGHT */}
        <div className="md:col-span-2">
          {selectedId ? (
            <BlogDetail id={selectedId} />
          ) : (
            <div className="flex h-full items-center justify-center text-muted-foreground">
              Select a blog to read
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
