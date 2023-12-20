import clsx from "clsx";
import cls from "./Footer.module.scss"
import { FooterProps } from "./Footer.props"
import Link from 'next/link';
import {ReactElement} from 'react';
import {Typography} from '@/components';

export const Footer = (props: FooterProps): ReactElement => {
  const { className, ...rest } = props
  return (
    <footer className={clsx(className, cls.footer)} {...rest}>
      <Link href={""}>
        <Typography variant={'subtitle'} as={'p'} className={cls.p}>
          OwlTop © 2020 - 2021 Все права защищены
        </Typography>
      </Link>
      <Link href={""}>
        <Typography variant={'subtitle'} as={'p'} className={cls.p}>
          Пользовательское соглашение
        </Typography>
      </Link>
      <Link href={""}>
        <Typography variant={'subtitle'} as={'p'} className={cls.p}>Политика конфиденциальности</Typography>
      </Link>
    </footer>
  )
}
