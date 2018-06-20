import React from 'react'
import Nav from './Nav'
import './header.less'
import logo from '../../assets/logo.png'

import { connect } from 'react-redux'
import { toggleNav } from '../actions'

const BaseHeader = ({ isNavOpen, height, viewport, onToggleNav, children }) =>
  <header id="header" className={isNavOpen ? 'header--navOpen' : ''} style={{
    height: (isNavOpen ? viewport[0] : height) + 'px'
  }}>
    {children}
    <img className="header__logo" src={logo} />
    <Nav isNavOpen={isNavOpen} onToggle={onToggleNav} />
  </header>

const mapStateToProps = (state) => {
  return {
    isNavOpen: state.nav.isNavOpen,
    viewport: state.viewport
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleNav: () => dispatch(toggleNav())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseHeader)