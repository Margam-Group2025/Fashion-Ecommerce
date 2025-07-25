import React ,{useState}from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { IoMdClose } from "react-icons/io";
import '../Navigation/style.css';
import CategoryCollapse from "../../CategoryCollapse"

 const CategoryPanels = (props) => {

  const toggleDrawer = (newOpen) => () => {
    props.setOpenPanels(newOpen)
  };
  
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation"  className='categoryPanels'>

      <h3 className='p-4 text-[20px] font-[500] flex items-center justify-between'> 
        MENU <IoMdClose onClick={toggleDrawer(false)}
        className='cursor-pointer text-[20px]'/></h3>

    <CategoryCollapse/>
    </Box>
  );

  return (
<>
 <div>
      <Drawer open={props.openPanels} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
</> 
 )
}

export default CategoryPanels;