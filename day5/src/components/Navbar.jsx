import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant='h5' color='#000000'>Product Application</Typography><hr></hr>
                <Link to={'/d'}>
                <Button variant='contained'>Data</Button>
                </Link>&nbsp; &nbsp;
                <Link to={'/f'}>
                <Button variant='contained'>Add Product</Button>
                </Link>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar