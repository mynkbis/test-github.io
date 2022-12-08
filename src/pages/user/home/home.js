import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import CardProduct from "../../../components/listcard/card"
import Sorting from '../../../components/sorting';
import SearchBar from '../../../components/Search';
import { Typography } from '@mui/material';

export default function Home() {

  const [productList, setProductList] = React.useState([]);


  React.useEffect(() => {
  

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProductList((json)))
},[])


  console.log("list", productList)


  return (<>
    <div>
      <Sorting />
    </div>
      <div>  
     
      <CardProduct productList={productList } />
    </div></> 
  );
}