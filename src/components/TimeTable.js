import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const range = (min, max) => Array(max - min).fill(0).map((_, i) => min + i) 

const padNum = (num) => num < 10 ? '0' + num : String(num)

const decimalToTime = (dec) => Math.floor(dec) + ':' + padNum((dec % 1) * 60)

const bounds = [6, 21]

const cal = []
const taken = []

// Assume no overlap
// const setEvent = (day, start, end, label) => {
//   cal[start] || (cal[start] = [])
//   cal[start][day] || (cal[start][day] = [])
//   cal[start][day] = {
//     label,
//     end
//   }
//   range(start, end).map(i => {
//     (taken[i] || (taken[i] = []) && taken[i])[day] = true
//   })
// }

// const getEvent = (day, start) => ((cal[start] || [])[day] || {label:'', end: 0, isEmpty: true})

// const isOverlapping = (day, time) => taken[time] && taken[time][day]

// const isEventNearTime = (start) => cal[start] || cal[start - 1] || cal[start + 1]

const setEvent = (day, start, end, label, link = false) => cal.push({ day, start, end, label, link })

const getEvent = (day, start) => cal.reduce((res, evt) => evt.day == day && evt.start == start ? evt : res, { isEmpty: true })

const isOverlapping = (day, start) => cal.some(evt => evt.day == day && evt.start <= start && evt.end > start)

const isEventNearTime = (start) => {
  let res = cal.some(evt => evt.start - 1 <= start && evt.end >= start)
  return res
}



setEvent(1, 6, 7, "Morning Yoga 4 ALL", "classes/early-morning-yoga")
setEvent(2, 19, 20, "Mid Week Mobility 19:20–20:05",  "classes/mid-week-mobility")
setEvent(3, 6, 7, "Morning Yoga 4 ALL", "classes/early-morning-yoga")

setEvent(5, 9, 11, "Stretch Therapy")


const styles = theme => ({
  blank: {
    backgroundColor: '#eee',
    height: 10,
    padding: 0
  },
  blankRow: {
    height: 10
  },
  event: {
    color: '#fff',
    padding: 15,
    position: 'relative',
    '&:before': {
      backgroundColor: '#333',
      bottom: 2,
      borderRadius: 5,
      content: '""',
      display: 'block',
      left: 2,
      position: 'absolute',
      right: 2,
      top: 2,
      zIndex: -1
    }
  },
  table: {
    tableLayout: 'fixed',
    '& td, & th': {
      borderColor: '#eee',
      borderWidth: 2
    },
    [theme.breakpoints.down(768)]: {
      tableLayout: 'inherit'
    }
  },
  time: {
    border: 'none',
    padding: '5px 10px',
    textAlign: 'right',
    whiteSpace: 'nowrap',
    width: 110,
  },
  container: {
    overflow: 'auto'
  },
  href: {
    color: '#fff'
  }
})

const TimeTable = ({ classes }) =>
  <div className={classes.container}>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell className={classes.time}></TableCell>
          <TableCell>Monday</TableCell>
          <TableCell>Tuesday</TableCell>
          <TableCell>Wednesday</TableCell>
          <TableCell>Thursday</TableCell>
          <TableCell>Friday</TableCell>
          <TableCell>Saturday</TableCell>
          <TableCell>Sunday</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {range(bounds[0], bounds[1]).map(num => isEventNearTime(num) ?
          <TableRow key={num}>
            <TableCell key={num+'-_'} className={classes.time}>{decimalToTime(num)} &mdash; {decimalToTime(num+1)}</TableCell>
            {range(0, 7).map(day => (
              ({ label, end, isEmpty, link }) => isEmpty ?
                (isOverlapping(day, num) ? null : <TableCell key={num+'-'+day} />) :
                <TableCell key={num+'-'+day} className={classes.event} rowSpan={end - num}>{link ? <a className={classes.href} href={link}>{label}</a> : label}</TableCell>
              )(getEvent(day, num))
            )}
          </TableRow> :
          <TableRow key={num} className={classes.blankRow}>
            <TableCell className={classes.time}/>
            <TableCell colSpan="7" className={classes.blank}/>
          </TableRow>
        )}
      </TableBody>
    </Table>
  </div>

export default withStyles(styles)(TimeTable);