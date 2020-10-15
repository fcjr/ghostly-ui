# Ghostly UI
A Shared Component Library for Ghostery React Components

## Install

`yarn add ghostly-ui`

## Example

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
