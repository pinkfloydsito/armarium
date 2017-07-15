//Componente de ejemplo que sirve como base para server rendering
import React from 'react'

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        click: false
    }
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick() {
    this.setState({ click: true })
  }
  render() {
    if (this.state.click) {
        return <div>
            <p>Clicked</p>
        </div>
    } else {
        return <div>
            <button className="btn" onClick={this.handleOnClick}>Click me</button>
        </div>
    }
  }
}
