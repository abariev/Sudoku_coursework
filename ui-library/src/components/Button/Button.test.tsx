import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Button } from './Button'

describe('Button', () => {
  it('renders label and invokes onClick', async () => {
    const user = userEvent.setup()
    const handleClick = jest.fn()

    render(<Button onClick={handleClick}>Начать игру</Button>)

    const button = screen.getByRole('button', { name: 'Начать игру' })
    expect(button).toHaveClass('primary')

    await user.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('respects variant and disabled state', async () => {
    const user = userEvent.setup()
    const handleClick = jest.fn()

    render(
      <Button variant="danger" disabled onClick={handleClick}>
        Удалить
      </Button>
    )

    const button = screen.getByRole('button', { name: 'Удалить' })
    expect(button).toBeDisabled()
    expect(button).toHaveClass('danger')

    await user.click(button)
    expect(handleClick).not.toHaveBeenCalled()
  })
})