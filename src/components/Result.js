import React from 'react'
import styles from './Result.css'

console.log('hello', styles)

export const Result = ({ count }) => (
  <div className={styles.count_result}>{count}</div>
)
