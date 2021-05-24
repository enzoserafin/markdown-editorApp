import React from 'react'
import PropTypes from 'prop-types'

import Button from '../button/index'

const Header = ({ isSaving, handleRemove, handleCreate }) => (
    <header className='editor-header'>
        {isSaving !== null && <p className='save-message'>
            {isSaving ? 'Salvando...' : 'Salvo!'}
        </p>}

        <Button onClick={handleCreate} kind='success'>
            Criar novo
        </Button>

        <Button onClick={handleRemove} kind='danger'>
            Remover
        </Button>
    </header>
)

Header.propTypes = {
    isSaving: PropTypes.bool,
    handleRemove: PropTypes.func.isRequired,
    handleCreate: PropTypes.func.isRequired,
}

export default Header