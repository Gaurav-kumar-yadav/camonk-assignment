import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

const ThemeToggle = () => {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
  }, [dark])

  return (
    <Button
      variant="outline"
      onClick={() => setDark(!dark)}
      className="transition"
    >
      {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
    </Button>
  )
}

export default ThemeToggle
