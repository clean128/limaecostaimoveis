import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { PropertyDetailPage } from './pages/PropertyDetailPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/imovel/:id" element={<PropertyDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
