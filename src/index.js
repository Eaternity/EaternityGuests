import KeepAwake from 'react-native-keep-awake'
import React, {Component} from 'react'

import {Root} from './config/router'

class App extends Component {
  render() {
    return (
      <Root>
        <KeepAwake />
      </Root>
    )
  }
}

export default App
