import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react"

import { clsx } from "clsx"

import s from "./Typography.module.scss"

type TypographyProps<T extends ElementType = "span"> = {
  as?: T
  children: ReactNode
  className?: string
  variant?:
    | "body1"
    | "body2"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "large"
    | "subtitle1"
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = "span">(
  props: TypographyProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>,
) => {
  const {
    as: Component = "span",
    className,
    variant = "body1",
    ...rest
  } = props
  const typographyCN = clsx(s[variant], className)

  return <Component className={typographyCN} {...rest} />
}
