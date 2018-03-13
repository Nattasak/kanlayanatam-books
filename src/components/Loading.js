import React from 'react'
import { Spin } from 'antd'

function LoadingComponent(props) {
  if (props.error) {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Error!</h1>
        </div>
      </section>
    )
  } else if (props.timedOut) {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Taking a long time...</h1>
        </div>
      </section>
    )
  } else if (props.pastDelay) {
    // When the loader has taken longer than the delay
    return (
      <section className="section">
        <div className="container has-text-centered">
          <Spin />
        </div>
      </section>
    )
  } else {
    // When the loader has just started
    return null
  }
}

export default LoadingComponent
