import React from 'react'
import Header from './components/Header'
import Footer from './Footer/Footer';
import Home from './pages/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import ProductListing from './pages/ProductListing';

function App() {

  return (
    <>
      <BrowserRouter>
          <Header/> 
       <Routes>
        <Route path={"/"} exact={true} element={<Home />} /> 
        <Route path={'/productlisting'} exact={true} element={<ProductListing/>} >
        </Route>
     </Routes>
     <Footer/>
    </BrowserRouter>
     </>
  )
}

export default App
