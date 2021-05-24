import React from 'react'
import Button from './index'

export default {
    title: 'Button',
    component: Button,
    decorators: [Story => <div style={{ display: 'flex', height: 40 }}><Story /></div>],
}

const Template = args => <Button {...args} />;

export const Novo = Template.bind({})

Novo.args = {
    onClick: () => null,
    kind: 'success',
    children: 'criar novo'
}

export const Remover = Template.bind({})

Remover.args = {
    onClick: () => null,
    kind: 'danger',
    children: 'remover'
}