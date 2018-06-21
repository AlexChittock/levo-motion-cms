import React from 'react'
import Helmet from 'react-helmet'
import ShortHeader from '../components/ShortHeader'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 500,
  },
  button: {
    margin: theme.spacing.unit,
    width: 100
  }
});

const Form = withStyles(styles)(({ classes }) =>
  <form name="contact" method="post" className={classes.container} data-netlify="true" data-netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact" />  
    <TextField
      id="name"
      name="name"
      label="Name"
      margin="normal"
      className={classes.textField}
      />
    <TextField
      id="email"
      name="email"
      label="Email"
      margin="normal"
      type="email"
      className={classes.textField}
      />
    <TextField
      id="message"
      name="message"
      label="Message"
      margin="normal"
      multiline
      rows={4}
      className={classes.textField}
      />
    <Button
      variant="outlined"
      className={classes.button}
      type="submit"
      >Send</Button>
      
  </form>)

export default () =>
  <div className="page">
    <ShortHeader title="Contact" />
    <div className="page__wrapper">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <article className="page__content">
        <Form />
      </article>
    </div>
  </div>
