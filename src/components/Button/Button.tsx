import React from 'react'
import { ButtonProps } from './Button.props'
import styles from './Button.module.scss'
import cn from 'classnames'

import Plus from '../../assets/images/Plus'

export const Button: React.FC<ButtonProps> = ({
  appearance,
  //   arrow = 'none',
  varIcon = 'plus',
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === 'primary',
        [styles.transparent]: appearance === 'transparent',
      })}
      {...props}
    >
      <span className={styles.icon}>{varIcon === 'plus' && <Plus />}</span>
      {children}
    </button>
  )
}
