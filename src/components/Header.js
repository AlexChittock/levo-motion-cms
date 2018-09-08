// import React from 'react'
// import Nav from './Nav'
// import './header.less'
// import logo from '../../assets/logo.png'

// import { connect } from 'react-redux'
// import { toggleNav } from '../actions'

// const Header = ({ isNavOpen, viewport, onToggleNav }) =>
//   <header id="header" className={isNavOpen ? 'header--navOpen' : ''} style={{
//     height: viewport[0] + 'px'
//   }}>
//     <video playsInline="" poster="https://scontent-lhr3-1.cdninstagram.com/t51.2885-15/e15/23416878_2085709718316667_1855887739770109952_n.jpg" preload="auto" src="https://scontent-lhr3-1.cdninstagram.com/t50.2886-16/23417939_368084276983444_1496933833667248128_n.mp4" type="video/mp4"  autoPlay loop></video>
//     <img id="logo" src={logo} />
//     <Nav isNavOpen={isNavOpen} onToggle={onToggleNav} />
//   </header>

// const mapStateToProps = (state) => {
//   return {
//     isNavOpen: state.nav.isNavOpen,
//     viewport: state.viewport
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onToggleNav: () => dispatch(toggleNav())
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Header)

import React from 'react'
import { connect } from 'react-redux'
import BaseHeader from './BaseHeader'

const Header = ({ height }) =>
  <BaseHeader height={height}>
    <video preload="auto" src="i.mp4" type="video/mp4" onCanPlay={(e) => { e.target.style.opacity = 1 }} autoPlay="autoplay" playsInline loop style={{ opacity: 0, transition: 'opacity 1s' }}></video>
  </BaseHeader>

const mapStateToProps = (state) => {
  return {
    height: state.viewport[0]
  }
}

export default connect(mapStateToProps, () => {})(Header)