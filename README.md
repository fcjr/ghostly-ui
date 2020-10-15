# Ghostly UI
A Shared Component Library for Ghostery React Components

## Demo

You can view available components via storybook.js by running:

`yarn storybook`

## Install

`yarn add ghostly-ui`

## Useage

```js
import React, { Component } from "react";

import "ghostly-ui/dist/index.css";

import { TextInput } from "ghostly-ui";

class MyTextInput extends Component {
  render() {
    return (
      <TextInput
        placeholder='name@example.com'
      />
    );
  }
}
```
