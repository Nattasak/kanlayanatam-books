import React from "react"

import HotTags from "./HotTags"
import BookItem from "./BookItem"

import books from "../books.json"

function BookList() {
  var rows = []
  const col = 4

  for (let i = 0; i < books.length; i += col) {
    const row = books.slice(i, i + col)

    const listBooks = row.map((item, index) => (
      <BookItem
        key={index}
        title={item.title}
        author={item.author}
        img={item.img}
        pdf={item.pdf}
        star={item.star}
        size={item.size}
        caption={item.caption}
      />
    ))
    rows.push(listBooks)
  }

  const show = rows.map((row, index) => (
    <div key={index} className="tile is-ancestor">
      {row}
    </div>
  ))

  return show
}

export default () => {
  return (
    <section className="section">
      <div className="container">
        <HotTags />
        <BookList />
      </div>
    </section>
  )
}
