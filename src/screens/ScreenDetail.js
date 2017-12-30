import React, { Component } from "react";
import { ScrollView, Dimensions } from "react-native";
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
          imageSrc={{ uri: picture.large }}
          featured
          title={title.toUpperCase()}
          caption={subtitle}
        />
        <HTML
          html={htmlContent}
          imagesMaxWidth={Dimensions.get("window").width}
        />
      </ScrollView>
    );
  }
}

export default ScreenDetail;
