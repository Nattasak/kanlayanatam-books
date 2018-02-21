import React from "react"
import { Tag } from "antd"

const CheckableTag = Tag.CheckableTag

const tagsFromServer = [
  "พระไพศาล วิสาโล",
  "อ.วศิน อินทสระ",
  "ปันยา",
  "เงาศิลป์ คงแก้ว"
]

export default class HotTags extends React.Component {
  state = {
    selectedTags: []
  }

  handleChange(tag, checked) {
    const { selectedTags } = this.state
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter(t => t !== tag)
    console.log("You are interested in: ", nextSelectedTags)
    this.setState({ selectedTags: nextSelectedTags })
  }

  render() {
    const { selectedTags } = this.state
    return (
      <div style={{ marginBottom: 35 }}>
        <h3 style={{ marginRight: 8, display: "inline" }}>Author:</h3>
        {tagsFromServer.map(tag => (
          <CheckableTag
            key={tag}
            checked={selectedTags.indexOf(tag) > -1}
            onChange={checked => this.handleChange(tag, checked)}
          >
            {tag}
          </CheckableTag>
        ))}
      </div>
    )
  }
}
