import React from 'react'
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
