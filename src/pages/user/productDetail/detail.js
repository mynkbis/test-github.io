import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@mui/material';

const ProductDetails = () => {
    const [detail, setDetails] = React.useState();
    const id = useParams()
    const navigate = useNavigate();
   
    fetch(`https://fakestoreapi.com/products/${id.id}`)
            .then(res=>res.json())
            .then(json=>setDetails(json))


  return (
  <Paper
      sx={{
        p: 10,
    margin: 18,
        Height: "80%",

        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
      >
          {!detail ? "Loading...":
              <Grid container spacing={2} >
                  <Grid item>
                      <ButtonBase sx={{ width: 300, height: 300 }}>
                          <img alt="complex" src={detail.image} style={{width:"250px", height:"250px", margin:"5px", padding:"10px"}} />
                      </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                          <Grid item xs>
                              <Typography gutterBottom variant="subtitle1" component="div">
                                  {detail.title }
                              </Typography>
                              <Typography variant="body2" gutterBottom>
                                 {detail.description}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                             Product Id:     {detail.id}
                              </Typography>
                          </Grid>
                          <Grid item>
                              <Typography  >
                                  <Button sx={{ cursor: 'pointer', width: "180px", background: "#0D4C92", color: "#fff", '&:hover': { background: "#ffff", color: "#0D4C92" }, }}
                                      onClick={() => {navigate("/")
                                      
                                  }}>
                                      
                                Back
                                  </Button>
                                 
                              </Typography>
                              <br/>
                              <Typography   >
                                   <Button sx={{ cursor: 'pointer', width:"180px", background: "#0D4C92", color:"#fff", '&:hover': { background: "#ffff", color: "#0D4C92" }, }}>
                                      
                               Add to cart
                                  </Button>
                              </Typography>
                          </Grid>
                      </Grid>
                      <Grid item>
                          <Typography variant="subtitle1" component="div">
                              $19.00
                          </Typography>
                      </Grid>
                  </Grid>
              </Grid>}
    </Paper>
  );
}


export default ProductDetails