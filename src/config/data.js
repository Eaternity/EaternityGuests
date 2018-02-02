import { problemCO2 } from "./assets/problem-CO2.jpg.b64.js";
import { info } from "./assets/info.jpg.b64.js";
import { problemShortCO2 } from "./assets/problem-short-CO2.jpg.b64.js";
import { problemOnlyDE } from "./assets/problem-only-DE.jpg.b64.js";
import { problemOnlyDE2 } from "./assets/problem-only-DE2.jpg.b64.js";
import { solutionCO2 } from "./assets/solution-CO2.jpg.b64.js";
import { qnips } from "./assets/app-download.jpg.b64.js";
import { label } from "./assets/labeling.jpg.b64.js";
import { recipes } from "./assets/recipes.jpg.b64.js";
import { circle } from "./assets/circle.jpg.b64.js";
import { fallstudie } from "./assets/fallstudie.jpg.b64.js";
import { ingredients } from "./assets/ingredients.jpg.b64.js";
import { symbols } from "./assets/symbols.jpg.b64.js";
import { eaternity } from "./assets/eaternity.jpg.b64.js";
import { apleona } from "./assets/apleona.jpg.b64.js";
// import { parallax } from "./assets/home-parallax.jpg.b64.js";

export const screens = [
  {
    title: "Essen und Klimawandel",
    subtitle: "Welcher Herausforderung müssen wir uns zum Klimawandel stellen?",
    id: "problem",
    picture: {
      large: require("./assets/home-parallax.jpg"),
      thumbnail: require("./assets/Report-Icon-CO2.jpg")
    },
    htmlContent: `

    <img src="${problemShortCO2}" />

    <p>Unsere Nahrungsmittelversorgungskette ist für 1/3 der weltweit verursachten Treibhausgase verantwortlich. Kein Fortschritt im Transportsektor und keine Energierevolution kann den Klimawandel so effizient verlangsamen wie eine intelligente Lebensmittelwahl. Die wirkungsvollsten Antworten auf das Pariser Klimaabkommen verstecken sich in unseren Kühlschränken; sie sind also weder in unseren Garagen noch in unseren Heizungssystemen zu finden!</p>

    <p>Würden alle Europäer dreimal pro Woche klimafreundlich essen, käme die erzielte Klimawirkung dem Wegfall von 1/6 der Autos in Europa gleich. Momentan verursacht das Essensverhalten pro Person jährlich über drei Tonnen CO₂.</p>

    <p>Mit überlegten, saisonalen und regionalen Lebensmittelentscheidungen können wir diese Emissionen um mehr als 50% verringern. Veränderungen im Lebensmittelkonsumverhalten sind der effizienteste Weg, Treibhausgasemissionen zu reduzieren und den vom Pariser Klimaabkommen festgelegten Grenzwert eines maximalen Temperaturanstieges von 2 Grad einzuhalten.</p>

    <img src="${problemCO2}" />

    <p>Die wachsende Weltbevölkerung kombiniert mit der Wohlstandsentwicklung führen zu einer steigenden Lebensmittelnachfrage. Geht es so weiter wie bisher, wird das CO₂-Budget bis 2050 schon mit der Lebensmittelversorgung allein ausgeschöpft. Somit kommt unserem Essen eine Schlüsselrolle beim Erreichen des Klimaziels zu, die globale Temperaturerhöhung unter 2 Grad zu halten.</p>

    <p>Die wachsende Weltbevölkerung und der zunehmende Wohlstand bewirken einen Anstieg des mit der Lebensmittelversorgungskette zusammenhängenden Treibhausgasausstoßes. Das steht im Konflikt mit dem weltweiten Ziel, den Temperaturanstieg auf 2 Grad Celsius zu beschränken.</p>

    <img src="${solutionCO2}" />

    <p>Um weitere Schäden zu vermeiden, müssen die mit Lebensmitteln in Verbindung stehenden Emissionen um 60% zurückgehen.</p>

    <p>Es wird davon ausgegangen, dass der Klimawandel durch ein um wenige Jahre verspätetes Handeln unsererseits zu mehr Zwangsumsiedlungen und Zerstörung führen wird als alle Kriege der Menschheitsgeschichte zusammen.
    </p>

    <h1>Der Klimawandel</h1>

    <p>Wenn Treibhausgase wie CO₂, Methan und Lachgas in die Atmosphäre geraten, speichern sie die Sonnenwärme in Erdnähe. Das führt zu einer Zunahme der Erdtemperatur und zum Klimawandel. Während seit dem 19. Jahrhundert ein durchschnittlicher Temperaturanstieg von 0.8 Grad verzeichnet wurde, hat sich dieser Prozess in den letzten Jahren auf noch nie dagewesene Weise beschleunigt. In den letzten 30 Jahren nahm die Erdtemperatur jedes Jahrzehnt um rund 0.2 Grad zu. Da sich die Wärme nicht ebenmäßig verteilt, ist der Temperaturanstieg in nördlichen Regionen deutlicher als in anderen. Unser Lebensstil wird sich wegen des Klimawandels komplett verändern müssen.</p>

    <p></p>


    `
  },
  {
    title: "CO₂ Bilanz dieses Restaurants",
    subtitle: "Wieviel Emissionen wurden im Monat Dezember verursacht?",
    id: "restaurant",
    picture: {
      large: "",
      thumbnail: require("./assets/Report-Icon-Restaurant.jpg")
    },
    htmlContent: `

  <iframe width="100%" height="960" src="http://www.eaternity.org/assets/EaternityGuests/reports/DE-2018-01-28159-Gast.htm" frameborder="0" allowfullscreen></iframe>

      `
  },
  {
    title: "CO₂ Bilanz der Menus im Angebot",
    subtitle:
      "Wieviel Emissionen haben die Menus im Monat Dezember verursacht?",
    id: "menus",
    picture: {
      large: "",
      thumbnail: require("./assets/Report-Icon-Menu.jpg")
    },
    htmlContent: `
          <img src="${qnips}" />
          <img src="${label}" />
    `
  },
  {
    title: "Klimafreundliche Menus",
    subtitle: "Wann bekommt ein Menu die Auszeichnung «klimafreundlich»?",
    id: "award",
    picture: {
      large: "http://www.eaternity.org/img/eat-at-home/eatathome-parallax.jpg",
      thumbnail: require("./assets/Report-Icon-Products.jpg")
    },
    htmlContent: `
      <img src="${circle}" />

      <h1>Das Konzept [FoodPRINT]: nachhaltig, gesund und lecker</h1>
      <p>Ausschlaggebend für die Ökobilanz eines Produktes sind zum einen die Bedingungen, unter denen bestimmte Produkte erzeugt werden. Die Produktion von Rindfleisch zum Beispiel verursacht eine vergleichsweise starke Belastung für unser Klima. Hinzu kommen variierende Faktoren wie Saisonalität, Transport und Verarbeitung. Alle Faktoren zusammen ergeben die Klimabilanz eines Lebensmittelprodukts. Grundsätzlich gilt: Wer sich klimafreundlich ernähren will, sollte eher zu pflanzlichen statt zu tierischen Produkten greifen und auf Saisonalität sowie Regionalität achten.</p>

      <p>Um die Klimabilanz zu ermitteln, hat Eaternity einen CO₂-Rechner entwickelt, welcher auf der Datenbasis von Studien und fundierten Vergleichswerten, kombiniert mit den aktuellen Informationen zu Liefer- und Produktionsbedingungen, den CO₂-Wert jedes einzelnen Menüs im Restaurantbetrieb berechnet. Verknüpft mit dem effizienten Warenwirtschaftssystem, das jedes Betriebsrestaurant von Apleona HSG Culinaress nutzt, können so die exakten Werte im Speiseplan angegeben werden.</p>

      <h1>DEN CO₂-FUSSABDRUCK VON LEBENSMITTELN MESSEN</h1>

      <p>Alle Treibhausgase, die mit der Lebensmittelproduktion zusammenhängen, werden in CO₂-Äquivalenten ausgedrückt. Das heisst, die Emissionen verschiedener Treibhausgase werden umgerechnet in die CO₂-Menge mit der gleichen Klimawirkung. Der CO₂-Fussabdruck betrachtet jede einzelne Lebensphase eines Produktes und schafft Transparenz beim Vergleich der Umweltbelastung verschiedener Produkte in Hinsicht auf Produktion, Transport, Lagerung und Entsorgung.</p>

      <p>Für die Produktion von 1 kg tierischem Protein werden durchschnittlich 18 kg Pflanzenproteine benötigt. Tierische Erzeugnisse führen somit zu luxuriösen Umweltkosten; sie sind für 60 % der mit der Lebensmittelversorgungskette verbundenen Treibhausgasemissionen verantwortlich.
      Im Gegensatz zu tierischen Produkten haben pflanzliche Lebensmittel wie Getreide und Gemüse einen relativ niedrigen CO₂-Fussabdruck. Geheizte Gewächshäuser und Luftfracht können diesen Fußabdruck jedoch signifikant vergrössern.</p>

      <img src="${fallstudie}" />

      <h1>AUF ERNÄHRUNGSENTSCHEIDUNGEN KOMMT ES AN</h1>

      <p>Überlegte Ernährungsentscheidungen haben das Potential, die CO₂-Emissionen unserer Lebensmittelversorgungskette um mindestens 50 % zu reduzieren. Die wachsende Weltbevölkerung kombiniert mit der Wohlstandsentwicklung führt zu einer steigenden Lebensmittelnachfrage. Geht es so weiter wie bisher, wird das CO₂-Budget bis 2050 schon mit der Lebensmittelversorgung allein ausgeschöpft. Somit kommt unserem Essen eine Schlüsselrolle zu beim Erreichen des Klimazieles, die globale Temperaturerhöhung unter 2 Grad zu halten.</p>


      <p>Es ist uns allen klar, dass die Welt nicht komplett vegetarisch werden wird. Es kann sogar Sinn machen, in steilen alpinen Gebieten, welche sich nicht für den Gemüse- und Getreideanbau eignen, tierische Proteine zu erzeugen. Dennoch ist es wichtig, uns bewusst zu sein, dass tierische Eiweisse normalerweise mit hohen Umweltkosten verbunden sind, so können alle mit einem gesunden Verhältnis zwischen pflanzlichen und tierischen Eiweissen einen Beitrag leisten. Folgende Ernährungsentscheidungen tragen signifikant dazu bei, die negative Klimawirkung zu reduzieren:</p>


      <p>Verpackung, Transport und Zubereitung in der Küche spielen meistens eine sehr untergeordnete Rolle. So ist der Stromverbrauch fürs Kochen und die Lagerung weniger als 20 % der Emissionen pro Menü. Die meisten Emissionen entstehen in der Landwirtschaft – d.h. in der Wahl der Produkte selbst:</p>

      <img src="${ingredients}" />

      <img src="${recipes}" />

      <p>Wir wissen es genau: Eaternity ermittelt für jede Zutat und jedes Menu die CO₂-Belastung. Dazu wird tagesaktuell ermittelt, wie viele Emissionen an jedem Standort gesamthaft verursacht werden. Eaternity ist Ökobilanz-Pionier. Die Firma steht für die weltweit genaueste Messmethode von CO₂-Belastungen der Nahrungsmittel.</p>

      <img src="${symbols}" />

      <h1>Zutaten eines nachhaltigen Menus:</h1>
      <p>Ob mit viel frischem Gemüse und Getreide, saisonalen Zutaten, vegetarisch oder vegan, die Hauptsache ist immer der Geschmack. Und wenn es Fleisch gibt, dann ist es verhältnismäßig klimafreundlich.</p>



    `
  },
  {
    title: "An der Verlosung teilnehmen",
    subtitle: "Klimafreundliche Fragen beantworten und gewinnen.",
    id: "win",
    picture: {
      large: "http://www.eaternity.org/img/home/screens.png",
      thumbnail: require("./assets/Report-Icon-Certificate.jpg")
    },
    htmlContent: `

    <iframe width="1024" height="718" src="https://manuelklarmann.typeform.com/to/QBMh5I" frameborder="0" allowfullscreen></iframe>
    `
  },
  // {
  //   title: "Zugang zum CO₂-Rechner",
  //   subtitle: "Eigene Rezepte berechnen und mehr zum Thema erfahren.",
  //   id: "app",
  //   picture: {
  //     large: "http://www.eaternity.org/img/home/screens.png",
  //     thumbnail: require("./assets/Report-Icon-Award.jpg")
  //   },
  //   htmlContent: `
  //     <iframe width="1024" height="768" src="https://xxx.appspot.com/" frameborder="0" allowfullscreen></iframe>
  //   `
  // },
  {
    title: "Über Apleona und Eaternity",
    subtitle: "Neugierig geworden? Erfahren Sie mehr.",
    id: "app",
    picture: {
      large: "",
      thumbnail: require("./assets/Report-Icon-Award.jpg")
    },
    htmlContent: `


    <h1>Über Apleona HSG Culinaress</h1>

    <p>Apleona HSG Culinaress bietet mit über 50 Jahren Erfahrung als Business Caterer vielfältige Leistungen im Bereich Betriebsrestaurants, Kaffeebars und Bistros, Konferenzservice oder Ernährungskonzepten. Mit umfassenden Beratungen und individuellen Konzepten wird für jeden Kunden die passende Lösung für den aktuellen Bedarf umgesetzt.</p>

    <p>Apleona HSG Culinaress ist essentieller Teil der starken Apleona Ahr Gruppe, die das Portfolio Catering, Cleaning und Services mit fast 8.000 Mitarbeitern in Deutschland vereint. Die übergeordnete Unternehmensgruppe Apleona ist insgesamt in über 30 Ländern tätig und erzielte mit 22.000 Mitarbeitern einen Umsatz von über 2,0 Milliarden Euro. Apleona erbringt Dienstleistungen für den gesamten Lebenszyklus einer Immobilie und ist Marktführer für Facility Management in Deutschland, Österreich und der Schweiz.</p>

    <p>Weitere Informationen unter: www.ahr.apleona.com</p>
    <img src="${apleona}" />


      <h1>Über Eaternity</h1>

      <p>Eaternity hat einen ausgeprägten Appetit auf Veränderung. Wir etablieren klimafreundliche Mahlzeiten in der Gesellschaft. Eaternity hat eine innovative Software entwickelt, mit welcher Restaurants den CO₂-Fussabdruck ihrer Mahlzeiten und Einkäufen automatisch berechnen und verbessern können. Parallel dazu können alle ihre persönlichen ernährungsbezogenen CO₂-Emissionen mit Eaternity’s öffentlich zugänglicher Web App überprüfen.</p>

      <p>Die Gastronomiebranche hat das Potential, der Angelegenheit eine neue Richtung zu verleihen; ihr fällt beim Klimawandel eine Schlüsselrolle zu. Deshalb konzentrieren wir uns auf die Entwicklung der optimalen Lösung, um Köchen und Köchinnen in allen Bereichen der Gastronomiebranche wichtige Umweltinformationen zur Verfügung zu stellen.</p>

      <p>Weitere Informationen unter: www.eaternity.org</p>
      <img src="${eaternity}" />

      `
  }
];
