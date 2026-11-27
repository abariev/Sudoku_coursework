export type CellState = 'initial' | 'user' | 'conflict' | 'empty'

export interface CellData {
  value: number | null
  state: CellState
}

export interface CellPosition {
  row: number
  col: number
}