import React, { Component } from "react";
import { ScrollView, Dimensions, Image, StyleSheet, View } from "react-native";
import { Tile, List, ListItem } from "react-native-elements";
import HTML from "react-native-render-html";

// function TileExtra(props) {
//   if (typeof props.picture.large !== "undefined") {
//     return (
//       <Tile
//         imageSrc={props.picture.large}
//         featured
//         title={props.title.toUpperCase()}
//         caption={props.subtitle}
//       />
//     );
//   }
//   return (
//     <Tile featured title={props.title.toUpperCase()} caption={props.subtitle} />
//   );
// }

class ScreenDetail extends Component {
  render() {
    const {
      picture,
      title,
      subtitle,
      htmlContent,
      content
    } = this.props.navigation.state.params;

    return (
      <ScrollView>
        {/* <TileExtra
          imageSrc={picture.large}
          featured
          title={title.toUpperCase()}
          caption={subtitle}
        /> */}
        <View
          style={{
            backgroundColor: "#ffffff",
            paddingBottom: 0,
            paddingTop: 0
          }}
        >
          {content}
          <HTML
            html={htmlContent}
            imagesMaxWidth={Dimensions.get("window").width}
            tagsStyles={{
              p: {
                padding: 30,
                paddingLeft: 60,
                paddingRight: 100,
                fontSize: 20,
                fontWeight: "300"
              },
              h1: {
                fontSize: 30,
                fontWeight: "500",
                paddingLeft: 60,
                paddingRight: 60,
                paddingTop: 30
              }
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

export default ScreenDetail;
