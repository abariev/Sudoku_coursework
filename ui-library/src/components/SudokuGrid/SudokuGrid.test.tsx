import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { type CellData } from '../../types'

import { SudokuGrid } from './SudokuGrid'

const mockGrid: CellData[][] = [[{ value: null, state: 'empty' }]]

describe('SudokuGrid', () => {
  it('renders stub state without selection and triggers callback', async () => {
    const user = userEvent.setup()
    const handleSelect = jest.fn()

    render(
      <SudokuGrid grid={mockGrid} selectedCell={null} onCellSelect={handleSelect} />
    )

    expect(screen.getByText(/Ячейка не выбрана/i)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Выбрать ячейку (0, 0)' }))
    expect(handleSelect).toHaveBeenCalledWith(0, 0)
  })

  it('displays selected cell coordinates', () => {
    render(
      <SudokuGrid
        grid={mockGrid}
        selectedCell={{ row: 2, col: 4 }}
        onCellSelect={jest.fn()}
      />
    )

    expect(screen.getByText(/Выбрана ячейка \[2, 4\]/i)).toBeInTheDocument()
  })
})