import React, { createContext ,useState} from 'react'
import Header from './components/Header'
import Footer from './Footer/Footer';
import Home from './pages/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import ProductListing from './pages/ProductListing';
import ProductDetails from './pages/ProductDetails';
import { IoMdClose } from "react-icons/io";
import Login from './pages/Login';
import Register from './pages/Register';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import ProductZoom from './components/ProductZoom';
import ProductDetailsPage from './components/ProductDetailsPage';
import CartPage from './pages/CartPage';



const MyContext = createContext();

function App() {
  const [openProductModal, setOpenProductModal] = useState(false);
  const [maxWidth ,setMaxWidth] = useState('lg')
  const [fullWidth ,setFullWidth] = useState(true)
  const [openCartPanel, setOpenCartPanel] = useState(false);


 const toggleCartPanel = (newOpen) => () => {
   setOpenCartPanel (newOpen);
  };
  const handleCloseProductModal = () => {
    setOpenProductModal(false);
  };

  const values={
  setOpenProductModal,
  setOpenCartPanel,
  toggleCartPanel,
  openCartPanel
  }
  return (
    <>
      <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header/> 
       <Routes>
        <Route path={"/"} exact={true} element={<Home />} /> 
        <Route path={'/productlisting'} exact={true} element={<ProductListing/>} />
        <Route path={'/product/:id'} exact={true} element={<ProductDetails/>} /> 
        <Route path={'/login'} exact={true} element={<Login/>} /> 
        <Route path={'/register'} exact={true} element={<Register/>} /> 
        <Route path={'/cartpage'} exact={true} element={<CartPage/>} /> 
  
     </Routes>
     <Footer/>
     </MyContext.Provider>
    </BrowserRouter>
      <Dialog
        open={openProductModal}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className='productDetailModal'
      >
        <DialogContent>
          <div className='flex items-center w-full productDetailsModalContainer'>
            <Button className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black !absolute top-[15px] right-[15px] px-3'>
              <IoMdClose onClick={handleCloseProductModal} className='text-[20px]'/></Button>
            <div className='col1 w-[40%] px-3'>
            <ProductZoom/>
            </div>
            <div className='col2 w-[60%] py-6 px-6'>
              <ProductDetailsPage/>
            </div>
          </div>
        </DialogContent>
      </Dialog>
     </>
  )
}

export default App

export{MyContext}
