import React, { forwardRef, Ref, PropsWithoutRef } from 'react'
import { Button as A11yButton, ButtonProps as A11yProps } from 'reakit'
import { PropsWithAs, As } from 'reakit-utils/types'
import {
  Button as ThemeAwareButton,
  ButtonProps as ThemeAwareProps,
} from 'theme-ui'

type Component<DefaultAs extends As, DefaultProps> = {
  <T extends As = DefaultAs>(
    props: PropsWithAs<PropsWithoutRef<DefaultProps>, T>
  ): JSX.Element
}

type ButtonProps = A11yProps & { as?: As }

const Button = (
  { as = ThemeAwareButton, ...props }: ButtonProps,
  ref: Ref<As>
) => {
  return <A11yButton ref={ref} as={as} {...props} />
}

export { ButtonProps, A11yProps, ThemeAwareProps }

export default forwardRef(Button) as Component<
  typeof ThemeAwareButton,
  A11yProps
>
