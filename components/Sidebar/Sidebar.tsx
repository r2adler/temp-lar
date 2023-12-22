import cls from './Sidebar.module.scss'
import {SidebarProps} from './Sidebar.props'
import OwlIcon from '../../public/owl.svg'

export const Sidebar = ({...props}: SidebarProps) => {
  return (
    <div {...props} >
      <div className={cls.title}>
        <OwlIcon className={cls.owlIcon}/><span className={cls.titleOwl}>OWL</span><span
        className={cls.titleTop}>top</span>
      </div>
    </div>
  )
}
