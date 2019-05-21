import React, { Component} from 'react'
/* eslint jsx-quotes: ["error", "prefer-double"] */
/* eslint-disable react/self-closing-comp */

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Mads'
    }
    this.cities = this.cities.bind(this)
  }
  componentWillMount(){
    this.props.populateAction()
  }

  cities() {
    if(this.props.globalState.populateFormsData.cities !=
      undefined) {
      var { cities } = this.props.globalState.populateFormsData
      console.log(cities)
      return cities.map((item) => {
        return(
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }

  homeTypes() {
    if(this.props.globalState.populateFormsData.homeTypes !=
      undefined) {
      var { homeTypes } = this.props.globalState.populateFormsData
      console.log(homeTypes)
      return homeTypes.map((item) => {
        return(
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }
  bedrooms() {
    if(this.props.globalState.populateFormsData.bedrooms !=
      undefined) {
      var { bedrooms } = this.props.globalState.populateFormsData
      console.log(bedrooms)
      return bedrooms.map((item) => {
        return(
          <option key={item} value={item}>{item} + BR</option>
        )
      })
    }
  }
  render () {
    return (<section id="filter">
      <div className="inside">
        <h4>Filter</h4>
        <label htmlFor="city">City</label>
        <select name="city" className="filters city" onChange={this.props.change}>
          <option value="All">All</option>
          {this.cities()}
          {/*<option value="Zürich">Zürich</option>*/}
          {/*<option value="Zug">Zug</option>*/}
          {/*<option value="Basel">Basel</option>*/}
          {/*<option value="Widikon">Widikon</option>*/}
        </select>
        <label htmlFor="homeType">Home Type </label>
        <select name="homeType" className="filters homeType" onChange={this.props.change}>
          {this.homeTypes()}
          {/*<option value="All">All home types</option>*/}
          {/*<option value="Villa">Villa</option>*/}
          {/*<option value="Apartment">Apartment</option>*/}
          {/*<option value="Room">Room</option>*/}
        </select>
        <label htmlFor="bedrooms">Bedrooms </label>
        <select name="bedrooms" className="fitlers bedrooms" onChange={this.props.change}>
          {this.bedrooms()}
          {/*<option value="0">0+</option>*/}
          {/*<option value="1">1+ BR</option>*/}
          {/*<option value="2">2+ BR</option>*/}
          {/*<option value="3">3+ BR</option>*/}
          {/*<option value="4">4+ BR</option>*/}
        </select>
        <div className="filters price">
          <span className="title">Price</span>
          <input type="text" name="min_price" className="min_price" onChange={this.props.change} value={this.props.globalState.min_price} />
          <input type="text" name="max_price" className="max_price" onChange={this.props.change} value={this.props.globalState.max_price} />
        </div>
        <div className="filters floor-space">
          <span className="title">Floor Space</span>
          <input type="text" name="min_floor_space" className="min_floor_space" onChange={this.props.change} value={this.props.globalState.min_floor_space} />
          <input type="text" name="max_floor_space" className="max_floor_space" onChange={this.props.change} value={this.props.globalState.max_floor_space} />
        </div>
        <div className="filters extras">
          <span className="title">
         Extras
          </span>
          <label htmlFor="extras">
            <span> Elevators</span>
            <input name="elavator" value="elavator" type="checkbox" onChange={this.props.change} />
          </label>
          <label htmlFor="extras">
            <span> Finished Basement</span>
            <input name="finished_basement" value="finished_basement" type="checkbox" onChange={this.props.change} />
          </label>
          <label htmlFor="extras">
            <span> Gym</span>
            <input name="gym" value="gym" type="checkbox" onChange={this.props.change} />
          </label>
          <label htmlFor="extras">
            <span> Swimming Pool</span>
            <input name="swimming_pool" value="swimming_pool" type="checkbox" onChange={this.props.change} />
          </label>
        </div>
      </div>
    </section>)
  }
}
