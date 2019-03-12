import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  render () {
    return ( <header>
      <div> Logo </div>

      <nav>
        <a href="#">create adds</a>
        <a href="#">about us</a>
        <a href="#">log in</a>
        <a href="#" className="register-btn"> Register </a>
      </nav>

      </header>


    )

  }
}
