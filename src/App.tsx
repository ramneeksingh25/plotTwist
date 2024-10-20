import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import SignIn from './pages/SignIn'
import CreateNewPage from './pages/CreateNew'
import ExploreIdeas from './pages/Explore'
import PricingPage from './pages/Price'

function App() {
  return (
    <>
      <Header/>
      <div className=''>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard  />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/create' element={<CreateNewPage />} />
          <Route path='/exploreideas' element={<ExploreIdeas />} />
          <Route path='/pricing' element={<PricingPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
