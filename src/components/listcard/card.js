import React, { useRef } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CardProduct = ({ productList, listRef }) => {

  //  const listtest = useRef();

//console.log("list test", )
     return (
         <Box sx={{ p: 1 }}>{!productList ? "Loading..." :
             <Grid
                 container
                 
                 sx={{
                     '--Grid-borderWidth': '1px',
                     borderTop: 'var(--Grid-borderWidth) solid ',
                     borderLeft: 'var(--Grid-borderWidth) solid',
                     borderColor: 'divider',
                     borderRadius: '5px',
                     '& > div': {
                         borderRight: 'var(--Grid-borderWidth) solid',
                         borderBottom: 'var(--Grid-borderWidth) solid',
                         borderColor: 'divider',
                     },
                 }}
             >
                 {productList?.map((item, index) => (
                     <Grid item={true} key={item?.id} {...{ xs: 12, sm: 6, md: 4, lg: 3 }} minHeight={250} sx={{}} >
                         <Typography variant="div" sx={{ ml: 4 }} >
                             <img src={item?.image} style={{ width: '80%', height: 240, alignItems: "center", justify: "center" }} alt={item?.title} />
                         </Typography>
                                             <Typography gutterBottom display="block" variant="h5" color="primary" sx={{ pl: 8 }}>
                             {item?.title.substring(0, 15)}...
                         </Typography>
                         <Typography gutterBottom display="block" variant="h5" color="primary" sx={{ pl: 8 }}>
                             <Typography variant="caption" color="text.secondary">
                                 Description: {item.description.substring(0, 20)}...
                             </Typography>
                             <br />
                             <Typography variant="caption" color="text.secondary">
                                 Price: $ <span style={{ color: "primary", fontSize: "16px" }}>{item.price}</span>
                             </Typography>
                         </Typography>
                     </Grid>
                 ))}
             </Grid>}
    </Box>
  )
}

export default CardProduct