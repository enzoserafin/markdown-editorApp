import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'
import SaveMessage from '../Save-Message'

const Header = ({ isSaving, handleRemove, handleCreate }) => (
    <header className='editor-header'>

        <SaveMessage isSaving={isSaving} />

        <Button onClick={handleCreate} kind='success'>
            Criar novo
        </Button>

        <Button onClick={handleRemove} kind='danger'>
            Remover
        </Button>
    </header>
)

Header.propTypes = {
    handleRemove: PropTypes.func.isRequired,
    handleCreate: PropTypes.func.isRequired,
}

export default Header