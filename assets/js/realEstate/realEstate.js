import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Filter from './Filter.js'
import Listings from './Listings.js'
import listingsData from './data/listingsData.js'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Mads',
      listingsData
    }
  }
  render () {
    console.log(this.state.listingsData)
    return (<div>
      <Header />
      <section id="content-area">
        <Filter />
        <Listings />
      </section>
    </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
