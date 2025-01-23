import type { HTMLAttributes, ReactNode, RefObject } from 'react'
import classNames from 'classnames'
import * as styles from './EmptyLayout.module.css'

interface PageLayoutProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  className?: string
  ref?: RefObject<HTMLInputElement>
}

export default function EmptyLayout({ ref, children, className }: PageLayoutProps) {
  return (
    <div ref={ref} className={classNames(styles.root, className)}>
      {children}
    </div>
  )
}
