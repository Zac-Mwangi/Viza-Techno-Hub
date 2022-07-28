import React from 'react'
import useStyles from '../styles'
import { Typography, Button, Grid, Container } from '@mui/material'
import SearchBar from 'material-ui-search-bar';
import AddIcon from '@mui/icons-material/Add';
import { NavLink } from 'react-router-dom'

export default function Header({ setProducts, nM, addProduct }) {
    const classes = useStyles()

    function changeText(filterBy) {
        const pp = (nM.filter((product) => {
            if (filterBy === "all") {
                return true;
            } else {
                return product.category === filterBy;
            }
        }));
        setProducts(pp)
    }

    function searchFunction(searchValue) {
        const itemsSearch = nM.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.description.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.category.toLowerCase().includes(searchValue.toLowerCase()));
        setProducts(itemsSearch)
    }
    return (
        <div>
            <div className={classes.container}>
                <Container maxWidth="sm">
                    <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                        Viza Shop
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
                                <Button variant='contained' color='primary' onClick={() => changeText("sporting")}>
                                    SPORTING
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' color='primary' onClick={() => changeText("housing")}>
                                    HOUSING
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='contained' color='primary' onClick={() => changeText("electronics")}>
                                    ELECTRONICS
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' color='primary' onClick={() => changeText("beauty")}>
                                    BEAUTY
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" endIcon={<AddIcon />} onClick={() => console.log("olaa")}>
                                    <NavLink to='/add'>ADD NEW</NavLink>
                                </Button>
                            </Grid>
                        </Grid>
                        <div style={{ marginTop: "20px" }}>
                            <SearchBar onChange={(value) => searchFunction(value)}
                                placeholder="Search Product ..."
                            ></SearchBar>
                        </div>
                    </div>
                </Container>
            </div>



        </div>
    )
}
