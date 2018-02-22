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

const Verlosung = () => (
  <VerlosungBase>
    <StyledImage source={require('../config/assets/quiz.jpg')} />

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
