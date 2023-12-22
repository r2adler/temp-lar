import cls from './Sidebar.module.scss'
import {SidebarProps} from './Sidebar.props'
import OwlIcon from 'public/owlIcon.svg'
import {TextField} from '@/components/ui/Text-field/Text-field';
import Menu from '@/components/SSR/Menu/menu';


export const Sidebar = ({...props}: SidebarProps) => {
  return (
    <div {...props} >
      <div className={cls.title}>
        <OwlIcon className={cls.owlIcon}/>
        <p>
          <span className={cls.titleOwl}>OWL</span><span className={cls.titleTop}>top</span>
        </p>
      </div>
      <TextField placeholder={'placeholder'} className={cls.textField}/>
      <Menu/>
    </div>
  )
}
