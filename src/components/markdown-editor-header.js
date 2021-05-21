import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ onSave }) => (
    <header className='editor-header'>
        <button onClick={onSave} className='save'>Salvar</button>
    </header>
)

Header.ropTypes = {
    handleSave: PropTypes.func.isRequired,
}

export default Header