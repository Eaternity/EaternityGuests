import {Dimensions} from 'react-native'
import React from 'react'
import styled from 'styled-components'

import {Header} from './Header'
import {Paragraph} from './Paragraph'
import {StyledImage} from './Image'

const EssenUndKlimawandelBase = styled.View``

const ProblemShortLabeled = styled(StyledImage)`
  width: ${Dimensions.get('window').width - 150}px;
  height: 200px;
`

const EssenUndKlimawandel = () => (
  <EssenUndKlimawandelBase>
    <StyledImage
      source={require('../config/assets/essen_und_klima_feld.jpg')}
    />

    <Header>Essen und Klima</Header>

    <ProblemShortLabeled
      source={require('../config/assets/problem-short-labeled.jpeg')}
    />

    <Paragraph>
      Unsere Nahrungsmittelversorgungskette ist für 1/3 der weltweit
      verursachten Treibhausgase verantwortlich. Kein Fortschritt im
      Transportsektor und keine Energierevolution kann den Klimawandel so
      effizient verlangsamen wie eine intelligente Lebensmittelwahl. Die
      wirkungsvollsten Antworten auf das Pariser Klimaabkommen verstecken sich
      in unseren Kühlschränken; sie sind also weder in unseren Garagen noch in
      unseren Heizungssystemen zu finden!
    </Paragraph>

    <Paragraph>
      Würden alle Europäer dreimal pro Woche klimafreundlich essen, käme die
      erzielte Klimawirkung dem Wegfall von 1/6 aller Autos gleich. Momentan
      verursacht das Essensverhalten pro Person jährlich über drei Tonnen CO₂.
    </Paragraph>

    <Paragraph>
      Mit überlegten, saisonalen und regionalen Lebensmittelentscheidungen
      können wir diese Emissionen um mehr als 50% verringern. Veränderungen im
      Lebensmittelkonsumverhalten ist der effizienteste Weg,
      Treibhausgasemissionen zu reduzieren und den vom Pariser Klimaabkommen
      festgelegten Grenzwert eines maximalen Temperaturanstieges von 2 Grad
      einzuhalten.
    </Paragraph>

    <StyledImage source={require('../config/assets/problem-co2-labeled.png')} />

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
