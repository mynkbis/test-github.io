import { Alert, Button, Snackbar, Typography } from '@mui/material';
import * as React from 'react';
import CardProduct from "../../../components/listcard/card"
import Sorting from '../../../components/sorting';
import useDarkTheme from '../../../utils/customHooks/darkTheme';
import useFetchData from '../../../utils/customHooks/useFetch';
import useScrollBottom from '../../../utils/customHooks/useScroll';
import useViewPort from '../../../utils/customHooks/useViewPort';
import useWindowInfo from '../../../utils/customHooks/useWindowInfo';

export default function Home() {

  const [productList] = useFetchData('https://fakestoreapi.com/products')
  const last = useScrollBottom("scroll")
  const inside =useViewPort("scroll")
  const  lat  = useWindowInfo(window) 
  

  //console.log("infor", info)
  console.log("lat",  lat)

  const handleDark=(e) => {
    // setDarkMode(!enabled)
    console.log("dark")
}

   const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  
     
 //console.log("list", productList)

  return (<>
    <Typography variant='span' id="geo">leo</Typography>
    <button onClick={(e) => {
    handleDark(e)
    }}>Theme</button>

    
    
    <div>
      <Sorting />
    </div>
      <div>       
      <CardProduct productList={productList} />
      {/* {last? console.log("at last") : console.log("not reached")} */}
           </div></> 
  );
}