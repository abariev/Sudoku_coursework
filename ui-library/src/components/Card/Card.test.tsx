import { render, screen } from '@testing-library/react'

import { Card } from './Card'

describe('Card', () => {
  it('renders title and children', () => {
    render(<Card title="Статистика">Содержимое карточки</Card>)

    expect(screen.getByRole('heading', { name: 'Статистика' })).toBeInTheDocument()
    expect(screen.getByText('Содержимое карточки')).toBeInTheDocument()
  })

  it('renders without title', () => {
    render(<Card>Только контент</Card>)

    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
    expect(screen.getByText('Только контент')).toBeInTheDocument()
  })
})