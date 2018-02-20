import {Dimensions} from 'react-native'
import React from 'react'
import styled from 'styled-components'

import {Header} from './Header'
import {Paragraph} from './Paragraph'
import {StyledImage} from './Image'

const EssenUndKlimawandelBase = styled.View``

const ProblemImage = styled(StyledImage)`
  width: ${Dimensions.get('window').width - 100}px;
`

const EssenUndKlimawandel = () => (
  <EssenUndKlimawandelBase>
    <StyledImage source={require('../config/assets/problem-short-CO2.jpg')} />

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
      erzielte Klimawirkung dem Wegfall von 1/6 der Autos in Europa gleich.
      Momentan verursacht das Essensverhalten pro Person jährlich über drei
      Tonnen CO₂.
    </Paragraph>

    <Paragraph>
      Mit überlegten, saisonalen und regionalen Lebensmittelentscheidungen
      können wir diese Emissionen um mehr als 50% verringern. Veränderungen im
      Lebensmittelkonsumverhalten sind der effizienteste Weg,
      Treibhausgasemissionen zu reduzieren und den vom Pariser Klimaabkommen
      festgelegten Grenzwert eines maximalen Temperaturanstieges von 2 Grad
      einzuhalten.
    </Paragraph>

    <ProblemImage source={require('../config/assets/problem-CO2.jpg')} />

    <Paragraph>
      Die wachsende Weltbevölkerung kombiniert mit der Wohlstandsentwicklung
      führen zu einer steigenden Lebensmittelnachfrage. Geht es so weiter wie
      bisher, wird das CO₂-Budget bis 2050 schon mit der Lebensmittelversorgung
      allein ausgeschöpft. Somit kommt unserem Essen eine Schlüsselrolle beim
      Erreichen des Klimaziels zu, die globale Temperaturerhöhung unter 2 Grad
      zu halten.
    </Paragraph>

    <Paragraph>
      Die wachsende Weltbevölkerung und der zunehmende Wohlstand bewirken einen
      Anstieg des mit der Lebensmittelversorgungskette zusammenhängenden
      Treibhausgasausstoßes. Das steht im Konflikt mit dem weltweiten Ziel, den
      Temperaturanstieg auf 2 Grad Celsius zu beschränken.
    </Paragraph>

    <StyledImage source={require('../config/assets/solution-CO2.jpg')} />

    <Paragraph>
      Um weitere Schäden zu vermeiden, müssen die mit Lebensmitteln in
      Verbindung stehenden Emissionen um 60% zurückgehen.
    </Paragraph>

    <Paragraph>
      Es wird davon ausgegangen, dass der Klimawandel durch ein um wenige Jahre
      verspätetes Handeln unsererseits zu mehr Zwangsumsiedlungen und Zerstörung
      führen wird als alle Kriege der Menschheitsgeschichte zusammen.
    </Paragraph>

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
