import { Button, Typography } from "@/components"
import styles from "app/page.module.scss"


export default function Home() {

  return (
    <main className={styles.main}>
      <Typography>Typography</Typography>
      <Button>button</Button>
      <Button variant={"ghost"} arrow={"right"}> button </Button>
      <Button arrow={"right"}>button</Button>
    </main>
  )
}
