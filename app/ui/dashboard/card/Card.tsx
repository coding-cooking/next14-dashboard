import React from 'react'
import styles from './card.module.css'
import { MdSupervisedUserCircle } from "react-icons/md";


const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>10.273</span>
        <span className={styles.detail}>
          <span className={styles.positive}>
            {/* {item.change}% */}
            more
          </span>{" "}
          {/* {item.change > 0 ? "more" : "less"}  */}
          than previous week
        </span>
      </div>
    </div>
  )
}

export default Card
