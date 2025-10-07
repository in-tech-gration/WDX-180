"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "../../lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    variant?: "default" | "success" | "warning" | "danger"
  }
>(({ className, value, variant = "default", ...props }, ref) => {
  const getGradientClass = () => {
    switch (variant) {
      case "success":
        return "bg-gradient-to-r from-green-400 to-green-600"
      case "warning":
        return "bg-gradient-to-r from-yellow-400 to-yellow-600"
      case "danger":
        return "bg-gradient-to-r from-red-400 to-red-600"
      default:
        return "bg-gradient-to-r from-blue-400 to-blue-600"
    }
  }

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn("h-full w-full flex-1 transition-all", getGradientClass())}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
