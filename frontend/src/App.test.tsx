import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'

import { AppRoutes } from './App'

describe('AppRoutes', () => {
  it('renders home page and navigates to game page with difficulty param', async () => {
    const user = userEvent.setup()

    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>
    )

    expect(screen.getByRole('heading', { name: 'Судоку' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Средний уровень' }))
    expect(
      screen.getByRole('heading', { name: 'Игровая партия (medium)' })
    ).toBeInTheDocument()
  })

  it('redirects unauthenticated user from /profile to /login', () => {
    render(
      <MemoryRouter initialEntries={['/profile']}>
        <AppRoutes />
      </MemoryRouter>
    )

    expect(
      screen.getByRole('heading', { name: 'Вход в систему' })
    ).toBeInTheDocument()
  })

  it('renders 404 page for unknown route', () => {
    render(
      <MemoryRouter initialEntries={['/unknown-route']}>
        <AppRoutes />
      </MemoryRouter>
    )

    expect(
      screen.getByRole('heading', { name: '404 — Страница не найдена' })
    ).toBeInTheDocument()
  })
})