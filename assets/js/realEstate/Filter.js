import React, { Component} from 'react'

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Mads'
    }
  }
  render () {
    return ( <section className="filter">
        <h4>Filter</h4>
        <select name="neighbourhood" className="filters neighbourhood">
            <option>Zürich</option>
        </select>
        <select name="housetype" className="filters neighbourhood">
          <option>Villa</option>
        </select>
        <select name="bedrooms" className="fitlers bedrooms">
          <option>6 BR</option>
        </select>
        <div className="filters price">
          <span className="title">Price</span>
          <input type="text" name="min-price" className="min-price" />
          <input type="text" name="min-price" className="max-price" />
        </div>
        <div className="filters floor-space">
          <span className="title">Floor Space</span>
          <input type="text" name="min-price" className="min-price" />
          <input type="text" name="min-price" className="max-price" />
        </div>
      </section>
    )
  }
}
