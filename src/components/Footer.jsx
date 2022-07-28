import React from 'react'
import { Typography, Button } from '@mui/material'
import useStyles from '../styles'

export default function Footer() {
    const classes = useStyles()

    return (
        <>
            <footer className={classes.footer}>
                <Typography variant='h6' align='center' gutterBottom>
                    Footer
                </Typography>
                <Typography variant='subtitle1' align='center' color='textSecondary'>
                    @ 2022 Viza Technologies
                </Typography>
            </footer>
        </>
    )
}
