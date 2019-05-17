import React, { Component} from 'react'
/* eslint jsx-quotes: ["error", "prefer-double"] */
/* eslint-disable react/self-closing-comp */

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Mads'
    }
  }
  render () {
    return (<section id="filter">
      <div className="inside">
        <h4>Filter</h4>
        <select name="neighbourhood" className="filters neighbourhood" onChange={this.props.change}>
          <option value="Zürich">Zürich</option>
          <option value="Zürich 2">Zürich2</option>
        </select>
        <select name="housetype" className="filters housetype" onChange={this.props.change}>
          <option value="Villa">Villa</option>
          <option value="Apartment">Apartment</option>
          <option value="Room">Room</option>
        </select>
        <select name="bedrooms" className="fitlers bedrooms" onChange={this.props.change}>
          <option value="1">1 BR</option>
          <option value="2">2 BR</option>
          <option value="3">3 BR</option>
          <option value="4">4 BR</option>
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
