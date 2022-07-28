import React from 'react'
import { FormControl, InputLabel, Input, Button, Select, MenuItem } from "@material-ui/core";
import AddIcon from '@mui/icons-material/Add';



export default function AddProducts() {

    function handleSubmit() {

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
                        <InputLabel htmlFor="name">Title</InputLabel>
                        <Input type="title" />
                    </FormControl>

                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="price">Price</InputLabel>
                        <Input type="number" />
                    </FormControl>

                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="image">Image</InputLabel>
                        <Input type="text" /><br></br>
                    </FormControl>

                    <FormControl fullWidth>
                        <label for="cars">choose category</label><br></br>
                        <select name="cat" id="cat" style={{ padding: "15px" }}>
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
                        <Input multiline rows={7} />
                    </FormControl>



                    <Button variant="contained" color="primary" size="large" endIcon={<AddIcon />} fullWidth onClick={handleSubmit}>
                        ADD
                    </Button>
                </form>

            </div>
        </div>
    )
}
