import React from 'react'
import useStyles from '../styles'
import { Typography, Button, Grid, Container } from '@mui/material'



export default function Header({ categories }) {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.container}>
                <Container maxWidth="sm">
                    <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                        Viza Techno Hub
                    </Typography>

                    <Typography variant='h5' align='center' color='textSecondary' paragraph>
                        {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto quasi sed odio reiciendis ratione sint harum, nam dolorem? Atque quidem in ratione molestias natus debitis quia et ipsa nihil magnam. */}
                    </Typography>

                    <div className={classes.button}>
                        <Grid container spacing={2} justify='center'>
                            <Grid item>
                                <Button variant='contained' color='primary'>
                                    ALL
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' color='primary'>
                                    LAPTOPS
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='contained' color='primary'>
                                    CLOTHING
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' color='primary'>
                                    LIQUOR
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='contained' color='primary'>
                                    JEWELLERS
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' color='primary'>
                                    HOUSING
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='contained' color='primary'>
                                    ELECTRONICS
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' color='primary'>
                                    OTHERS
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
        </div>
    )
}
