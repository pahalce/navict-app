import React, { useState } from 'react'

interval = 1000
const ChangingProgressProvider = (values)  {

  state = {
    valuesIndex: 0
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        valuesIndex: (this.state.valuesIndex + 1) % this.props.values.length
      })
    }, this.props.interval)
  }

  render() {
    return this.props.children(this.props.values[this.state.valuesIndex])
  }
}

export default ChangingProgressProvider
