'use client'
import {Button, Rating, Typography} from '@/components'
import {useState} from 'react'
import Menu from '@/components/menu/menu';


export default function Home() {
  const [r, setR] = useState(0)

  return (
    <>
      <Typography as={'h3'} variant={'h3'}> Typography </Typography>
      <Typography as={'p'} variant={'body1'}>Typography </Typography>
      <Button>button</Button>
      <Button variant={'ghost'} arrow={'right'}>button </Button>
      <Button arrow={'right'}>button</Button>
      <Rating rating={r} isEditable setRating={setR}/>
      <Menu/>
    </>
  )
}


