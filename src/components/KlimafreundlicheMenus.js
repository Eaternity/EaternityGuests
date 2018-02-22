import {Dimensions} from 'react-native'
import React from 'react'
import styled from 'styled-components'

import {Header} from './Header'
import {Paragraph} from './Paragraph'
import {StyledImage} from './Image'

const KlimafreundlicheMenusBase = styled.View``

const Fallstudie = styled(StyledImage)`
  height: 500px;
`

const Recipes = styled(StyledImage)`
  height: 300px;
`

const Symbols = styled(StyledImage)`
  width: ${Dimensions.get('window').width - 150}px;
  height: 200px;
`

const KlimafreundlicheMenus = () => (
  <KlimafreundlicheMenusBase>
    <StyledImage
      source={require('../config/assets/klimafreundliche-menus.jpg')}
    />

    <Header>Das Konzept [FoodPRINT]: nachhaltig, gesund und lecker</Header>
    <Paragraph>
      Ausschlaggebend für die Ökobilanz eines Produktes sind zum einen die
      Bedingungen, unter denen bestimmte Produkte erzeugt werden. Die Produktion
      von Rindfleisch zum Beispiel verursacht eine vergleichsweise starke
      Belastung für unser Klima. Hinzu kommen variierende Faktoren wie
      Saisonalität, Transport und Verarbeitung. Alle Faktoren zusammen ergeben
      die Klimabilanz eines Lebensmittelprodukts. Grundsätzlich gilt: Wer sich
      klimafreundlich ernähren will, sollte eher zu pflanzlichen statt zu
      tierischen Produkten greifen und auf Saisonalität sowie Regionalität
      achten.
    </Paragraph>

    <Paragraph>
      Um die Klimabilanz zu ermitteln, hat Eaternity einen CO₂-Rechner
      entwickelt, welcher auf der Datenbasis von Studien und fundierten
      Vergleichswerten, kombiniert mit den aktuellen Informationen zu Liefer-
      und Produktionsbedingungen, den CO₂-Wert jedes einzelnen Menüs im
      Restaurantbetrieb berechnet. Verknüpft mit dem effizienten
      Warenwirtschaftssystem, das jedes Betriebsrestaurant von Apleona HSG
      Culinaress nutzt, können so die exakten Werte im Speiseplan angegeben
      werden.
    </Paragraph>

    <StyledImage source={require('../config/assets/circle-with-header.png')} />

    <Header>DEN CO₂-FUSSABDRUCK VON LEBENSMITTELN MESSEN</Header>

    <Paragraph>
      Alle Treibhausgase, die mit der Lebensmittelproduktion zusammenhängen,
      werden in CO₂-Äquivalenten ausgedrückt. Das heisst, die Emissionen
      verschiedener Treibhausgase werden umgerechnet in die CO₂-Menge mit der
      gleichen Klimawirkung. Der CO₂-Fussabdruck betrachtet jede einzelne
      Lebensphase eines Produktes und schafft Transparenz beim Vergleich der
      Umweltbelastung verschiedener Produkte in Hinsicht auf Produktion,
      Transport, Lagerung und Entsorgung.
    </Paragraph>

    <Paragraph>
      Für die Produktion von 1 kg tierischem Protein werden durchschnittlich 18
      kg Pflanzenproteine benötigt. Tierische Erzeugnisse führen somit zu
      luxuriösen Umweltkosten; sie sind für 60 % der mit der
      Lebensmittelversorgungskette verbundenen Treibhausgasemissionen
      verantwortlich. Im Gegensatz zu tierischen Produkten haben pflanzliche
      Lebensmittel wie Getreide und Gemüse einen relativ niedrigen
      CO₂-Fussabdruck. Geheizte Gewächshäuser und Luftfracht können diesen
      Fußabdruck jedoch signifikant vergrössern.
    </Paragraph>

    <Fallstudie source={require('../config/assets/fallstudie.jpg')} />

    <Header>AUF ERNÄHRUNGSENTSCHEIDUNGEN KOMMT ES AN</Header>

    <Paragraph>
      Überlegte Ernährungsentscheidungen haben das Potential, die CO₂-Emissionen
      unserer Lebensmittelversorgungskette um mindestens 50 % zu reduzieren. Die
      wachsende Weltbevölkerung kombiniert mit der Wohlstandsentwicklung führt
      zu einer steigenden Lebensmittelnachfrage. Geht es so weiter wie bisher,
      wird das CO₂-Budget bis 2050 schon mit der Lebensmittelversorgung allein
      ausgeschöpft. Somit kommt unserem Essen eine Schlüsselrolle zu beim
      Erreichen des Klimazieles, die globale Temperaturerhöhung unter 2 Grad zu
      halten.
    </Paragraph>

    <Paragraph>
      Es ist uns allen klar, dass die Welt nicht komplett vegetarisch werden
      wird. Es kann sogar Sinn machen, in steilen alpinen Gebieten, welche sich
      nicht für den Gemüse- und Getreideanbau eignen, tierische Proteine zu
      erzeugen. Dennoch ist es wichtig, uns bewusst zu sein, dass tierische
      Eiweisse normalerweise mit hohen Umweltkosten verbunden sind, so können
      alle mit einem gesunden Verhältnis zwischen pflanzlichen und tierischen
      Eiweißen einen Beitrag leisten. Folgende Ernährungsentscheidungen tragen
      signifikant dazu bei, die negative Klimawirkung zu reduzieren:
    </Paragraph>

    <Paragraph>
      Verpackung, Transport und Zubereitung in der Küche spielen meistens eine
      sehr untergeordnete Rolle. So ist der Stromverbrauch fürs Kochen und die
      Lagerung weniger als 20 % der Emissionen pro Menü. Die meisten Emissionen
      entstehen in der Landwirtschaft – d.h. in der Wahl der Produkte selbst:
    </Paragraph>

    <StyledImage source={require('../config/assets/ingredients.jpg')} />

    <Paragraph>
      Wir wissen es genau: Eaternity ermittelt für jede Zutat und jedes Menu die
      CO₂-Belastung. Dazu wird tagesaktuell ermittelt, wie viele Emissionen an
      jedem Standort gesamthaft verursacht werden. Eaternity ist
      Ökobilanz-Pionier. Die Firma steht für die weltweit genaueste Messmethode
      von CO₂-Belastungen der Nahrungsmittel.
    </Paragraph>

    <Recipes source={require('../config/assets/recipes.jpg')} />

    <Header>Zutaten eines nachhaltigen Menus:</Header>
    <Paragraph>
      Ob mit viel frischem Gemüse und Getreide, saisonalen Zutaten, vegetarisch
      oder vegan, die Hauptsache ist immer der Geschmack. Und wenn es Fleisch
      gibt, dann ist es verhältnismäßig klimafreundlich.
    </Paragraph>

    <Symbols source={require('../config/assets/symbols.jpg')} />
  </KlimafreundlicheMenusBase>
)

export default KlimafreundlicheMenus
