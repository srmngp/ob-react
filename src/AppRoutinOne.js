import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom'

import HomePage from './pages/home/HomePage'
import NotFoundPage from './pages/404/NotFoundPage'
import AboutPage from './pages/about-faqs/AboutPage'
import ProfilePage from './pages/profile/ProfilePage'
import TasksPage from './pages/tasks/TasksPage'
import TaskDetailPage from './pages/tasks/TaskDetailPage'
import LoginPage from './pages/auth/LoginPage'
import { useEffect } from 'react'
import StatePage from './pages/home/StatePage'

function AppRoutingOne() {

  let logged = false

  useEffect(() => {
    logged = localStorage.getItem('credentials')
    console.log('User logged?', logged);
  }, []);

  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'First task'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'Second task'
    }
  ]

  return (
    <Router>
      <div>
        <aside>
          <Link to='/'> Home </Link>
          <Link to='/about'> About </Link>
          <Link to='/faqs'> FAQs </Link>
          <Link to='/login'> Login </Link>
          <Link to= '/statePage'> State page</Link>
        </aside>

        <main>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/login' element={logged ? <Navigate to='/'/> : <LoginPage />} />
            <Route path='/faqs' element={<AboutPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/profile' element={
              logged ?
                <ProfilePage /> :
                <Navigate to='/login' />
            }>
            </Route>

            <Route path='/tasks' element={<TasksPage />} />
            <Route exact path='/task/:id' element={<TaskDetailPage task={taskList[1]}/>} />
            <Route path='/statePage' element={<StatePage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>

    </Router>
  )
}

export default AppRoutingOne
