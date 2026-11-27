import { Card } from '@sudoku-app/ui-library'

export const StatsPage = () => {
  return (
    <div className="stack">
      <h1>Статистика</h1>
      <Card title="История партий (заглушка)">
        <p>
          Здесь будут отображаться завершённые партии, лучшее время по уровням сложности и процент побед.
        </p>
      </Card>
    </div>
  )
}