import React from 'react'
import Card from '../ui/dashboard/card/Card'
import styles from '../ui/dashboard/dashboard.module.css'
import RightBar from '../ui/dashboard/rightbar/RightBar'
import Transactions from '../ui/dashboard/transactions/Transactions'
import Chart from '../ui/dashboard/chart/Chart'

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.rightBar}>
        <RightBar />
      </div>
    </div>
  )
}

export default Dashboard
