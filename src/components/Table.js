import React, { Component } from 'react'
import { render } from 'react-dom'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const getRowLabels = (table, ignoreFirst = true) => Object.keys(table.rows).map(i => table.rows[i].cells[0].innerText).slice(ignoreFirst ? 1 : 0)
const getColumnLabels = (table, ignoreFirst = true) => Object.keys(table.rows[0].cells).map(i => table.rows[0].cells[i].innerText).slice(ignoreFirst ? 1 : 0)
const getRowsForColumn = (table, column, ignoreFirst = true) => Object.keys(table.rows).map(i => table.rows[i].cells[column + (ignoreFirst ? 1 : 0)].innerText).slice(ignoreFirst ? 1 : 0)

const initAll = () => Array.prototype.slice.call(document.querySelectorAll('table')).map(init)

const init = (elem) => {
  // render(<MobileTable sourceTable={elem} />, elem)
  // render(<LiveTable table={elem} />, elem)
}

const LiveTable = ({ table }) => 
  <Table>
    <TableHead>
      <TableRow>
        {[].slice.call(table.rows[0].cells, 0).map(cell => <TableCell>{cell.innerText}</TableCell>)}
      </TableRow>
    </TableHead>
    <TableBody>
      {Object.keys(table.rows).slice(1).map(row => <TableRow>{[].slice.call(table.rows[row].cells, 0).map(cell => <TableCell>{cell.innerText}</TableCell>)}</TableRow>)}
    </TableBody>
  </Table>

// class MobileTable extends Component {

//   constructor() {
//     super()

//     this.state = {
//       selected: 0
//     }
//   }

//   setColumn(index) {
//     this.setState({
//       selected: index
//     })
//   }

//   render() {
//     // const rows = getRowLabels(this.props.sourceTable)
//     // const columns = getColumnLabels(this.props.sourceTable)
//     // return <div>
//     //   <ul>
//     //     {columns.map((label, i) => <li onClick={() => this.setColumn(i)} key={'col_' + i}>{label}</li>)}
//     //   </ul>
//     //   <ul>
//     //     {getRowsForColumn(this.props.sourceTable, this.state.selected).map((label, i) => <li key={'row_' + i}>{rows[i]} {label}</li>)}
//     //   </ul>
//     // </div>
//   }

// }

export default initAll