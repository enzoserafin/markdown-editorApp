import React from 'react'
import PropTypes from 'prop-types'
import Header from './markdown-editor-header'

const MarkDownEditor = ({ value, handleChange, handleSave, getMarkup }) => (
    <section className='editor'>
        <Header onSave={handleSave} />
        <textarea value={value} onChange={handleChange} autoFocus />

        <article className='view' dangerouslySetInnerHTML={getMarkup()} />
    </section>
)

MarkDownEditor.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSave: PropTypes.func.isRequired,
    getMarkup: PropTypes.func.isRequired,
}

export default MarkDownEditor