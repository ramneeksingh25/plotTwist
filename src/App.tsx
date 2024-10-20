import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import SignIn from './pages/SignIn'

function App() {
  return (
    <>
      <Header/>
      <div className=''>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/signin' element={<SignIn />} />
        </Routes>
      </div>
    </>
  )
}

export default App
