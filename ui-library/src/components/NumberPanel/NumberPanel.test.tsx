import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { NumberPanel } from './NumberPanel'

describe('NumberPanel', () => {
  it('calls callback with digit and null on clear, disables digits used 9 times', async () => {
    const user = userEvent.setup()
    const handleSelect = jest.fn()

    render(<NumberPanel usedCounts={{ 5: 9 }} onNumberSelect={handleSelect} />)

    expect(screen.getByRole('button', { name: '5' })).toBeDisabled()

    await user.click(screen.getByRole('button', { name: '3' }))
    expect(handleSelect).toHaveBeenCalledWith(3)

    await user.click(screen.getByRole('button', { name: 'Очистить' }))
    expect(handleSelect).toHaveBeenCalledWith(null)
  })
})