import React, { Component } from "react"
import { BackTop } from "antd"

import "./App.css"

import BookList from "./components/BookList"

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
