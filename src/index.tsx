import React, { forwardRef, Ref } from 'react'
import { Button as A11yButton, ButtonProps as A11yProps } from 'reakit'
import {
  Button as ThemeAwareButton,
  ButtonProps as ThemeAwareProps,
} from 'theme-ui'

type Props = A11yProps & ThemeAwareProps

function Button({ as, ...props }: Props, ref: Ref<HTMLButtonElement>) {
  return <A11yButton {...props} ref={ref} as={as ?? ThemeAwareButton} />
}

export { A11yProps, ThemeAwareProps }
export default forwardRef(Button)
