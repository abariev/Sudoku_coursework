import { useNavigate } from 'react-router-dom'

import { Button, Card } from '@sudoku-app/ui-library'

export interface LoginPageProps {
  onLogin: () => void
}

export const LoginPage = ({ onLogin }: LoginPageProps) => {
  const navigate = useNavigate()

  const handleLogin = () => {
    onLogin()
    navigate('/profile')
  }

  return (
    <div className="stack">
      <h1>Вход в систему</h1>
      <Card title="Страница авторизации (заглушка)">
        <p>
          Для доступа к защищённому маршруту /profile выполните демо-вход.
        </p>
        <Button onClick={handleLogin}>Войти как игрок</Button>
      </Card>
    </div>
  )
}