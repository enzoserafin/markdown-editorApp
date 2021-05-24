import React from 'react'
import PropTypes from 'prop-types'
import './button.css'

const Button = ({ onClick, kind, children }) => (
    <button onClick={onClick} className={`button ${kind ? '-' + kind : ''}`}>
        {children}
    </button>
)

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    kind: PropTypes.oneOf(['success', 'danger']),
    children: PropTypes.node.isRequired,
}

export default Button