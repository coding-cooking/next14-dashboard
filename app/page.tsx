import Link from "next/link"
import styles from "../app/ui/homepage.module.css"

const Homepage = () => {
  return (
    <div className={styles.container}>
      <Link href="/dashboard" className={styles.link}>Dashboard</Link>
    </div>
    
  )
}

export default Homepage