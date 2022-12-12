import { Alert, Box, Button, Snackbar, Typography } from '@mui/material';
import * as React from 'react';
import CardProduct from "../../../components/listcard/card"
import Sorting from '../../../components/sorting';
import useDarkTheme from '../../../utils/customHooks/darkTheme';
import useFetchData from '../../../utils/customHooks/useFetch';
import useKeyboard from '../../../utils/customHooks/useKeyboard';
import useScrollBottom from '../../../utils/customHooks/useScroll';
import useViewPort from '../../../utils/customHooks/useViewPort';
import useWindowInfo from '../../../utils/customHooks/useWindowInfo';

export default function Home() {

  const [productList] = useFetchData('https://fakestoreapi.com/products')
 // const last = useScrollBottom("scroll")
 // const inside = useViewPort()
  const [details, setDetails] = React.useState(false);
 // either true or false need to pass to use the hook so detail state is doing here the same 
  const info = useWindowInfo(details)
  const code =useKeyboard("")
  

 //console.log("geo status", info)
  const handleDark=(e) => {
    // setDarkMode(!enabled)
    console.log("dark")
}

//  console.log("details", details)
  
  const HandleClick = () => {
setDetails(!details)
  }

 //console.log("list", productList)

  return (<>

    <Typography variant='div' sx={{m:2}} >
      <span className='p'></span>
      <br/>
   
      {!details ?
        <Button sx={{
          background: "#0D4C92", '&:hover': { background: "#ffff", color: "#0D4C92" }, color: "#ffff", m:2
        }} onClick={(e) => { HandleClick(e) }}>
        Show Details
        </Button> : info ? <Box>          
          <Button sx={{
          background: "#0D4C92", '&:hover': { background: "#ffff", color: "#0D4C92" }, color: "#ffff", m:2
        }} onClick={(e) => { HandleClick(e) }}>
        Hide Details
          </Button>
          <br/>
      <Typography sx={{color:"#1976d2", ml:3}} id="geo" ></Typography>
   <br/>
          {info && info?.map((item, index) => {
            return (

              <Typography id="infor" variant='div' sx={{color:"#1976d2", m:3,}} key={index}>
                {`${index + 1} ${item}`}
                <br/>
              </Typography>
            )
          }) }
       </Box>      : "Currently we are facing issue with your network, kindly refresh the page"}
    </Typography>

    
    
    {/* <button onClick={(e) => {
    handleDark(e)
    }}>Theme</button> */}

    
    
    <div>
      <Sorting />
    </div>
      <div>       
      <CardProduct productList={productList} />
      {/* {last? console.log("at last") : console.log("not reached")} */}
           </div></> 
  );
}