import React, { Component } from "react";
import { Root, Tabs } from "./config/router";
import KeepAwake from "react-native-keep-awake";

class App extends Component {
  render() {
    return (
      <Root>
        <KeepAwake />
      </Root>
    );
  }
}

export default App;
