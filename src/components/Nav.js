import React, { Component } from 'react'
import Link from 'gatsby-link'
import './nav.less'

const Nav = ({ isNavOpen, onToggle }) =>
  <nav className={'nav' + (isNavOpen ? ' nav--expanded' : '')} role="navigation">
    <a href="#" className='nav__toggle' onClick={onToggle}>
      <span></span>
      <span></span>
      <span></span>
    </a>
    <ul>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/news">News</Link></li>
      <li><Link to="/pricing">Pricing</Link></li>
      <li><Link to="/timetable">Timetables</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>

export default Nav