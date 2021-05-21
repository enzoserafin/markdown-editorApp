import React, { Component } from 'react'
import marked from 'marked'
import MarkDownEditor from '../../components/markdown-editor'

import './style.css'

import('highlight.js').then((hljs) => {
  marked.setOptions({
    highlight: (code, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(lang, code).value
      }
      return hljs.highlightAuto(code).value
    }
  })
})

class App extends Component {
  constructor() {
    super()
    this.state = { value: '' }

    this.handleChange = (e) => {
      this.setState({ value: e.target.value })
    }

    this.handleSave = (value) => {
      localStorage.setItem('md', this.state.value)
    }

    this.getMarkup = () => {
      return { __html: marked(this.state.value) }
    }
  }

  componentDidMount() {
    console.log('Executou o componente didfuckingmout')
    const value = localStorage.getItem('md')
    this.setState({ value })
  }

  render() {
    return (
      <MarkDownEditor
        value={this.state.value}
        handleChange={this.handleChange}
        handleSave={this.handleSave}
        getMarkup={this.getMarkup}
      />
    )
  }
}

export default App;
