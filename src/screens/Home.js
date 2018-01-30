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
import { AppLoading, Asset } from "expo";

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

class BounceImage extends Component {
  state = {
    isReady: false
  };

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require("../config/assets/APLEONA_GruneKuche_Design_EntwurfA_Wortmarke.png"),
      require("../config/assets/Report-Icon-Products.jpg"),
      require("../config/assets/Report-Icon-Certificate.jpg"),
      require("../config/assets/Report-Icon-CO2.jpg"),
      require("../config/assets/Report-Icon-Menu.jpg"),
      require("../config/assets/Report-Icon-Award.jpg")
      // require("../config/assets/problem-CO2.jpg.b64.js"),
      // require("../config/assets/info.jpg.b64.js"),
      // require("../config/assets/problem-short-CO2.jpg.b64.js"),
      // require("../config/assets/problem-only-DE.jpg.b64.js"),
      // require("../config/assets/problem-only-DE2.jpg.b64.js"),
      // require("../config/assets/solution-CO2.jpg.b64.js"),
      // require("../config/assets/app-download.jpg.b64.js"),
      // require("../config/assets/labeling.jpg.b64.js"),
      // require("../config/assets/recipes.jpg.b64.js"),
      // require("../config/assets/circle.jpg.b64.js"),
      // require("../config/assets/fallstudie.jpg.b64.js"),
      // require("../config/assets/ingredients.jpg.b64.js"),
      // require("../config/assets/symbols.jpg.b64.js"),
      // require("../config/assets/report.pdf")
    ]);

    await Promise.all([...imageAssets]);
  }

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
    }, 4000); // FIXME: remove a magnitude before release
  }

  render() {
    let { xPosition } = this.state;
    let { scale } = this.state;
    // let display = this.state.showText ? this.props.text : " ";

    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

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
            Hüpfende Information
          </Text>
        </BounceImage>
        <Image
          source={require("../config/assets/APLEONA_GruneKuche_Design_EntwurfA_Wortmarke.png")}
          style={{
            width: 531,
            height: 177,
            marginBottom: 80,
            marginTop: 40
          }}
        />
        <Button
          buttonStyle={{ backgroundColor: "#aaaaaa", borderRadius: 10 }}
          textStyle={{ textAlign: "center" }}
          onPress={this.handleSettingsPress}
          // title={`Touch to learn more`}
          title={`Tippen Sie hier\n um mehr herauszufinden.`}
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
    backgroundColor: "#e9e9ee"
  }
});

export default Home;
