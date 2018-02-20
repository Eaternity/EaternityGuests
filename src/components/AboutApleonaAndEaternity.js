import React from 'react'
import styled from 'styled-components'

import {Header} from './Header'
import {Paragraph} from './Paragraph'
import {StyledImage} from './Image'

const AboutApleonaAndEaternityBase = styled.View``

const AboutApleonaAndEaternity = () => (
  <AboutApleonaAndEaternityBase>
    <Header>Über Apleona HSG Culinaress</Header>

    <Paragraph>
      Apleona HSG Culinaress bietet mit über 50 Jahren Erfahrung als Business
      Caterer vielfältige Leistungen im Bereich Betriebsrestaurants, Kaffeebars
      und Bistros, Konferenzservice oder Ernährungskonzepten. Mit umfassenden
      Beratungen und individuellen Konzepten wird für jeden Kunden die passende
      Lösung für den aktuellen Bedarf umgesetzt.
    </Paragraph>

    <Paragraph>
      Apleona HSG Culinaress ist essentieller Teil der starken Apleona Ahr
      Gruppe, die das Portfolio Catering, Cleaning und Services mit fast 8.000
      Mitarbeitern in Deutschland vereint. Die übergeordnete Unternehmensgruppe
      Apleona ist insgesamt in über 30 Ländern tätig und erzielte mit 22.000
      Mitarbeitern einen Umsatz von über 2,0 Milliarden Euro. Apleona erbringt
      Dienstleistungen für den gesamten Lebenszyklus einer Immobilie und ist
      Marktführer für Facility Management in Deutschland, Österreich und der
      Schweiz.
    </Paragraph>

    <Paragraph>Weitere Informationen unter: www.ahr.apleona.com</Paragraph>
    <StyledImage source={require('../config/assets/apleona.jpg')} />

    <Header>Über Eaternity</Header>

    <Paragraph>
      Eaternity hat einen ausgeprägten Appetit auf Veränderung. Wir etablieren
      klimafreundliche Mahlzeiten in der Gesellschaft. Eaternity hat eine
      innovative Software entwickelt, mit welcher Restaurants den
      CO₂-Fussabdruck ihrer Mahlzeiten und Einkäufen automatisch berechnen und
      verbessern können. Parallel dazu können alle ihre persönlichen
      ernährungsbezogenen CO₂-Emissionen mit Eaternity’s öffentlich zugänglicher
      Web App überprüfen.
    </Paragraph>

    <Paragraph>
      Die Gastronomiebranche hat das Potential, der Angelegenheit eine neue
      Richtung zu verleihen; ihr fällt beim Klimawandel eine Schlüsselrolle zu.
      Deshalb konzentrieren wir uns auf die Entwicklung der optimalen Lösung, um
      Köchen und Köchinnen in allen Bereichen der Gastronomiebranche wichtige
      Umweltinformationen zur Verfügung zu stellen.
    </Paragraph>

    <Paragraph>Weitere Informationen unter: www.eaternity.org</Paragraph>
    <StyledImage source={require('../config/assets/eaternity.jpg')} />
  </AboutApleonaAndEaternityBase>
)

export default AboutApleonaAndEaternity
