import React from 'react'

import './secondary-content.less'

const SecondaryContent = ({ children, background }) =>
  <section className='secondary__content' style={
    {
      backgroundImage: 'url('+background+')'
    }
  }>
    {children}
</section>

export default SecondaryContent;