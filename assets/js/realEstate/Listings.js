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
        Listings
      </section>
    )
  }
}
