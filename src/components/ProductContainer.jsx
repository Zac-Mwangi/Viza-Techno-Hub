import React from 'react'
import { Typography,Card, CardActions, CardContent, CardMedia, Grid, Container} from '@mui/material'
import useStyles from '../styles'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from "@mui/material/IconButton";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function ProductContainer() {
    const classes = useStyles()
    return (
        <div>
            <Container styles={{ padding: "20px 0" }} className={classes.cardGridS} maxWidth="md">
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card} onClick={() => alert(card + "Clicked")}>

                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://www.bovic.co.ke/wp-content/uploads/2021/04/Dell-XPS-13-7390.jpg"
                                    title="Dell XPS" />

                                <div style={{ backgroundColor: "#FFF" }}>
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant='h5'>
                                            Dell XPS 13
                                        </Typography>
                                        <Typography gutterBottom variant='p' className={classes.multiLineEllipsis}>
                                            Features up to 11th Gen Intel processors and 4K display, perfectly caters to your home computing and entertainment needs.Features up to 11th Gen Intel processors and 4K display, perfectly caters to your home computing and entertainment needs.
                                        </Typography>
                                        <Typography variant='h6'>
                                            Ksh 25000/=
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <IconButton color="secondary" aria-label="add an alarm" sx={{ flexGrow: 1 }}>
                                            {/* <AddShoppingCartIcon /> */}
                                        </IconButton>
                                        <IconButton color="primary" aria-label="add to shopping cart">
                                            <AddShoppingCartIcon />
                                        </IconButton>
                                    </CardActions>
                                </div>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}
