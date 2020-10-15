import React from 'react';

import TextInput from './TextInput';

export default {
  title: 'Inputs/FormInputs/TextInput',
  component: TextInput,
};

const Template = (args) => <TextInput {...args} />;

export const Email = Template.bind({});
Email.args = {
    label: "Email",
    placeholder: "name@email.com",
};

export const EmailPopulated = Template.bind({});
EmailPopulated.args = {
    label: "Email",
    placeholder: "name@email.com",
    value: "email@example.com"
};
