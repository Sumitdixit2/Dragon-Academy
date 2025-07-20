import { Loader2Icon } from "lucide-react"

import { Button } from "@/components/ui/button/button"

export default function Loading() {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
    <Button size="sm" className="bg-black" >
      <Loader2Icon className="animate-spin" />
      Please wait...
    </Button>
    </div>
  )
}
