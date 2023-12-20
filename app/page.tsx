"use client"
import { Button, Rating, Typography } from "@/components"
import styles from "app/page.module.scss"
import { useState } from "react"

export default function Home() {
  const [r, setR] = useState(0)
  return (
    <>
      <Typography as={"h3"} variant={"h3"}>
        Typography
      </Typography>
      <Typography as={"p"} variant={"body1"}>
        Typography
      </Typography>
      <Button>button</Button>
      <Button variant={"ghost"} arrow={"right"}>
        button
      </Button>
      <Button arrow={"right"}>button</Button>
      <Rating rating={r} isEditable setRating={setR} />
    </>
  )
}
