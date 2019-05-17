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
      listingsData,
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elevator: false,
      finished_basement: false,
      gym: false,
      swimming_pool: false,
      filteredData: listingsData
    }
  this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
  }
  change(event){
    var name = event.target.name
    var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value

    this.setState({
      [name] : value
    }, () => {
      console.log(this.state)
      this.filteredData()
    })
  }

  filteredData() {
    var newData = this.state.listingsData.filter((item) => {
      return item.price >= this.state.min_price && item.price <= this.state.max_price && item.floorSpace >= this.state.min_floor_space && item.floorSpace <= this.state.max_floor_space
    })
    this.setState({
      filteredData: newData
    })
  }

  render () {
    console.log(this.state.listingsData)
    return (<div>
      <Header />
      <section id="content-area">
        <Filter change={this.change} globalState={this.state} />
        <Listings listingsData={this.state.filteredData} />
      </section>
    </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
