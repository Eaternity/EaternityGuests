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
        uri: 'https://apleona.typeform.com/to/KWVslS'
      }}
    />

    <Paragraph>
      Wir verlosen 10 Gutscheine für ein klimafreundliches Gericht im Park
      Casino für jeweils eine Person. Bitte beantworten Sie dazu einfach kurz
      vier Fragen. Die Verlosung findet am 23. März 2018 statt.Die eingegebenen
      Daten werden ausschließlich zur Gewinnermittlung und Benachrichtigung der
      Gewinner verwendet. Mitarbeiter von Apleona sind von der Teilnahme an der
      Verlosung ausgeschlossen.
    </Paragraph>
  </VerlosungBase>
)

export default Verlosung
