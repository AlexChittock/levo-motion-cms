import React from 'react'

import ShortHeader from '../components/ShortHeader'
import Helmet from 'react-helmet'

import TimeTable from '../components/TimeTable'

export default () =>
  <div className="page">
    <ShortHeader title="Timetable" />
    <div className="page__wrapper">
      <Helmet>
        <title>Timetable</title>
      </Helmet>
      <article className="page__content" style={{
        overflow: 'auto'
      }}>
        <TimeTable/>
      </article>
    </div>
  </div>
