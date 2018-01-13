import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Header from '../components/Header'

import { connect } from 'react-redux'

import './index.less'

const TemplateWrapper = ({ isNavOpen, children }) => (
  <div className={isNavOpen ? 'template--inactive' : ''}>
    <Header />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

const mapStateToProps = (state) => {
  return {
    isNavOpen: state.nav.isNavOpen    
  }
}

export default connect(mapStateToProps, () => ({}))(TemplateWrapper)