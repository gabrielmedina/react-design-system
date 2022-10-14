import { Meta, StoryObj } from '@storybook/react'
import { Button, TButton } from '.'

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    variant: 'primary',
  },
  argTypes: {
    element: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TButton>

export const Default: StoryObj<TButton> = {
  args: {
    children: 'Button',
    onClick: () => console.log('Button clicked'),
  },
}

export const ElementAnchor: StoryObj<TButton> = {
  name: 'Element: a',
  args: {
    element: 'a',
    children: 'Google',
    href: 'https://google.com',
    target: '_blank',
  },
}
