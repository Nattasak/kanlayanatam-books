import React from "react"
import chunk from "lodash.chunk"
import flattenDeep from "lodash.flattendeep"
import uniq from "lodash.uniq"
import { Tag } from "antd"

import BookItem from "./BookItem"

import books from "../books.json"

const CheckableTag = Tag.CheckableTag
const tagsFromServer = uniq(books.map(b => b.author))

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

function BooksRowsRender({ authors }) {
  let data = books

  if (authors.length) {
    const booksFilterByAuthor = authors.map(a => {
      return books.filter(b => b.author === a)
    })
    data = flattenDeep(booksFilterByAuthor)
  }

  ///////////////////////////////////////////////////
  // before chunk: [ {}, {}, {}, {}, {}, {} ]
  // how to render?: map item (obj) ได้เลย!

  // after chunk: [ [{}, {}], [{}, {}], [{}, {}] ]
  // how to render?: map ทีละก้อน (arr) -> แล้วค่อย map item (obj) ในแต่ละก้อน

  const booksChunk = chunk(data, 4)

  const result = booksChunk.map((row, i) => {
    const booksRow = row.map((b, i) => (
      <BookItem
        key={i}
        title={b.title}
        author={b.author}
        img={b.img}
        pdf={b.pdf}
        caption={b.caption}
        star={b.star}
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
  state = {
    selectedTags: []
  }

  handleTagsChange(tag, checked) {
    const { selectedTags } = this.state
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter(t => t !== tag)
    this.setState({ selectedTags: nextSelectedTags })
  }

  render() {
    const { selectedTags } = this.state
    return (
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: 35 }}>
            <h3 style={{ marginRight: 8, display: "inline" }}>Author:</h3>
            {tagsFromServer.map(tag => (
              <CheckableTag
                key={tag}
                checked={selectedTags.indexOf(tag) > -1}
                onChange={checked => this.handleTagsChange(tag, checked)}
              >
                {tag}
              </CheckableTag>
            ))}
          </div>
          <BooksRowsRender authors={selectedTags} />
        </div>
      </section>
    )
  }
}
