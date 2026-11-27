import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import {
  Button,
  type CellData,
  type CellPosition,
  NumberPanel,
  SudokuGrid
} from '@sudoku-app/ui-library'

import { GameStatusBar } from '../components/GameStatusBar'

const STUB_GRID: CellData[][] = Array.from({ length: 9 }, () =>
  Array.from({ length: 9 }, () => ({ value: null, state: 'empty' }))
)

export const GamePage = () => {
  const { difficulty = 'easy' } = useParams<{ difficulty: string }>()
  const navigate = useNavigate()
  const [selectedCell, setSelectedCell] = useState<CellPosition | null>(null)
  const [lastNumber, setLastNumber] = useState<number | null>(null)

  return (
    <div className="stack">
      <h1>Игровая партия ({difficulty})</h1>
      <GameStatusBar difficulty={difficulty} />
      <SudokuGrid
        grid={STUB_GRID}
        selectedCell={selectedCell}
        onCellSelect={(row, col) => setSelectedCell({ row, col })}
      />
      <NumberPanel
        usedCounts={{ 9: 9 }}
        onNumberSelect={(value) => setLastNumber(value)}
      />
      <p>
        Последнее действие панели ввода:{' '}
        <strong>{lastNumber === null ? 'Очистить / не выбрано' : lastNumber}</strong>
      </p>
      <div className="row">
        <Button variant="secondary" onClick={() => navigate('/')}>
          Вернуться на главную
        </Button>
      </div>
    </div>
  )
}