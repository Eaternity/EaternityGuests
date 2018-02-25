import {Dimensions} from 'react-native'
import React from 'react'
import styled from 'styled-components'

import {Header} from './Header'
import {Paragraph} from './Paragraph'
import {ParagraphColor} from './Paragraph'
import {ParagraphBold} from './Paragraph'
import {ParagraphHeader} from './Paragraph'
// import {StyledImage} from './Image'

const dimensions = Dimensions.get('window')
const imageHeight = Math.round(dimensions.width * 4 / 6)
const imageWidth = dimensions.width

export const StyledImage2 = styled.Image.attrs({
  resizeMode: 'contain'
})`
  flex: 1;
  align-self: center;
  width: ${imageWidth}px;
  height: ${imageHeight}px;
`

export const StyledImage3 = styled.Image.attrs({
  resizeMode: 'contain'
})`
  flex: 1;
  align-self: center;
  width: ${imageWidth}px;
  height: ${Math.round(dimensions.width * 372 / 1361)}px;
`
export const StyledImage4 = styled.Image.attrs({
  resizeMode: 'contain'
})`
  flex: 1;
  align-self: center;
  width: ${imageWidth}px;
  height: ${Math.round(dimensions.width * 1000 / 1450)}px;
`

const EssenUndKlimawandelBase = styled.View``

const EssenUndKlimawandel = () => (
  <EssenUndKlimawandelBase>
    <StyledImage2
      source={require('../config/assets/essen_und_klima_feld.jpg')}
    />

    <Header>Essen und Klima</Header>

    <StyledImage3
      source={require('../config/assets/problem-short-labeled.jpeg')}
    />

    <ParagraphHeader>
      Unsere Nahrungsmittelversorgungskette ist für 1/3 der weltweit
      verursachten Treibhausgase verantwortlich.
    </ParagraphHeader>
    <ParagraphBold>
      Kein Fortschritt im Transportsektor und keine Energierevolution kann den
      Klimawandel so effizient verlangsamen wie eine intelligente
      Lebensmittelwahl. Die wirkungsvollsten Antworten auf das Pariser
      Klimaabkommen verstecken sich in unseren Kühlschränken; sie sind also
      weder in unseren Garagen noch in unseren Heizungssystemen zu finden!
    </ParagraphBold>

    <ParagraphColor>
      Würden alle Europäer dreimal pro Woche klimafreundlich essen, käme die
      erzielte Klimawirkung dem Wegfall von 1/6 aller Autos gleich. Momentan
      verursacht das Essensverhalten pro Person jährlich über drei Tonnen CO₂.
    </ParagraphColor>

    <Paragraph>
      Mit überlegten, saisonalen und regionalen Lebensmittelentscheidungen
      können wir diese Emissionen um mehr als 50% verringern. Veränderungen im
      Lebensmittelkonsumverhalten ist der effizienteste Weg,
      Treibhausgasemissionen zu reduzieren und den vom Pariser Klimaabkommen
      festgelegten Grenzwert eines maximalen Temperaturanstieges von 2 Grad
      einzuhalten.
    </Paragraph>

    <StyledImage4
      source={require('../config/assets/problem-co2-labeled.png')}
    />

    <Header>Der Klimawandel</Header>

    <Paragraph>
      Wenn Treibhausgase wie CO₂, Methan und Lachgas in die Atmosphäre geraten,
      speichern sie die Sonnenwärme in Erdnähe. Das führt zu einer Zunahme der
      Erdtemperatur und zum Klimawandel. Während seit dem 19. Jahrhundert ein
      durchschnittlicher Temperaturanstieg von 0.8 Grad verzeichnet wurde, hat
      sich dieser Prozess in den letzten Jahren auf noch nie dagewesene Weise
      beschleunigt. In den letzten 30 Jahren nahm die Erdtemperatur jedes
      Jahrzehnt um rund 0.2 Grad zu. Da sich die Wärme nicht ebenmäßig verteilt,
      ist der Temperaturanstieg in nördlichen Regionen deutlicher als in
      anderen. Unser Lebensstil wird sich wegen des Klimawandels komplett
      verändern müssen.
    </Paragraph>

    <Paragraph />
  </EssenUndKlimawandelBase>
)

export default EssenUndKlimawandel
