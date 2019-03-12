import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  render () {
    return ( <div> <Header />
      <section>
        <filter />
        <listings />
      </section>
    </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
