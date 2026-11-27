import { Button, Card } from '@sudoku-app/ui-library'

export interface ProfilePageProps {
  onLogout: () => void
}

export const ProfilePage = ({ onLogout }: ProfilePageProps) => {
  return (
    <div className="stack">
      <h1>Профиль игрока</h1>
      <Card title="Защищённый раздел настроек (заглушка)">
        <p>
          Здесь пользователь сможет настраивать тему оформления, подсветку конфликтов и сбрасывать статистику.
        </p>
        <Button variant="danger" onClick={onLogout}>
          Выйти из профиля
        </Button>
      </Card>
    </div>
  )
}