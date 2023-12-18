import { ComponentPropsWithoutRef, ElementType } from "react"

export type ButtonProps<T extends ElementType = "button"> = {
  as?: T
  className?: string
  fullWidth?: boolean
  variant?: "ghost" | "primary"
} & ComponentPropsWithoutRef<T>
