import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import '@sudoku-app/ui-library/index.css'

import './App.css'
import { Layout } from './components/Layout'
import { ProtectedRoute } from './components/ProtectedRoute'
import { GamePage } from './pages/GamePage'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProfilePage } from './pages/ProfilePage'
import { RulesPage } from './pages/RulesPage'
import { StatsPage } from './pages/StatsPage'

export const AppRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            isAuthenticated={isAuthenticated}
            onToggleAuth={() => setIsAuthenticated((prev) => !prev)}
          />
        }
      >
        <Route index element={<HomePage />} />
        <Route path="game/:difficulty" element={<GamePage />} />
        <Route path="stats" element={<StatsPage />} />
        <Route path="rules" element={<RulesPage />} />
        <Route
          path="profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ProfilePage onLogout={() => setIsAuthenticated(false)} />
            </ProtectedRoute>
          }
        />
        <Route
          path="login"
          element={<LoginPage onLogin={() => setIsAuthenticated(true)} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App