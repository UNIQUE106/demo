import { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout/Layout'
import DetailPage from './pages/DetailPage'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/store/:name' element={<DetailPage />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App