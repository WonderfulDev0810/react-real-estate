/* eslint jsx-quotes: ["error", "prefer-double"] */
/* eslint-disable react/self-closing-comp */
import React, { Component} from 'react'

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Mads'
    }
  }
  render () {
    return (<section className="listings">
      <section className="search-area">
        <input type="text" name="search" />
      </section>
      <section className="sortby-area">
        <div>399 results found</div>
        <div className="sort-options">
          <select name="sortby" className="sortby">
            <option value="price-asc"> Higest Price </option>
            <option value="price-dsc"> Lowest Price </option>
          </select>
        </div>
      </section>
      <div className="view">
        AAA
        <i className="fa fa-th-list" aria-hidden="true"> </i>
        <i className="fa fa-th" aria-hidden="true"> </i>
      </div>

      <section className="listings-results">
        <div className="listing">BBB</div>
        <div className="listing-img">
          <span className="Address">Address</span>
          <div className="details">
            <div className="user-img"> </div>
            <div className="user-details">
              <span className="user-name">Tom Jones</span>
              <span className="post-date">08/12/2019</span>
            </div>
            <div className="listing-details">
              <div className="floor-spacing"> 1000 ft&sup2;<i className="fa fa-bed" aria-hidden="true"> </i></div>
              <i className="fa fa-bed" aria-hidden="true"> </i>
              <span>3 bedrooms</span>
            </div>
          </div>
        </div>
      </section>1

      <section className="pageination">
      </section>

      <section className="listings-results">
      </section>

      <section className="pageination">
      </section>

    </section>
    )
  }
}
