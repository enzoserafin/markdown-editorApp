import React from 'react'
import SaveMessage from './index'

export default {
    title: 'Save Message',
    component: SaveMessage,
    decorators: [Story => <div style={{ background: '#ccc' }}><Story /></div>],
}

const Template = args => <SaveMessage {...args} />;

export const isSavingNull = Template.bind({})

isSavingNull.args = {
    isSaving: null,
}

export const isSavingTrue = Template.bind({})

isSavingTrue.args = {
    isSaving: true,
}

export const isSavingFalse = Template.bind({})

isSavingFalse.args = {
    isSaving: false,
}
