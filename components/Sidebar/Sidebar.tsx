import s from "./Sidebar.module.scss"
import { SidebarProps } from "./Sidebar.props"

export const Sidebar = ({ ...props }: SidebarProps) => {
  return <div {...props}>Sidebar</div>
}
