import React, { useState } from 'react'
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";
import AddIcon from '@mui/icons-material/Add';



export default function AddProducts() {

    const url = "http://localhost:3000/products";

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        if (title === "" || price === "" || image === "" || description === "" || category === "") {
            alert("Please fill all the fields")
        } else {

            const rate = Math.floor(Math.random() * 4.5) + 1
            const count = Math.floor(Math.random() * 500) + 1

            const newProduct = {
                title,
                price,
                description,
                category,
                image,
                "rating": {
                    "rate": rate,
                    "count": count
                }
            }

            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newProduct),
            })
                .then((r) => r.json())
                .then((data) => {
                    // console.log(data)
                    setTitle("")
                    setPrice("")
                    setDescription("")
                    setCategory("")
                    setImage("")
                });
        }

        window.location = '/';
    }

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: 20,
                    padding: 20
                }}
            >
                <form style={{ width: "50%", border: "2px solid grey", padding: "10px" }}>
                    <h1>ADD PRODUCT FORM</h1>

                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="title">Title</InputLabel>
                        <Input type="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </FormControl>

                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="price">Price</InputLabel>
                        <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </FormControl>

                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="image">Image</InputLabel>
                        <Input type="text" value={image} onChange={(e) => setImage(e.target.value)} /><br></br>
                    </FormControl>

                    <FormControl fullWidth>
                        <label htmlFor="category">choose category</label><br></br>
                        <select name="category" value={category} id="category" style={{ padding: "15px" }} onChange={(e) => setCategory(e.target.value)}>
                            <option value="beauty">Beauty</option>
                            <option value="clothing">Clothing</option>
                            <option value="electronics">Electronics</option>
                            <option value="housing">Housing</option>
                            <option value="laptop">Laptop</option>
                            <option value="liquor">Liquor</option>
                            <option value="sporting">Sporting</option>
                        </select>
                    </FormControl>

                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="description">Description</InputLabel>
                        <Input multiline rows={7} value={description} onChange={(e) => setDescription(e.target.value)} />
                    </FormControl>

                    <Button variant="contained" color="primary" size="large" endIcon={<AddIcon />} fullWidth onClick={handleSubmit}>
                        ADD
                    </Button>
                </form>
            </div>
        </div>
    )
}
