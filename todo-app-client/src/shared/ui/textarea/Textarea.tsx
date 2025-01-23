import type { TextAreaProps } from 'antd/es/input'
import { Input as BaseInput, ConfigProvider } from 'antd'
import { useId } from 'react'
import { Label } from 'shared/ui'
import * as styles from './Textarea.module.css'

const { TextArea: BaseTextArea } = BaseInput

interface CustomProps extends TextAreaProps {
  label?: string
}

export default function Textarea(props: CustomProps = {
  autoSize: { minRows: 2, maxRows: 6 },
}) {
  const id = useId()

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
      <BaseTextArea
        {...props}
        className={styles.textarea}
        style={{ height: 120, resize: 'none' }}
      />
    </ConfigProvider>

  )
}
