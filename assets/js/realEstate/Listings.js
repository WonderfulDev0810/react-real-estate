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
    return (<section id="listings">
      <section className="search-area">
        <input type="text" name="search" />
      </section>
      <section className="sortby-area">
        <div className="results">399 results found</div>
        <div className="sort-options">
          <select name="sortby" className="sortby">
            <option value="price-asc"> Higest Price </option>
            <option value="price-dsc"> Lowest Price </option>
          </select>
          <div className="view">
            <i className="fa fa-th-list" aria-hidden="true"> </i>
            <i className="fa fa-th" aria-hidden="true"> </i>
          </div>
        </div>
      </section>

      <section className="listings-results">
        <div className="col-md-3">
            <div className="listing">
              <div className="listing-img">
                <span className="address">Uetlibergstrasse 111</span>
                <div className="details">
                  <div className="col-md-3">
                    <div className="user-img"> </div>
                  </div>

                  <div className="col-md-9">
                    <div className="user-details">
                      <span className="user-name">Tom Jones</span>
                      <span className="post-date">08/12/2019</span>
                    </div>
                    <div className="listing-details">
                      <div className="floor-spacing">
                        <i className="fa fa-square-o" aria-hidden="true"> </i>
                        <span>1000 ft&sup2;</span>
                      </div>
                      <div className="bedrooms">
                        <i className="fa fa-bed" aria-hidden="true"> </i>
                        <span>3 bedrooms</span>
                      </div>

                      <div className="view-btn"> View Listing </div>

                    </div>
                  </div>
                </div>

              </div>
              <div className="bottom-info">
                <span className="price">$1000 /month</span>
                <span className="location"><i className="fa fa-map-marker" aria-hidden="true"> </i> Uitikon, Zürich</span>
              </div>
            </div>
        </div>

        <div className="col-md-3">
          <div className="listing">
            <div className="listing-img">
              <span className="address">Uetlibergstrasse 111</span>
              <div className="details">
                <div className="col-md-3">
                  <div className="user-img"> </div>
                </div>

                <div className="col-md-9">
                  <div className="user-details">
                    <span className="user-name">Tom Jones</span>
                    <span className="post-date">08/12/2019</span>
                  </div>
                  <div className="listing-details">
                    <div className="floor-spacing">
                      <i className="fa fa-square-o" aria-hidden="true"> </i>
                      <span>1000 ft&sup2;</span>
                    </div>
                    <div className="bedrooms">
                      <i className="fa fa-bed" aria-hidden="true"> </i>
                      <span>3 bedrooms</span>
                    </div>

                    <div className="view-btn"> View Listing </div>

                  </div>
                </div>
              </div>

            </div>
            <div className="bottom-info">
              <span className="price">$1000 /month</span>
              <span className="location"><i className="fa fa-map-marker" aria-hidden="true"> </i> Uitikon, Zürich</span>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="listing">
            <div className="listing-img">
              <span className="address">Uetlibergstrasse 111</span>
              <div className="details">
                <div className="col-md-3">
                  <div className="user-img"> </div>
                </div>

                <div className="col-md-9">
                  <div className="user-details">
                    <span className="user-name">Tom Jones</span>
                    <span className="post-date">08/12/2019</span>
                  </div>
                  <div className="listing-details">
                    <div className="floor-spacing">
                      <i className="fa fa-square-o" aria-hidden="true"> </i>
                      <span>1000 ft&sup2;</span>
                    </div>
                    <div className="bedrooms">
                      <i className="fa fa-bed" aria-hidden="true"> </i>
                      <span>3 bedrooms</span>
                    </div>

                    <div className="view-btn"> View Listing </div>

                  </div>
                </div>
              </div>

            </div>
            <div className="bottom-info">
              <span className="price">$1000 /month</span>
              <span className="location"><i className="fa fa-map-marker" aria-hidden="true"> </i> Uitikon, Zürich</span>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="listing">
            <div className="listing-img">
              <span className="address">Uetlibergstrasse 111</span>
              <div className="details">
                <div className="col-md-3">
                  <div className="user-img"> </div>
                </div>

                <div className="col-md-9">
                  <div className="user-details">
                    <span className="user-name">Tom Jones</span>
                    <span className="post-date">08/12/2019</span>
                  </div>
                  <div className="listing-details">
                    <div className="floor-spacing">
                      <i className="fa fa-square-o" aria-hidden="true"> </i>
                      <span>1000 ft&sup2;</span>
                    </div>
                    <div className="bedrooms">
                      <i className="fa fa-bed" aria-hidden="true"> </i>
                      <span>3 bedrooms</span>
                    </div>

                    <div className="view-btn"> View Listing </div>

                  </div>
                </div>
              </div>

            </div>
            <div className="bottom-info">
              <span className="price">$1000 /month</span>
              <span className="location"><i className="fa fa-map-marker" aria-hidden="true"> </i> Uitikon, Zürich</span>
            </div>
          </div>
        </div>
      </section>

      <section id="pageination">
        <ul className="pages">
          <li>Prev</li>
          <li className="active">1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>Next</li>
        </ul>
      </section>

      <section className="listings-results">
      </section>

      <section className="pageination">
      </section>

    </section>
  )
  }
  }
