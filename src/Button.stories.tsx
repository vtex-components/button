import React, { useReducer, useRef, useEffect, forwardRef, Ref } from 'react'
import { ThemeProvider } from 'theme-ui'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, text, color, boolean } from '@storybook/addon-knobs'

import Button from '.'

export default {
  title: 'Button',
  decorators: [withA11y, withKnobs],
  component: Button,
}

export function Basic() {
  return (
    <Button color={color('color', 'white')} bg={color('bg', 'black')}>
      {text('children', 'Base Button')}
    </Button>
  )
}

export function TheSXProp() {
  return (
    <Button
      sx={{
        cursor: 'pointer',
        '&:hover': {
          bg: 'black',
          color: 'white',
        },
        '&:active': {
          bg: '#212121',
          color: 'white',
        },
        '&:disabled': {
          bg: '#F3F5F9',
          color: '#C1C6CC',
        },
      }}
      color="black"
      disabled={boolean('disabled', false)}
    >
      Base Button
    </Button>
  )
}

export function TheAsPropWithIntrinsicElement() {
  const ref = useRef<HTMLAnchorElement>(null)
  const [checked, toggle] = useReducer((value) => !value, false)

  useEffect(() => {
    console.warn(
      `TheAsPropWithIntrinsicElement: Detects properly type of \`ref\` from \`as\``,
      ref.current
    )
  }, [])

  return (
    <ThemeProvider
      theme={{
        colors: {
          background: '#FFFFFF',
          primary: '#2F323A',
          secondary: '#4F5D75',
        },
      }}
    >
      <Button ref={ref} as="a" target="_blank" onClick={toggle}>
        {checked ? '😄 Happy' : '😞 Sad'}
      </Button>
    </ThemeProvider>
  )
}

const Link = forwardRef(function Link(
  { children, ...props }: JSX.IntrinsicElements['a'],
  ref: Ref<HTMLAnchorElement>
) {
  return (
    <a ref={ref} {...props}>
      {children}
    </a>
  )
})

export function TheAsPropWithCustomElement() {
  const ref = useRef<HTMLAnchorElement>(null)
  const [checked, toggle] = useReducer((value) => !value, false)

  useEffect(() => {
    console.warn(
      `TheAsPropWithCustomElement: Detects properly type of \`ref\` from \`as\``,
      ref.current
    )
  }, [])

  return (
    <ThemeProvider
      theme={{
        colors: {
          background: '#FFFFFF',
          primary: '#2F323A',
          secondary: '#4F5D75',
        },
      }}
    >
      <Button ref={ref} as={Link} target="_blank" onClick={toggle}>
        {checked ? '😄 Happy' : '😞 Sad'}
      </Button>
    </ThemeProvider>
  )
}

export function Theming() {
  const theme = {
    colors: {
      background: '#FFFFFF',
      primary: '#2F323A',
      secondary: '#4F5D75',
    },
    buttons: {
      primary: {
        cursor: 'pointer',
        bg: 'primary',
        color: 'background',
      },
      secondary: {
        cursor: 'pointer',
        bg: 'secondary',
        color: 'background',
      },
    },
  }

  return (
    <ThemeProvider theme={theme}>
      <Button variant="primary" m={1}>
        Primary Button
      </Button>
      <Button variant="secondary" m={1}>
        Secondary Button
      </Button>
    </ThemeProvider>
  )
}
