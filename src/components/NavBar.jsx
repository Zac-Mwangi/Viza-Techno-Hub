import React, { useEffect, useState } from "react";
import { Typography, AppBar, Button, CssBaseline, Toolbar, Stack, Badge } from '@mui/material'
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from "@mui/material/IconButton";
import { NavLink } from 'react-router-dom'

export default function NavBar({ cartLength }) {

    return (
        <div>
            <CssBaseline />
            <AppBar position='static'>
                <Toolbar style={{ margin: "5px" }}>
                    <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                        <LaptopMacIcon />
                    </IconButton>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    </Typography>
                    <Stack direction='row' spacing={2}>
                        <Button color='inherit'>
                            <NavLink to='/'>Home</NavLink>
                        </Button>
                        <Button color='inherit'>
                            <NavLink to='/contact'>Connect</NavLink>
                        </Button>
                        {/* <Button color='inherit'>
                            <NavLink to='/login'>Login</NavLink>
                        </Button> */}
                        <Badge badgeContent={cartLength} color="secondary">
                            <IconButton color="inherit" aria-label="add to shopping cart">
                                <NavLink to='/cart'> <AddShoppingCartIcon /></NavLink>
                            </IconButton>
                        </Badge>
                    </Stack>
                </Toolbar>
            </AppBar>
        </div>
    )
}
