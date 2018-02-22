import React from "react"
import chunk from "lodash.chunk"

import HotTags from "./HotTags"
import BookItem from "./BookItem"

import books from "../books.json"

/* not use ( use new way ^^ ~ )
function BooksRowsRenderOldWay() {
  const c = 4
  var rows = []

  for (let i = 0; i < books.length; i += c) {
    const row = books.slice(i, i + c)
    const booksRow = row.map((item, i) => (
      <BookItem
        key={i}
        title={item.title}
        author={item.author}
        img={item.img}
        pdf={item.pdf}
        caption={item.caption}
        star={item.star}
      />
    ))
    rows.push(booksRow)
  }

  const booksRows = rows.map((row, i) => (
    <div key={i} className="tile is-ancestor">
      {row}
    </div>
  ))
  return booksRows
} */

function BooksRowsRender() {
  ///////////////////////////////////////////////////
  // before chunk: [ {}, {}, {}, {}, {}, {} ]
  // how to render?: map item (obj) ได้เลย!

  // after chunk: [ [{}, {}], [{}, {}], [{}, {}] ]
  // how to render?: map ทีละก้อน (arr) -> แล้วค่อย map item (obj) ในแต่ละก้อน
  ///////////////////////////////////////////////////

  const booksChunk = chunk(books, 4)

  const result = booksChunk.map((row, i) => {
    const booksRow = row.map((item, i) => (
      <BookItem
        key={i}
        title={item.title}
        author={item.author}
        img={item.img}
        pdf={item.pdf}
        caption={item.caption}
        star={item.star}
      />
    ))
    return (
      <div key={i} className="tile is-ancestor">
        {booksRow}
      </div>
    )
  })
  return result
}

export default class BookList extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <HotTags />
          <BooksRowsRender />
        </div>
      </section>
    )
  }
}
