import { Card } from '@sudoku-app/ui-library'

export interface GameStatusBarProps {
  difficulty: string
}

export const GameStatusBar = ({ difficulty }: GameStatusBarProps) => {
  return (
    <Card title="Панель статуса партии (заглушка GameStatusBar)">
      <p>
        Уровень сложности: <strong>{difficulty}</strong> | Таймер: 00:00 | Ошибки: 0 / 3
      </p>
    </Card>
  )
}