import React, { Component } from "react"
import { BackTop } from "antd"

import BookList from "./components/BookList"

import "./App.css"

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <a href="http://nattasak.github.io/kanlayanatam-books/">
                <h1 className="title">ชมรมกัลยาณธรรม</h1>
                <h2 className="subtitle">Dhamma books</h2>
              </a>
            </div>
          </div>
        </section>
        <BookList />
        <BackTop />
      </div>
    )
  }
}
