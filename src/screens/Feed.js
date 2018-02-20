import {Constants} from 'expo'
import {List, ListItem, Button} from 'react-native-elements'
import {Text, View, ScrollView, Image, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'
import React, {Component} from 'react'

import {screens} from '../config/data'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#e9e9ee'
  }
})

class Feed extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  onLearnMore = screen => {
    this.props.navigation.navigate('Details', {...screen})

    console.log('there was an interaction')
    this.setState({inactive: false})
  }

  componentDidMount() {
    this.setState({inactive: true})
    var intervalId = setInterval(() => {
      console.log(this.state.inactive)
      if (this.state.inactive) {
        this.props.navigation.goBack(null)
      }
    }, 10000)
    this.setState({intervalId: intervalId})
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  handleSettingsPress = () => {
    // this.props.navigation.navigate("Home");
    this.props.navigation.goBack(null)
  }

  handleSettingsPress2 = () => {
    // this.props.navigation.navigate("pdfDemo");
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require('../config/assets/APLEONA_GruneKuche_Design_EntwurfA_Wortmarke.png')}
            style={{
              width: 354,
              height: 118,
              marginBottom: 40,
              marginTop: 40
            }}
          />

          <Text
            style={{
              fontSize: 40,
              textAlign: 'center',
              margin: 10
            }}
          >
            Besser Essen fürs Klima.
          </Text>
          <Text
            style={{
              marginBottom: 40,
              fontSize: 18,
              textAlign: 'center'
            }}
          >
            Finden Sie heraus wie und warum.
          </Text>
        </View>
        {/* <Button
          buttonStyle={{
            backgroundColor: "#d0753b",
            borderRadius: 10,
            marginTop: 40
          }}
          textStyle={{ textAlign: "center" }}
          onPress={this.handleSettingsPress2}
          title={`CO₂ Bilanz dieses Restaurants`}
        /> */}
        <List>
          {screens.map(screen => {
            return (
              <ListItem
                key={screen.id}
                // avatar={{ uri: screen.picture.thumbnail }}
                // avatar={require(screen.picture.thumbnail)}
                avatar={screen.picture.thumbnail}
                title={screen.title.toUpperCase()}
                subtitle={screen.subtitle}
                onPress={() => this.onLearnMore(screen)}
              />
            )
          })}
        </List>
        <Button
          buttonStyle={{
            // backgroundColor: "#d0753b",
            backgroundColor: '#aaaaaa',
            borderRadius: 10,
            marginTop: 60,
            marginBottom: 40
          }}
          textStyle={{textAlign: 'center'}}
          onPress={this.handleSettingsPress}
          title={`Zurück zum Eingangsbildschirm`}
        />

        {/* <Button
          buttonStyle={{
            backgroundColor: "#d0753b",
            borderRadius: 10,
            marginTop: 40
          }}
          textStyle={{ textAlign: "center" }}
          onPress={this.handleSettingsPress2}
          title={`Zur PDF Demo`}
        /> */}

        {/* <Button
          buttonStyle={{
            backgroundColor: "#d0753b",
            borderRadius: 10,
            marginTop: 40
          }}
          textStyle={{ textAlign: "center" }}
          onPress={this.handleSettingsPress2}
          title={`Zur HTML Demo`}
        /> */}
      </ScrollView>
    )
  }
}

export default Feed
