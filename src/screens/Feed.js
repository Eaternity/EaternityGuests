import Expo, { Constants } from "expo";
import React, { Component } from "react";
import { Text, View, ScrollView, Image, StyleSheet } from "react-native";
import { List, ListItem, Button } from "react-native-elements";
import { screens } from "../config/data";

class Feed extends Component {
  onLearnMore = screen => {
    this.props.navigation.navigate("Details", { ...screen });
  };

  handleSettingsPress = () => {
    // this.props.navigation.navigate("Home");
    this.props.navigation.goBack(null);
  };

  handleSettingsPress2 = () => {
    this.props.navigation.navigate("HTMLDemo");
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={pic}
            style={{ width: 205, height: 275, marginBottom: 40, marginTop: 40 }}
          />
          <Text
            style={{
              fontSize: 40,
              textAlign: "center",
              margin: 10
            }}
          >
            Wir retten das Klima.
          </Text>
          <Text
            style={{
              marginBottom: 40,
              fontSize: 18,
              textAlign: "center"
            }}
          >
            Finde heraus wie und warum.
          </Text>
        </View>
        <List>
          {screens.map(screen => (
            <ListItem
              key={screen.id}
              avatar={{ uri: screen.picture.thumbnail }}
              title={screen.title.toUpperCase()}
              subtitle={screen.subtitle}
              onPress={() => this.onLearnMore(screen)}
            />
          ))}
        </List>
        <Button
          buttonStyle={{
            backgroundColor: "#d0753b",
            borderRadius: 10,
            marginTop: 40
          }}
          textStyle={{ textAlign: "center" }}
          onPress={this.handleSettingsPress}
          title={`Zurück zum Eingangsbildschirm`}
        />

        <Button
          buttonStyle={{
            backgroundColor: "#d0753b",
            borderRadius: 10,
            marginTop: 40
          }}
          textStyle={{ textAlign: "center" }}
          onPress={this.handleSettingsPress2}
          title={`Zur HTML Demo`}
        />
      </ScrollView>
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

export default Feed;
