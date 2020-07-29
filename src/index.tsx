import React, { forwardRef, Ref } from 'react'
import { Button as A11yButton, ButtonProps as A11yProps } from 'reakit'
import {
  Button as ThemeAwareButton,
  ButtonProps as ThemeAwareProps,
} from 'theme-ui'
import { As, Props, Component } from '@vtex-components/types'

type ButtonProps<T extends As = typeof ThemeAwareButton> = Props<T, A11yProps>

const Button = (
  { as = ThemeAwareButton, ...props }: ButtonProps<As>,
  ref: Ref<As>
) => {
  return <A11yButton ref={ref} as={as} {...props} />
}

export { ButtonProps, A11yProps, ThemeAwareProps }

export default forwardRef(Button) as Component<ButtonProps>
