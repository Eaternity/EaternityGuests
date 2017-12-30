import Expo, { Constants } from "expo";
import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Platform
} from "react-native";
import { Button, List, ListItem } from "react-native-elements";

class BounceImage extends Image {
  constructor(props) {
    super(props);
    this.state = { showText: true };

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : " ";
    return (
      <Image
        source={pic}
        style={{ width: 195, height: 225, marginBottom: 100 }}
      />
    );
  }
}

class Home extends Component {
  handleSettingsPress = () => {
    this.props.navigation.navigate("Feed");
  };
  render() {
    return (
      <View style={styles.container}>
        <BounceImage />

        <Button
          buttonStyle={{ backgroundColor: "#d0753b", borderRadius: 10 }}
          textStyle={{ textAlign: "center" }}
          onPress={this.handleSettingsPress}
          title={`Touch to start`}
        />
      </View>
    );
  }
}

let pic = {
  uri: "http://www.eaternity.org/img/professional/climate-friendly.png"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1"
  }
});

export default Home;
