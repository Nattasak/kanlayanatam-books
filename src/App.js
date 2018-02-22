import React from "react"
import Loadable from "react-loadable"
import { BackTop } from "antd"

import Loading from "./components/Loading"

import "./App.css"

const LoadableBookList = Loadable({
  loader: () => import("./components/BookList"),
  loading: Loading,
  delay: 200,
  timeout: 10000
})

export default class App extends React.Component {
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
        <LoadableBookList />
        <BackTop />
      </div>
    )
  }
}
