import { Icon, Rate, Tag, Tooltip } from 'antd'
import React from 'react'

import './BookItem.css'

export default class BookItem extends React.Component {
  render() {
    const { author, caption, img, pdf, star, title } = this.props
    function captionMarkup() {
      return { __html: caption }
    }
    return (
      <div className="tile is-parent is-3">
        <article className="tile is-child box">
          <figure className="image">
            <a href={pdf} target="_blank" rel="noopener noreferrer" className="hvr-rotate">
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
            <p dangerouslySetInnerHTML={captionMarkup()} />
          </div>
        </article>
      </div>
    )
  }
}
