import React, { useState } from "react";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";
import SendIcon from '@mui/icons-material/Send';

export default function Contact() {

  const url = "https://vizahub.herokuapp.com/comments";

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

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

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentData),
      })
        .then((r) => r.json())
        .then((data) => {
          console.log(data)

          setName("")
          setEmail("")
          setMessage("")
        });
    }
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
      <form style={{ width: "50%", border: "2px solid grey", padding: "10px" }}>
        <h1>Contact Form</h1>

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

        <Button variant="contained" color="primary" size="large" endIcon={<SendIcon />} fullWidth onClick={handleSubmit}>
          Send
        </Button>
      </form>

    </div>
  )
}
