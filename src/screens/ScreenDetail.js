import React, { Component } from "react";
import { ScrollView, Dimensions, Image, StyleSheet, View } from "react-native";
import { Tile, List, ListItem } from "react-native-elements";
import HTML from "react-native-render-html";

class ScreenDetail extends Component {
  render() {
    const {
      picture,
      title,
      subtitle,
      htmlContent
    } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Tile
          imageSrc={picture.large}
          featured
          title={title.toUpperCase()}
          caption={subtitle}
        />
        <View style={{ backgroundColor: "#ffffff" }}>
          <HTML
            html={htmlContent}
            imagesMaxWidth={Dimensions.get("window").width}
            tagsStyles={{
              p: {
                padding: 30,
                paddingLeft: 60,
                paddingRight: 140,
                fontSize: 20,
                fontWeight: "300"
              }
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

export default ScreenDetail;
