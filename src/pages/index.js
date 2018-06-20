import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/Header'
import SecondaryContent from '../components/SecondaryContent'

import ReadyForClass from '../../assets/ready-for-class.jpg'
import Newsletter from '../../assets/newsletter.jpg'

import Arrow from '../../assets/arrow.png'

import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  }
});

const IndexPage = ({ classes }) => (
  <div>
    <Header />
    <SecondaryContent background={ReadyForClass} className={classes.container}>
      <h2>Ready for class?</h2>
      <Button variant="outlined" className={classes.button} href="/timetable">View timetable</Button>
      {/* <Button variant="outlined" className={classes.button} href="/booking">Book a class</Button> */}
    </SecondaryContent>
    <SecondaryContent background={Newsletter}> 
      <h2>Sign up for our newsletter</h2>      
      <form name="newsletter" method="POST" className={classes.container} netlify>
        {/* <input type="email" name="email" placeholder="email address" /> */}
        <TextField
          id="email"
          placeholder="email address"
          type="email"
          className={classes.textField}
          />
        <Button
          variant="outlined"
          className={classes.button}
          >
          Sign up <img src={Arrow} />
        </Button>
        {/* <button type="submit" value="">Sign Up!</button> */}
      </form>
    </SecondaryContent>
  </div>
)

export default withStyles(styles)(IndexPage)