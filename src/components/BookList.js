import React from "react"

import HotTags from "./HotTags"
import BookItem from "./BookItem"

import books from "../books.json"

function BookRowsRender() {
  const c = 4
  var rows = []

  for (let i = 0; i < books.length; i += c) {
    const row = books.slice(i, i + c)
    const bookRow = row.map((item, i) => (
      <BookItem
        key={i}
        title={item.title}
        author={item.author}
        img={item.img}
        pdf={item.pdf}
        star={item.star}
        size={item.size}
        caption={item.caption}
      />
    ))
    rows.push(bookRow)
  }

  const bookRows = rows.map((row, i) => (
    <div key={i} className="tile is-ancestor">
      {row}
    </div>
  ))
  return bookRows
}

export default class BookList extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <HotTags />
          <BookRowsRender />
        </div>
      </section>
    )
  }
}
