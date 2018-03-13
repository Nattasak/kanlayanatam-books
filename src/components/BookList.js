import { Tag } from 'antd'
import React from 'react'

import chunk from 'lodash.chunk'
import flattenDeep from 'lodash.flattendeep'
import uniq from 'lodash.uniq'

import BookItem from './BookItem'

import books from '../books.json'

const CheckableTag = Tag.CheckableTag

const tagsFromServer = uniq(books.map(b => b.author)).sort()

function BooksRowsRender({ authors }) {
  let booksFiltered = books

  if (authors.length) {
    const booksFilterByAuthors = authors.map(a => {
      return books.filter(b => b.author === a)
    })
    booksFiltered = flattenDeep(booksFilterByAuthors)
  }

  const booksChunk = chunk(booksFiltered, 4)

  const result = booksChunk.map((row, i) => {
    const booksRow = row.map((b, i) => (
      <BookItem key={i} title={b.title} author={b.author} img={b.img} pdf={b.pdf} caption={b.caption} star={b.star} />
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
    selectedTags: [],
  }

  handleTagsChange(tag, checked) {
    const { selectedTags } = this.state
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag)
    this.setState({ selectedTags: nextSelectedTags })
  }

  render() {
    const { selectedTags } = this.state
    return (
      <section className="section">
        <div className="container">
          <div className="tag-wrapper" style={{ marginBottom: 35 }}>
            <h3 style={{ marginRight: 20, display: 'inline' }}>เลือกนักเขียน →</h3>
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
