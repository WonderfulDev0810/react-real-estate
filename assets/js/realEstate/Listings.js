import React, { Component} from 'react'

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Mads'
    }
  }
  render () {
    return ( <section className="listings">
        <section className="search-area">
          <input type="text" name="search" />

        </section>


        <section className="sortby-area">
        <div>399 results found</div>
          <div className="sort-options">
            <select name="sortby" className="sortby">
              <option value="price asc"> Higest Price </option>
              <option value="price dsc"> Lowest Price </option>
            </select>
            <div className="view"> test</div>
          </div>
        </section>


        <section className="listings-results">
        </section>

      <section className="pageination">
        </section>


    )
  }
}

