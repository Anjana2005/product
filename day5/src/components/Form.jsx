import { Button, TextField } from '@mui/material'
import React from 'react'

const Form = () => {
  return (
    <div>
        <br/>
        <br/>
        <br/>
        <TextField variant='outlined' label='Enter Your Product Name'></TextField><br/><br/>
        <TextField variant='outlined' label='Description'></TextField><br/><br/>
        <TextField variant='outlined' label='Price'></TextField><br/><br/>
        <TextField variant='outlined' label='Category'></TextField><br/><br/>
        <Button variant='contained'>Submit</Button>
    </div>
  )
}

export default Form