import { useNavigate } from 'react-router-dom'

import { Button, Card } from '@sudoku-app/ui-library'

export const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
    <div className="stack">
      <h1>404 — Страница не найдена</h1>
      <Card title="Неизвестный маршрут">
        <p>Запрошенная страница не существует.</p>
        <Button onClick={() => navigate('/')}>На главную</Button>
      </Card>
    </div>
  )
}