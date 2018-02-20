import {Button} from 'react-native-elements'
import {Text, View, Image} from 'react-native'
import PropTypes from 'prop-types'
import React, {Component} from 'react'

import BounceImage from '../components/BounceImage'
import styles from '../config/styles'

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  handleSettingsPress = () => {
    this.props.navigation.navigate('Feed')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 32,
            textAlign: 'center',
            marginTop: 10
          }}
        >
          Herzlich Willkommen
        </Text>
        <Text
          style={{
            fontSize: 32,
            textAlign: 'center',
            margin: 10
          }}
        >
          zum klimafreundlichen Konzept
        </Text>
        <Image
          source={require('../config/assets/APLEONA_GruneKuche_Design_EntwurfA_Wortmarke.png')}
          style={{
            width: 531,
            height: 177,
            marginBottom: 80,
            marginTop: 40
          }}
        />
        <BounceImage>
          <Button
            buttonStyle={{backgroundColor: '#aaaaaa', borderRadius: 10}}
            textStyle={{textAlign: 'center'}}
            onPress={this.handleSettingsPress}
            // title={`Touch to learn more`}
            title={`Tippen Sie hier\n um mehr herauszufinden.`}
          />
        </BounceImage>
      </View>
    )
  }
}

export default Home
