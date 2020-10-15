# Ghostly UI
A Shared React Component Library for Ghostery Products

[![NPM](https://img.shields.io/npm/v/ghostly-ui.svg)](https://www.npmjs.com/package/ghostly-ui)

## Demo

View the [storybook](https://fcjr.github.io/ghostly-ui) online.

Or run it locally via:

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
