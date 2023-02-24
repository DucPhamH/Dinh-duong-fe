import { Routes, Route } from 'react-router-dom'
import { Mainlayout } from './components/MainLayout'
import { ChiaSe } from './page/ChiaSe'
import { Home } from './page/Home'
import { KienThuc } from './page/KienThuc'
import { MonAn } from './page/MonAn'
import { ThucDon } from './page/ThucDon'

function App() {
  return (
    <div>
      <Mainlayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/chia-se' element={<ChiaSe />} />
          <Route path='/kien-thuc' element={<KienThuc />} />
          <Route path='/mon-an' element={<MonAn />} />
          <Route path='/thuc-don' element={<ThucDon />} />
        </Routes>
      </Mainlayout>
    </div>
  )
}

export default App
