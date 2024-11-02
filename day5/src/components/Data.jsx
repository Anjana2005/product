import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Data = () => {
    var [user,setuser]=useState([])
    axios.get("https://fakestoreapi.com/products")
    .then((response)=>{
        setuser(response.data)
        console.log(user)
        
})
  return (
    <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Grid container spacing={2}>
            
        {
        user.map((val)=>{
            return(
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                <CardMedia height="140">
                    <img src={val.image} alt="image" height={100}/>
                </CardMedia>
            <CardContent>
                <Typography variant="h6" component="h2">{val.category}</Typography>
                <Typography variant='body1'>{val.title}</Typography>
                <Typography variant="body6" color="textSecondary">{val.price}</Typography>
            </CardContent>
            <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
            </Card>
            </Grid>
            )
})
        }
        
        </Grid>
    </div>
  )
}

export default Data