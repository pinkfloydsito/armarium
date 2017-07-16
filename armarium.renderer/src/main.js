import React from "react"
import injectTapEventPlugin from "react-tap-event-plugin"
import PropTypes from "prop-types"
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from "material-ui/Table"
import IconButton from "material-ui/IconButton"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

injectTapEventPlugin()

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: props.products,
      selectedProduct: {
        id: -1,
      },
    }
    this.handleRowClick = this.handleRowClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.onCellClick = this.onCellClick.bind(this)
  }

  componentDidMount() {
  }

  handleDelete(event) {
  }

  onCellClick(row, column, event) {
      console.log(event.target)
        this.setState({
          selectedProduct: event.target.getAttribute("data-key"),
        })
    switch (column) {
      case 0: {
        break
      }
      case 1: {
        break
      }
      case 2: {
        break
      }
      case 3: {
        break
      }
      case 4: { //delete case...
        this.setState({
          selectedProduct: event.target.getAttribute("data-key"),
        })
        break
      }
      default:
        break
    }
  }

  handleRowClick(e) {
    console.info(e.target)
    console.log(this)
  }

  render() {
    const products = this.state.products
    const tbProducts = products.map(p => (
	    <TableRow selectable={false}  key={p.id} onClick={this.handleRowClick} >
        <TableRowColumn>{p.name}</TableRowColumn>
        <TableRowColumn>{p.regular_price}</TableRowColumn>
        <TableRowColumn>{p.date_created}</TableRowColumn>
        <TableRowColumn>
          <IconButton data-key={p.id} iconClassName="material-icons" tooltip="editar?" > build </IconButton>
        </TableRowColumn>
        <TableRowColumn>
          <IconButton data-key={p.id} iconClassName="material-icons" tooltip="eliminar?" onTouchTap={this.handleDelete}> delete </IconButton>
        </TableRowColumn>
      </TableRow>
       ))
    return (
      <MuiThemeProvider>
        <div>
          <Table onCellClick={this.onCellClick}>
            <TableHeader adjustForCheckbox={false}  displaySelectAll={false}>
            <TableRow selectable={false}>
                <TableHeaderColumn>Nombre</TableHeaderColumn>
                <TableHeaderColumn>Precio Regular</TableHeaderColumn>
                <TableHeaderColumn>Fecha de creaci&oacute;n</TableHeaderColumn>
                <TableHeaderColumn />
                <TableHeaderColumn />
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {tbProducts}
            </TableBody>
          </Table>
        </div>
      </MuiThemeProvider>
    )
  }

}

Main.propTypes = {
  products: PropTypes.array.isRequired,
}
