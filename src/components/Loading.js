import React from "react"
import { Spin } from "antd"

function LoadingComponent(props) {
  if (props.error) {
    // When the loader has errored
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Error!</h1>
        </div>
      </section>
    )
  } else if (props.timedOut) {
    // When the loader has taken longer than the timeout
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Taking a long time...</h1>
        </div>
      </section>
    )
    return <div />
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
