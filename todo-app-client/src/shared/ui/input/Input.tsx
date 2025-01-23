import type { InputProps } from 'antd'
import { Input as BaseInput, ConfigProvider } from 'antd'
import cn from 'classnames'
import { useId } from 'react'
import { Label } from 'shared/ui'
import * as styles from './Input.module.css'

interface CustomProps extends InputProps {
  label?: string
}

export function Input(props: CustomProps) {
  const id = useId()
  const inputClass = cn([styles.input, props.className])

  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            paddingInline: 16,
            paddingBlock: 10,
            hoverBg: '#ececec',
            hoverBorderColor: '#dcdcdc',
            activeBg: '#FFFFFF',
            activeBorderColor: '#000000',
            activeShadow: 'none',
            colorBgContainer: '#f3f3f3',
            colorBorder: '#e8e8e8',
            colorFillSecondary: '#a5a5a5',
            colorIcon: '#a5a5a5',
            colorPrimary: '#000000',
            borderRadius: 12,
            fontFamily: 'Roboto, sans-serif',
            paddingContentHorizontal: 16,
            paddingContentVertical: 16,
          },
        },
      }}
    >
      <Label
        label={props.label}
        for={id}
      />
      <BaseInput
        {...props}
        className={inputClass}
        id={id}
      />
    </ConfigProvider>
  )
}
