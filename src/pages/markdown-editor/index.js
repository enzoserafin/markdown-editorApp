import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/Header'
import Files from '../../components/Files'

const MarkDownEditor = ({ value, handleChange, getMarkup, textareaRef, files, handleOpenFile, ...props }) => (
    <section className='editor'>
        <Header {...props} handleChange={handleChange} />
        <Files files={files} handleOpenFile={handleOpenFile} />
        <textarea value={value} onChange={handleChange('value')} autoFocus ref={textareaRef} />

        <article className='view' dangerouslySetInnerHTML={getMarkup()} />
    </section>
)

MarkDownEditor.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    getMarkup: PropTypes.func.isRequired,
    textareaRef: PropTypes.func.isRequired,
}

export default MarkDownEditor