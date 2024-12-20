import React from 'react'
import styles from './styles.module.scss'
import './styles.css'

type Props = { children: React.ReactElement }

export const MantineRootStyleComponent = ({ children }: Props) => {
  return <div className={styles.root}>{children}</div>
}
