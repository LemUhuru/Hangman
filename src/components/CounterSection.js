import React, { Component } from 'react'

class CounterSection extends Component {
  render() {
    const { totalTries } = this.props

    return (
      <div className="counter-secton">
        <span className="counter-section--num">{totalTries}</span>
      </div>
    )
  }
}


export default CounterSection
