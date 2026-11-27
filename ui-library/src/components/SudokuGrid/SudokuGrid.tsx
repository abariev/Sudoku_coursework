import { type CellData, type CellPosition } from '../../types'
import { Button } from '../Button/Button'

import styles from './SudokuGrid.module.css'

export interface SudokuGridProps {
  grid: CellData[][]
  selectedCell: CellPosition | null
  onCellSelect: (row: number, col: number) => void
}

export const SudokuGrid = ({
  grid,
  selectedCell,
  onCellSelect
}: SudokuGridProps) => {
  const selectedLabel = selectedCell
    ? `Выбрана ячейка [${selectedCell.row}, ${selectedCell.col}]`
    : 'Ячейка не выбрана'

  return (
    <div className={styles.placeholder} data-testid="sudoku-grid">
      <strong>Компонент SudokuGrid (заглушка)</strong>
      <p className={styles.info}>
        Здесь будет отображаться игровое поле 9×9 (строк в данных: {grid.length}). {selectedLabel}.
      </p>
      <Button variant="secondary" onClick={() => onCellSelect(0, 0)}>
        Выбрать ячейку (0, 0)
      </Button>
    </div>
  )
}