import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import ExampleComponent from './Example'

const meta: Meta<typeof ExampleComponent> = {
  title: 'Components/Example',
  component: ExampleComponent
}

export default meta

type Story = StoryObj<typeof ExampleComponent>

export const Example: Story = {
  play: ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    step('Render heading', () => {
      expect(canvas.getByRole('heading')).toBeInTheDocument()
    })
  }
}
