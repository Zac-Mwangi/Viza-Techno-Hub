import React from 'react'
import { Typography } from '@mui/material'

export default function CartContainer({ cart }) {

  console.log(cart)
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Typography gutterBottom variant='h1'>THE CART IS COMING SOON...!!</Typography>
    </div>
  )
}
