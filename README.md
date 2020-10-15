# Ghostly UI
A Shared React Component Library for Ghostery Products

## Demo

You can view available components via storybook.js by running:

`yarn storybook`

## Install

`yarn add ghostly-ui`

## Usage

```js
import React, { Component } from "react";

import "ghostly-ui/dist/index.css";

import { TextInput } from "ghostly-ui";

class MyTextInput extends Component {
  render() {
    return (
      <TextInput
        label='email'
        placeholder='name@example.com'
        onChange={(value) => console.log(value)}
      />
    );
  }
}
```
