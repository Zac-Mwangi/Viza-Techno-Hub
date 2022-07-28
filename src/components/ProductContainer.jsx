import React from 'react'
import { Typography, Card, CardContent, CardMedia, Grid, Container } from '@mui/material'
import useStyles from '../styles'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from "@mui/material/IconButton";
import Box from '@material-ui/core/Box';
import { Rating } from '@mui/material';


export default function ProductContainer({ cards, update, cart }) {

    const classes = useStyles()
    const url = "https://vizahub.herokuapp.com/cart";
    let t = true
    
    function handleSubmit(e, card) {
        e.stopPropagation();


        for (let i = 0; i < cart.length; i++) {
            if (cart[i].product_id === card.id) {
                t = false
                console.log("first :" + t)
                break
            }

        }

        console.log(t)

        // if(!t){
        //     return false
        // }

        const newCart = {
            "product_id": card.id,
            "title": card.title,
            "price": card.price,
            "description": card.description,
            "category": card.category,
            "image": card.image,
            "quantity": card.quantity,
        };

        if (t) {
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newCart),
            })
                .then((r) => r.json())
                .then((data) => {
                    update()
                });
        }

    }
    return (
        <div style={{marginTop: "20px" , marginBottom:"20px"}}>
            <Container styles={{ padding: "20px 0"}} className={classes.cardGridS} maxWidth="md">
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card.id} xs={12} sm={6} md={4} onClick={() => alert(card.title + "olaa")}>
                            <Card className={classes.card} onClick={() => console.log("Clicked")}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={card.image}
                                    title={card.description} />

                                <div style={{ backgroundColor: "#FFF" }}>
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant='h5' className={classes.multiLineEllipsis2}>
                                            {card.title}
                                        </Typography>
                                        <Typography gutterBottom variant='h6' className={classes.multiLineEllipsis}>
                                            {card.description}
                                        </Typography>
                                        <Box align="left" mb={1} borderColor="transparent">
                                            <Rating
                                                value={card.rating.rate}
                                                name="rating"
                                            // readOnly="true"
                                            />
                                        </Box>
                                        <div style={{ display: "flex" }}>
                                            <Typography variant='h6' sx={{ flexGrow: 1 }}>
                                                Ksh.{card.price}
                                            </Typography>
                                            <IconButton color="primary" aria-label="add to shopping cart"
                                                onClick={(e) => handleSubmit(e, card)}>
                                                <AddShoppingCartIcon />
                                            </IconButton>
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}
