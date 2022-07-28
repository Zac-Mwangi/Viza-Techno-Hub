import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Input, Button, Typography } from "@material-ui/core";
import SendIcon from '@mui/icons-material/Send';
import { Card, CardContent, Grid, Container } from '@mui/material'
import useStyles from '../styles'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function Contact() {

  const classes = useStyles()
  const url = "https://vizahub.herokuapp.com/comments";

  const [comments, setComments] = useState([]);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [id, setID] = useState(1)

  const [editBtn, setEditBtn] = useState(false)

  // useEffect To Fetch All the comments
  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        setComments(data);
      });
  }, []);

  // FETCH ALL THE CONTACTS

  function handleSubmit(e) {
    e.preventDefault()
    if (name === "" || email === "" || message === "") {
      alert("Please fill all the fields")
    }
    else {

      const commentData = {
        name,
        email,
        message,
      };

      // check if its edit or add
      if (editBtn) {

        // edit
        fetch(url + "/" + id, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(commentData),
        })
          .then((r) => r.json())
          .then((updatedItem) => updateList(updatedItem));
      }
      else {

        // post
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(commentData),
        })
          .then((r) => r.json())
          .then((data) => {
            // console.log(data)
            setComments([...comments, data])
            setName("")
            setEmail("")
            setMessage("")
          });
      }
    }

  }

  // edit card clicked
  function handleEdit(card) {
    setName(card.name)
    setEmail(card.email)
    setMessage(card.message)
    setID(card.id)
    setEditBtn(!editBtn)
  }

  function handleDelete(id) {
    fetch(url + "/" + id, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => updateAfterDelete(id));
  }

  function updateAfterDelete(id) {
    const updated = comments.filter((comment) => comment.id !== id);
    setComments(updated);
  }

  function updateList(updatedItem) {
    const updatedItems = comments.map((item) => {
      if (item.id === updatedItem.id) {
        return updatedItem;
      } else {
        return item;
      }
    });
    setComments(updatedItems);
    setEditBtn(!editBtn)
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: 20,
        padding: 20
      }}
    >
      <div>

        <div>
          <form style={{ width: "50%", border: "2px solid grey", padding: "50px" }}>
            <h1>{editBtn ? "Edit Details" : "Contact Form"}</h1>

            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>

            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>

            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="message">Message</InputLabel>
              <Input multiline rows={7} value={message} onChange={(e) => setMessage(e.target.value)} />
            </FormControl>

            <Button variant="contained" color="primary" size="large" endIcon={editBtn ? <EditIcon /> : <SendIcon />} fullWidth onClick={handleSubmit}>
              {editBtn ? "Edit" : "Save"}
            </Button>
          </form>
        </div>

        <div>

          <br></br>
          <div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Container styles={{ padding: "20px 0" }} className={classes.cardGridS} maxWidth="md">
              <Grid container spacing={3}>
                {comments.map((card) => (
                  <Grid item key={card.id} xs={12} sm={6} md={3}>
                    <Card className={classes.card} onClick={() => handleEdit(card)}>
                      <div style={{ backgroundColor: "#FFF" }}>
                        <CardContent className={classes.cardContent}>
                          <Typography gutterBottom variant='h5' className={classes.multiLineEllipsis2}>
                            {card.name}
                          </Typography>
                          <Typography gutterBottom variant='h6' className={classes.multiLineEllipsis}>
                            {card.message}
                          </Typography>
                          <Button variant="contained" color="primary" size="large" endIcon={<DeleteIcon />} fullWidth onClick={() => handleDelete(card.id)}>
                            DELETE
                          </Button>
                        </CardContent>
                      </div>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </div>
        </div>

      </div>
    </div>
  )
}
