import React from "react"

import BookItem from "./BookItem"

import books from "../books.json"

export default class BookList extends React.Component {
  render() {
    /*const listBooks = books.map((item, index) => (
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
    ))*/

    // console.log(listBooks)
    // console.log(books)
    return (
      <section className="section">
        <div className="container">
          {/* <div>{listBooks}</div> */}
          <div className="tile is-ancestor">
            <BookItem
              title={books[0].title}
              author={books[0].author}
              star={books[0].star}
              img={books[0].img}
              pdf={books[0].pdf}
              size={books[0].size}
              caption={books[0].caption}
            />

            <BookItem
              title={books[1].title}
              author={books[1].author}
              star={books[1].star}
              img={books[1].img}
              pdf={books[1].pdf}
              size={books[1].size}
              caption={books[1].caption}
            />

            <BookItem
              title={books[2].title}
              author={books[2].author}
              star={books[2].star}
              img={books[2].img}
              pdf={books[2].pdf}
              size={books[2].size}
              caption={books[2].caption}
            />
          </div>

          <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
              <div className="tile">
                <BookItem
                  title={books[3].title}
                  author={books[3].author}
                  star={books[3].star}
                  img={books[3].img}
                  pdf={books[3].pdf}
                  size={books[3].size}
                  caption={books[3].caption}
                />

                <BookItem
                  title={books[4].title}
                  author={books[4].author}
                  star={books[4].star}
                  img={books[4].img}
                  pdf={books[4].pdf}
                  size={books[4].size}
                  caption={books[4].caption}
                />
              </div>

              <BookItem
                title={books[5].title}
                author={books[5].author}
                star={books[5].star}
                img={books[5].img}
                pdf={books[5].pdf}
                size={books[5].size}
                caption={books[5].caption}
              />
            </div>

            <BookItem
              title={books[6].title}
              author={books[6].author}
              star={books[6].star}
              img={books[6].img}
              pdf={books[6].pdf}
              size={books[6].size}
              caption={books[6].caption}
            />
          </div>

          <div className="tile is-ancestor">
            <BookItem
              title={books[7].title}
              author={books[7].author}
              star={books[7].star}
              img={books[7].img}
              pdf={books[7].pdf}
              size={books[7].size}
              caption={books[7].caption}
            />

            <BookItem
              title={books[8].title}
              author={books[8].author}
              star={books[8].star}
              img={books[8].img}
              pdf={books[8].pdf}
              size={books[8].size}
              caption={books[8].caption}
            />
          </div>
        </div>
      </section>
    )
  }
}
