import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Service from './pages/Service.jsx'
import ViewProduct from './pages/ViewProduct.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import { ProductProvider } from './store/ProductContext.jsx'
import Getdiscount from './components/Getdiscount.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
        <BrowserRouter>
    <Routes>
      <Route path ='/' element={<App/>}>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/about' element={<About/>}/>
        <Route path ='/service' element={<Service/>}/>
        <Route path ='/contact' element={<Contact/>}/>
        <Route path ='/view' element={<ViewProduct/>}/>
      </Route>
    </Routes>
    </BrowserRouter>

    </ProductProvider>
  </StrictMode>,
)
