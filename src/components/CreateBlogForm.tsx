import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createBlog } from "@/api/blogApi"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const CreateBlogForm = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] })
    },
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    mutation.mutate({
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      content: formData.get("content") as string,
      category: ["TECH"],
      coverImage:
        "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
      date: new Date().toISOString(),
    })

    e.currentTarget.reset()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg"
    >
      <Input name="title" placeholder="Title" required />
      <Input name="description" placeholder="Description" required />
      <Textarea name="content" placeholder="Content" required />

      <Button
        type="submit"
        className="w-full bg-slate-900 text-white transition hover:bg-slate-800 hover:scale-[1.02]"
      >
        Add Blog
      </Button>
    </form>
  )
}

export default CreateBlogForm
