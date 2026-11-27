import { NavLink, Outlet } from 'react-router-dom'

import { Button } from '@sudoku-app/ui-library'

export interface LayoutProps {
  isAuthenticated: boolean
  onToggleAuth: () => void
}

export const Layout = ({ isAuthenticated, onToggleAuth }: LayoutProps) => {
  return (
    <div className="layout">
      <header className="header">
        <nav className="nav">
          <NavLink to="/" end>
            Главная
          </NavLink>
          <NavLink to="/game/easy">Игра</NavLink>
          <NavLink to="/stats">Статистика</NavLink>
          <NavLink to="/rules">Правила</NavLink>
          <NavLink to="/profile">Профиль</NavLink>
        </nav>
        <Button variant="secondary" onClick={onToggleAuth}>
          {isAuthenticated ? 'Выйти (авторизован)' : 'Войти (гость)'}
        </Button>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        Веб-приложение Судоку — каркас курсового проекта
      </footer>
    </div>
  )
}