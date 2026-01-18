import { Skeleton } from "@/components/ui/skeleton"

const LoadingSkeleton = () => {
  return (
    <div className="space-y-3">
      <Skeleton className="h-24 w-full rounded-xl" />
      <Skeleton className="h-24 w-full rounded-xl" />
    </div>
  )
}

export default LoadingSkeleton
