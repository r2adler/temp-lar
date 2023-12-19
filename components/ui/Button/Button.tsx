import s from "./Button.module.scss"
import { ButtonProps } from "./Button.props"
import { ComponentPropsWithoutRef, ElementType } from "react"
import clsx from "clsx"
import ArrowIcon from "../../../public/arrow.svg"

export const Button = <T extends ElementType = "button">(
  props: ButtonProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>,
) => {
  const {
    as: Component = "button",
    fullWidth = false,
    variant = "primary",
    arrow = "none",
    className,
    children,
    ...rest
  } = props

  const buttonCN = clsx(s[variant], fullWidth && s.fullWidth, className)
  const arrowCN = clsx(s.arrow, arrow === "down" && s.down)

  return (
    <Component className={buttonCN} {...rest}>
      {children}
      {arrow !== "none" && (
        <div className={arrowCN}>
          <ArrowIcon />
        </div>
      )}
    </Component>
  )
}

export default Button
