import React from 'react'
import HomeSlider from '../../components/HomeSlider'
import HomeCatSlider from '../../components/CategorySlider'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProductSlider from '../../components/ProductSlider' 

const Home = () => {
   const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
   
   <>
    <HomeSlider />
    <HomeCatSlider />

    <section className='bg-white py-8'>
      <div className="container">
        <div className='flex items-center justify-between'>
           <div className='leftsec'>
            <h2 className='text-[20px] font-[600]'> Popular Products</h2>
            <p className='text-[16px] font-[600]'>Do Not Miss the offers until the offers Ends</p>
           </div>
         <div className='rightsec w-[60%]'>
         <p className='text-[16px] font-[600]'>View All</p>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Best Sellers" />
        <Tab label="Kurta Sets" />
        <Tab label="Saree" />
        <Tab label="kids Wear" />
        <Tab label="Western Dress" />
        <Tab label="Beauty" />
        <Tab label="Bags" />
        <Tab label="Jewellery" />
        <Tab label="Bottoms" />
        <Tab label="Ethnic Wear" />
      </Tabs>
        </div>
        </div>

        <ProductSlider items/>
      </div>
       
    </section>

    </>
  )
}

export default Home