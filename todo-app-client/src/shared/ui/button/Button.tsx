import type { ButtonProps } from 'antd'
import { Button as BaseButton, ConfigProvider } from 'antd'

export default function Button(props: ButtonProps) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            borderRadius: 12,
            paddingBlock: 12,
            paddingBlockLG: 12,
            paddingBlockSM: 12,
            colorPrimaryTextActive: 'rgb(175,60,43)',
            dangerShadow: 'none',
            defaultShadow: 'none',
            primaryShadow: 'none',
            controlHeight: 44,
            controlHeightLG: 44,
            paddingInline: 16,
            colorPrimaryTextHover: 'rgb(217,80,59)',
            colorPrimaryHover: 'rgb(217,80,59)',
            colorPrimaryBorder: 'rgb(194,61,40)',
            colorPrimaryBg: 'rgb(194,61,40)',
            colorPrimaryBgHover: 'rgb(217,80,59)',
            colorPrimary: 'rgb(194,61,40)',
            colorPrimaryActive: 'rgb(175,60,43)',
            colorLink: 'rgb(194,61,40)',
            colorLinkActive: 'rgb(175,60,43)',
            colorLinkHover: 'rgb(217,80,59)',
            colorError: 'rgb(231,19,0)',
            colorErrorActive: 'rgb(215,26,9)',
            colorErrorHover: 'rgb(236,58,42)',
            colorErrorBorderHover: 'rgb(236,58,42)',
            colorErrorBgFilledHover: 'rgb(236,58,42)',
            colorErrorBg: 'rgb(231,19,0)',
            colorErrorBgActive: 'rgb(215,26,9)',
            contentLineHeight: 1.3,
          },
        },
      }}
    >
      <BaseButton
        {...props}
      >
        {props.children}
      </BaseButton>
    </ConfigProvider>
  )
}
