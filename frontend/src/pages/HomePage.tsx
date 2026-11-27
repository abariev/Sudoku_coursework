import { useNavigate } from 'react-router-dom'

import { Button, Card } from '@sudoku-app/ui-library'

export const HomePage = () => {
  const navigate = useNavigate()

  return (
    <div className="stack">
      <h1>Судоку</h1>
      <Card title="Главная страница (заглушка)">
        <p>
          Здесь пользователь выбирает уровень сложности и запускает новую игровую партию.
        </p>
        <div className="row">
          <Button onClick={() => navigate('/game/easy')}>Лёгкий уровень</Button>
          <Button variant="secondary" onClick={() => navigate('/game/medium')}>
            Средний уровень
          </Button>
          <Button variant="danger" onClick={() => navigate('/game/hard')}>
            Сложный уровень
          </Button>
        </div>
      </Card>
    </div>
  )
}