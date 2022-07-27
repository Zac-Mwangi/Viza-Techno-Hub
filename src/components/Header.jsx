import React, { useState } from 'react'
import useStyles from '../styles'
import { Typography, Button, Grid, Container } from '@mui/material'


export default function Header({ products, updateList, setProducts }) {
    const classes = useStyles()

    const [t, sT] = useState([])

    function changeText(filterBy) {
        const pp = (products.filter((product) => {
            if (filterBy === "all") {
                return true;
            } else {
                return product.category === filterBy;
            }
        }));
        // 


        pp.length > 0 ? setProducts(pp) : setProducts(pp)
        console.log(pp);
        // setProducts(pp)
        // console.log(filterBy)

        setProducts(products => pp)

    }

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
                                <Button variant='contained' color='primary' onClick={() => changeText("all")}>
                                    ALL
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' color='primary' onClick={() => changeText("laptop")}>
                                    LAPTOPS
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='contained' color='primary' onClick={() => changeText("clothing")}>
                                    CLOTHING
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' color='primary' onClick={() => changeText("liquor")}>
                                    LIQUOR
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='contained' color='primary' onClick={() => changeText("jeweller")}>
                                    JEWELLERS
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' color='primary' onClick={() => changeText("housings")}>
                                    HOUSING
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='contained' color='primary' onClick={() => changeText("electronics")}>
                                    ELECTRONICS
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' color='primary' onClick={() => changeText("others")}>
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
