import type { RangePickerProps } from 'antd/es/date-picker'
import { ConfigProvider, DatePicker } from 'antd'
import { useId } from 'react'
import { Label } from 'shared/ui'
import * as styles from './RangePicker.module.css'

interface CustomProps extends RangePickerProps {
  label?: string
}

const { RangePicker: CustomRangePicker } = DatePicker

export default function RangePicker(props: CustomProps) {
  const id = useId()

  return (
    <ConfigProvider
      theme={{
        components: {
          DatePicker: {
            paddingInline: 16,
            hoverBg: '#ececec',
            hoverBorderColor: '#dcdcdc',
            activeBg: '#FFFFFF',
            activeBorderColor: '#000000',
            activeShadow: 'none',
            cellActiveWithRangeBg: '#f1f0ed',
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
      <Label label={props.label} for={id} />
      <CustomRangePicker
        {...props}
        className={styles.rangePicker}
        popupClassName={styles.popupRangeDatePicker}
        id={id}
        format="DD.MM.YYYY"
      />
    </ConfigProvider>
  )
}
