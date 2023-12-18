import s from "./Button.module.scss"
import { ButtonProps } from "./Button.props"
import { ComponentPropsWithoutRef, ElementType } from "react"
import clsx from "clsx"

export const Button = <T extends ElementType = "button">(
  props: ButtonProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>,
) => {
  const {
    as: Component = "button",
    className,
    fullWidth = false,
    variant = "primary",
    ...rest
  } = props

  const buttonCN = clsx(s[variant], fullWidth && s.fullWidth, className)

  return <Component className={buttonCN} {...rest} />
}

export default Button
