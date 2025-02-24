import 'bootstrap/dist/css/bootstrap.min.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter , Routes, Route } from 'react-router'
import './index.css'
//import App from './App.jsx'

//paginas
import Layout from './layout/layout.jsx'
import Home from './pages/home/Home.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout/>} >
        <Route path='/' element={<Home/>} />
      </Route>
    </Routes>
  </BrowserRouter>
)
