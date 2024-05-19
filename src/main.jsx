import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App';
import { About } from "./Components/About/About"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Blog } from './Components/Blog/Blog';
import { Contact } from './Components/Contact/Contact';
import { Shop } from './Components/Shop/Shop';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='blog' element={<Blog />} />
            <Route path='contact' element={<Contact />} />
            <Route path='shop' element={<Shop />} />
          </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
