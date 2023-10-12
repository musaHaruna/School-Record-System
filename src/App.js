import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing, Error, Register, SelectPreference } from './pages'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='select-preference' element={<SelectPreference />} />
        <Route path='register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
