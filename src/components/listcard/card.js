import React, { useRef } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const CardProduct = ({ productList, error, loading }) => {
const navigate=useNavigate()
  //  const listtest = useRef();

//console.log("list test", )
    const handleDetail = (id) => {
        navigate(`/ProductDetail${id}`)
    }
    
 console.log("productlist", productList)

     return (
         <Box sx={{ p: 1 }}>{loading ? "Loading..." :
             <Grid
                 container               
             >
                 
                 
                 {productList?.map((item, index) => (
                     <Grid item={true} key={item?.id} {...{ xs: 12, sm: 6, md: 4, lg: 3 }} minHeight={350}  >
                         <Box sx={{ margin:"5px", 
                         background: "", '&:hover': { background: "", color: "#0D4C92", cursor: "pointer", boxShadow:"1px 2px 20px #0D4C92",} 
                         }} onClick={(e) => { handleDetail(item.id) }} >
                           <Typography variant="div" sx={{ ml: 4, }} >
                             <img src={item?.image} style={{ width: '80%', height: 240, alignItems: "center", justify: "center", marginTop:"10px" }} alt={item?.title} />
                         </Typography>
                            <Typography gutterBottom display="block" variant="h5" color="primary" sx={{ pl: 8 }}>
                             {item?.title.substring(0, 15)}...
                         </Typography>
                         <Typography gutterBottom display="block" variant="h5" color="primary" sx={{ pl: 8, mb:8}}>
                             <Typography variant="caption" color="text.secondary">
                                 Description: {item.description.substring(0, 20)}...
                             </Typography>
                             <br />
                             <Typography variant="caption" color="text.secondary">
                                 Price: $ <span style={{ color: "#0D4C92", fontSize: "16px" }}>{item.price}</span>
                             </Typography>
                             </Typography>
                             </Box>
                     </Grid>
                 ))}
             </Grid>}
    </Box>
  )
}

export default CardProduct





