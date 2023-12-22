import cls from './Sidebar.module.scss'
import {SidebarProps} from './Sidebar.props'
import OwlIcon from 'public/owlIcon.svg'
import {TextField} from '@/components/ui/Text-field/Text-field';
import {Typography} from '@/components';
import BooksIcon from 'public/booksIcon.svg'
import CoursesIcon from 'public/coursesIcon.svg'
import GoodsIcon from 'public/goodsIcon.svg'
import ServicesIcon from 'public/servicesIcon.svg'
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
      {/*<ul className={cls.titleListWrapper}>*/}
      {/*  <li className={cls.titleList}>*/}
      {/*    <CoursesIcon className={cls.titleIcon}/><Typography as={'h2'} variant={'h2'}>Курсы</Typography>*/}
      {/*  </li>*/}
      {/*  <li className={cls.titleList}>*/}
      {/*    <ServicesIcon className={cls.titleIcon}/><Typography as={'h2'} variant={'h2'}>Сервисы</Typography></li>*/}
      {/*  <li className={cls.titleList}>*/}
      {/*    <BooksIcon className={cls.titleIcon}/><Typography as={'h2'} variant={'h2'}>Книги</Typography>*/}
      {/*  </li>*/}
      {/*  <li className={cls.titleList}>*/}
      {/*    <GoodsIcon className={cls.titleIcon}/><Typography as={'h2'} variant={'h2'}>Товары</Typography></li>*/}
      {/*</ul>*/}
    </div>
  )
}
