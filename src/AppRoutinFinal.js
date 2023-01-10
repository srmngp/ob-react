import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom'
import NotFoundPage from './pages/404/NotFoundPage'
import LoginPage from './pages/auth/LoginPage'
import DashboardPage from './pages/dashboard/DashBoard'

function AppRoutingFinal() {

  let logged = true

  return (
    <Router>
      <Routes>
        <Route exact path='' element={logged ? <Navigate to='dashboard' /> : <Navigate to='/login' />} />

        <Route path='/dashboard' element={logged ? <DashboardPage /> : <Navigate to='/login' />} />
        <Route exact path='/login' element={<LoginPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default AppRoutingFinal
