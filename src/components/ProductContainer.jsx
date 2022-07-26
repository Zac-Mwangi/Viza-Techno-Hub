import React from 'react'
import { Typography, Card, CardActions, CardContent, CardMedia, Grid, Container } from '@mui/material'
import useStyles from '../styles'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from "@mui/material/IconButton";


export default function ProductContainer({ cards }) {
    const classes = useStyles()
    return (
        <div>
            <Container styles={{ padding: "20px 0" }} className={classes.cardGridS} maxWidth="md">
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card} onClick={() => console.log("Clicked")}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={card.image}
                                    title={card.title} />

                                <div style={{ backgroundColor: "#FFF" }}>
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant='h5' className={classes.multiLineEllipsis2}>
                                            {card.title}
                                        </Typography>
                                        <Typography gutterBottom variant='p' className={classes.multiLineEllipsis}>
                                            {card.description}
                                        </Typography>
                                        <Typography variant='h6'>
                                            ${card.price} /=
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
