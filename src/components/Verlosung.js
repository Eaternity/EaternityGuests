import {Dimensions} from 'react-native'
import React from 'react'
import styled from 'styled-components'

import {Header} from './Header'
import {Paragraph} from './Paragraph'
import {StyledImage} from './Image'

const VerlosungBase = styled.View``

const StyledWebView = styled.WebView`
  width: ${Dimensions.get('window').width};
  height: 600px;
`

const dimensions = Dimensions.get('window')
const imageHeight = Math.round(dimensions.width * 9 / 16)
const imageWidth = dimensions.width

export const StyledImage2 = styled.Image.attrs({
  resizeMode: 'cover'
})`
  flex: 1;
  align-self: center;
  width: ${imageWidth}px;
  height: ${imageHeight}px;
`

const Verlosung = () => (
  <VerlosungBase>
    <StyledImage2 source={require('../config/assets/quiz.jpg')} />

    <Header>An der Verlosung teilnehmen</Header>

    <Paragraph>
      Gewinnen Sie ein klimafreundliches Gericht in Ihrem Betriebsrestaurant!
    </Paragraph>

    <StyledWebView
      source={{
        uri: 'https://manuelklarmann.typeform.com/to/QBMh5I'
      }}
    />

    <Paragraph>
      Die Verlosung findet Mitte November statt. GewinnerInnen werden per Email
      benachrichtigt. Mitarbeitende der beteiligten Personalrestaurants sind von
      der Teilnahme am Menu-Quiz ausgeschlossen.
    </Paragraph>
  </VerlosungBase>
)

export default Verlosung
