import React, { Component } from "react"
import { BackTop } from "antd"

import BookList from "./components/BookList"

import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookList />
        <BackTop />
      </div>
    )
  }
}

export default App
