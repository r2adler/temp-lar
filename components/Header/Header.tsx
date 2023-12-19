import s from "./Header.module.scss"
import { HeaderProps } from "./Header.props"

export const Header = ({ ...props }: HeaderProps) => {
  return <div {...props}>header</div>
}
