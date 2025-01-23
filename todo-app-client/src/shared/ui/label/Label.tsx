import * as styles from './Label.module.css'

interface Props {
  label?: string
  for?: string
}

export default function Label(props: Props) {
  return (
    <>
      {props.label && <label htmlFor={props.for} className={styles.label}>{props.label}</label>}
    </>
  )
}
