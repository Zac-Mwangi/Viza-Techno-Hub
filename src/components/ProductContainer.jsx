import React from 'react'
import { Typography, Card, CardContent, CardMedia, Grid, Container } from '@mui/material'
import useStyles from '../styles'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from "@mui/material/IconButton";
import Box from '@material-ui/core/Box';
import { Rating } from '@mui/material';


export default function ProductContainer({ cards, update, cart }) {
    const classes = useStyles()

    // console.log("productContainer", cart)

    const url = "http://localhost:3000/cart";

    function handleSubmit(e, id, card) {
        e.stopPropagation();

        const newCart = {
            "product_id": card.id,
            "title": card.title,
            "price": card.price,
            "description": card.description,
            "category": card.category,
            "image": card.image,
            "quantity": card.quantity,
        };

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCart),
        })
            .then((r) => r.json())
            .then((data) => {
                // console.log(data);
                update()
            });
    }
    return (
        <div>
            <Container styles={{ padding: "20px 0" }} className={classes.cardGridS} maxWidth="md">
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card.id} xs={12} sm={6} md={4} onClick={() => alert(card.title + "olaa")}>
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
                                        <Box align="left" mb={1} borderColor="transparent">
                                            <Rating
                                                value={card.rating.rate}
                                                name="rating"
                                            // readOnly="true"
                                            />
                                        </Box>
                                        <div style={{ display: "flex" }}>
                                            <Typography variant='h6' sx={{ flexGrow: 1 }}>
                                                ${card.price}
                                            </Typography>
                                            <IconButton color="primary" aria-label="add to shopping cart"
                                                onClick={(e) => handleSubmit(e, card.id, card)}>
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
