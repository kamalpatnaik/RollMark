import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Download from './pages/Download'
import Documentation from './pages/Documentation'
import Developers from './pages/Developers'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='download' element={<Download />} />
        <Route path='documentation' element={<Documentation />} />
        <Route path='developers' element={<Developers />} />
      </Route>
    </Routes>
  )
}

export default App