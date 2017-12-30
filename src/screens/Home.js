import Expo, { Constants } from "expo";
import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Platform,
  Animated,
  Easing
} from "react-native";
import { Button, List, ListItem } from "react-native-elements";

class BounceImage extends Component {
  state = {
    xPosition: new Animated.Value(50),
    scale: new Animated.Value(1) // Initial value for opacity: 0
  };

  componentDidMount() {}

  constructor(props) {
    super(props);

    // Toggle the state every second
    setInterval(() => {
      Animated.sequence([
        Animated.parallel([
          Animated.timing(this.state.xPosition, {
            toValue: 200,
            duration: 400,
            easing: Easing.back()
          }),
          Animated.timing(this.state.scale, {
            toValue: 0.2,
            duration: 400,
            easing: Easing.back()
          })
        ]),
        Animated.parallel([
          Animated.timing(this.state.xPosition, {
            toValue: 50,
            duration: 400,
            easing: Easing.bounce
          }),
          Animated.timing(this.state.scale, {
            toValue: 1,
            duration: 400,
            easing: Easing.bounce
          })
        ])
        // Animated.spring(this.state.xPosition, {
        //   toValue: 80
        // })
      ]).start(); // start the sequence group
    }, 40000);
  }

  render() {
    let { xPosition } = this.state;
    let { scale } = this.state;
    // let display = this.state.showText ? this.props.text : " ";
    return (
      <Animated.View // Special animatable View
        style={{
          ...this.props.style,
          // animation: waggle 1s 3s forwards ease-outm,
          marginBottom: xPosition,
          transform: [
            { scale: scale },
            // { rotateY: xPosition },
            { perspective: 1000 } // without this line this Animation will not render on Android while working fine on iOS
          ]
        }}
      >
        {this.props.children}
      </Animated.View>
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
        <BounceImage
          style={{
            width: 240,
            height: 120,
            backgroundColor: "#316491",
            borderRadius: 10
          }}
        >
          <Text
            style={{
              fontSize: 28,
              textAlign: "center",
              margin: 10,
              color: "#fff"
            }}
          >
            {/* Today's menus: 30% LESS CO₂ emissions. */}
            Heutige Menus: 30% WENIGER CO₂ Emissionen
          </Text>
        </BounceImage>
        <Image
          source={pic}
          style={{ width: 245, height: 300, marginBottom: 100 }}
        />
        <Button
          buttonStyle={{ backgroundColor: "#d0753b", borderRadius: 10 }}
          textStyle={{ textAlign: "center" }}
          onPress={this.handleSettingsPress}
          // title={`Touch to learn more`}
          title={`Berühren den Bildschirm\n um mehr herauszufinden.`}
        />
      </View>
    );
  }
}

let pic = {
  uri:
    "http://www.eaternity.org/assets/2015-11-05-Eaternity_logo_set/Eaternity-Award-big-DE.png"
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
