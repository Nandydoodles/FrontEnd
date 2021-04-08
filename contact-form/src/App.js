import './App.css';
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button} from 'react-bootstrap';
import { TextField } from '@material-ui/core';

export default function Contact() {

  const useStyles = makeStyles(theme => ({
    root: {
      padding: "120px"
    }
  }));


  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
 
  const handleSubmit = () => {
      //submit the form
  };
 
  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        Contact Us
      </Typography>
      <form noValidate autoComplete="off" className={classes.container}>
        <div className={classes.row}>
          <TextField
            label="Full Name"
            margin="normal"
            variant="outlined"
            value={name}
            onChange={e => setName(e.target.value)}
            fullWidth
          />
          <TextField
            label="Email Address"
            margin="normal"
            variant="outlined"
            value={email}
            onChange={e => setEmail(e.target.value)}
            fullWidth
          />
        </div>
        <br />
        <TextField
          multiline
          rows="4"
          label="Message"
          margin="normal"
          variant="outlined"
          value={message}
          onChange={e => setMessage(e.target.value)}
          fullWidth
        />
        <br />
        <Button className='form-field' type='submit'
          fullWidth
          variant="contained"
          color="secondary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}