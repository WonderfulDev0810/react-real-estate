import React, { Component} from 'react'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Mads'
    }
  }
  render () {
    return (<header>
        <div className="logo"> Logo </div>

        <nav>
          <a href="#">Create adds</a>
          <a href="#">About us</a>
          <a href="#">Log in</a>
          <a href="#" className="register-btn"> Register </a>
        </nav>

      </header>
    )

  }
}
