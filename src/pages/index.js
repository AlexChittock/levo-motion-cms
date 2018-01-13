import React from 'react'
import Link from 'gatsby-link'

import SecondaryContent from '../components/SecondaryContent'

import ReadyForClass from '../../assets/ready-for-class.jpg'
import Newsletter from '../../assets/newsletter.jpg'

const IndexPage = (props) => (
  <div>
    <SecondaryContent background={ReadyForClass}>
      <h2>Ready for class?</h2>
      <Link className="button" to="/timetables">View timetable</Link>
      <Link className="button" to="/booking">Book a class</Link>
    </SecondaryContent>
    <SecondaryContent background={Newsletter}> 
      <h2>Sign up for our newsletter</h2>      
      <form action="/newsletter">
        <input type="email" name="email" placeholder="email address" />
        <button type="submit" value="">Sign Up!</button>
      </form>
    </SecondaryContent>
  </div>
)

export default IndexPage