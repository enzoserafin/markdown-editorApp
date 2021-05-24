import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ isSaving, handleRemove }) => (
    <header className='editor-header'>
        <p className='save-message'>
            {isSaving ? 'Salvando...' : 'Salvo!'}
        </p>

        <button onClick={handleRemove} className='button-remove'>Remover</button>
    </header>
)

Header.propTypes = {
    isSaving: PropTypes.bool.isRequired,
    handleRemove: PropTypes.func.isRequired,
}

export default Header