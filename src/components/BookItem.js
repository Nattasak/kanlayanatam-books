import React from "react"
import { Icon, Rate, Tag, Tooltip } from "antd"

import "./BookItem.css"

export default class BookItem extends React.Component {
  render() {
    const { author, children, img, pdf, star, title } = this.props
    return (
      <article className="tile is-child box">
        <figure className="image">
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="hvr-rotate"
          >
            <img src={img} alt={title} />
          </a>
        </figure>
        <Rate disabled value={star} />
        <div className="is-pulled-right">
          <a href={pdf} target="_blank" rel="noopener noreferrer">
            <Tooltip title="PDF">
              <Icon type="download" style={{ fontSize: 27 }} />
            </Tooltip>
          </a>
        </div>
        <div className="tag-wrap">
          <Tag>{author}</Tag>
        </div>
        <div className="content">
          <p>{children}</p>
        </div>
      </article>
    )
  }
}
