import {getMenu} from '@/api/menu';
import cls from './Menu.module.scss';
import {Typography} from '@/components';

export default async function Menu() {
  const menu = await getMenu(0)

  return (
    <ul className={cls.titleListWrapper}>
      {menu.map(m => (
        <li key={m._id.secondCategory} className={cls.titleList}>
          <Typography as={'h2'} variant={'h2'}>{m._id.secondCategory}</Typography>
        </li>
      ))}
    </ul>
  )
}
