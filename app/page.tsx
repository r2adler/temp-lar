'use client'
import {Button, Rating, Typography} from '@/components'
import {useState} from 'react'
import Menu from '@/components/SSR/Menu/menu';
import cls from './page.module.scss'


export default function Home() {
  const [r, setR] = useState(0)

  return (
    <>
      <div className={cls.title}>
        <h2 className={cls.titleText}>Курсы по Photoshop <span className={cls.titleNumber}>10</span></h2>
        <p className={cls.titleRating}>По рейтингу</p>
        <p className={cls.titlePrice}>По цене</p>
      </div>
      <Typography as={'h3'} variant={'h3'}> Typography </Typography>
      <Typography as={'p'} variant={'body1'}>Typography </Typography>
      <Button>button</Button>
      <Button variant={'ghost'} arrow={'right'}>button </Button>
      <Button arrow={'right'}>button</Button>
      <Rating rating={r} isEditable setRating={setR}/>
    </>
  )
}


