import React from 'react'
import { ButtonProps } from './Button.props'
import styles from './Button.module.scss'
import cn from 'classnames'

import Plus from '../../assets/images/Plus'
import Minus from '../../assets/images/Minus'
import Close from '../../assets/images/Close'

export const Button: React.FC<ButtonProps> = ({
  appearance,
  varIcon,
  children,
  className,
  counter,
  colorIcon = '#c6c4c4',
  active,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === 'primary',
        [styles.transparent]: appearance === 'transparent',
        [styles.fill]: appearance === 'fill',
        [styles.circul]: appearance === 'circul',
        [styles.plus]: varIcon === 'plus',
        [styles.close]: varIcon === 'close',
        [styles.active]: active,
      })}
      {...props}
    >
      {varIcon && (
        <span className={styles.icon}>
          {varIcon === 'plus' && <Plus fill={colorIcon} />}
          {varIcon === 'minus' && <Minus fill={colorIcon} />}
          {varIcon === 'close' && <Close fill={colorIcon} />}
        </span>
      )}
      {children}
      {counter && counter > 0 && (
        <span className={styles.counter}>
          <i className={styles.number}>{counter}</i>
        </span>
      )}
    </button>
  )
}
