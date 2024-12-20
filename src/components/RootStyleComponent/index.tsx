import React from 'react'
import styles from './styles.module.scss'

type Props = { children: React.ReactElement }

export const RootStyleComponent = ({ children }: Props) => {
  return (
    <div className={styles.root} data-mantine-color-scheme="light">
      {children}
    </div>
  )
}
