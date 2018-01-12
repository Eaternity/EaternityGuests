import { problemCO2 } from "./assets/problem-CO2.jpg.b64.js";
import { info } from "./assets/info.jpg.b64.js";
import { problemShortCO2 } from "./assets/problem-short-CO2.jpg.b64.js";
import { problemOnlyDE } from "./assets/problem-only-DE.jpg.b64.js";
import { problemOnlyDE2 } from "./assets/problem-only-DE2.jpg.b64.js";
import { solutionCO2 } from "./assets/solution-CO2.jpg.b64.js";
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

    <p>Würden alle Europäer dreimal pro Woche klimafreundlich essen, käme die erzielte Klimawirkung dem Wegfall von 1/6 Autos gleich. Momentan verursacht das Essensverhalten pro Person jährlich rund drei Tonnen CO₂.</p>

    <p>Mit überlegten, saisonalen und regionalen Lebensmittelentscheidungen können wir diese Emissionen um mehr als 50% verringern. Veränderungen im Lebensmittelkonsumverhalten ist der effizienteste Weg, Treibhausgasemissionen zu reduzieren und den vom Pariser Klimaabkommen festgelegten Grenzwert eines maximalen Temperaturanstieges von 2 Grad einzuhalten.</p>


    <img src="${problemCO2}" />

    <img src="${info}" />

    <img src="${solutionCO2}" />


    <p>Extreme Wetterereignisse wie Starkniederschläge, Hurrikane, Hitzewellen und Dürren werden mit dem Klimawandel häfiger und stärker. Folgen davon sind Erdrutsche, schmelzender Permafrost, Versauerung der Meere, Verlust von Pflanzen- und Tierarten, Ausbreitung von Krankheiten, Ertragseinbussen und zunehmende Wasserknappheit. Polarkappen und Alpengletscher schmelzen rasant, was den Meeresspiegel ansteigen lässt und somit zu Überschwemmung und Erosion von Inseln und Küstengebieten führt. Der Klimawandel ist kein Zukunftsereignis, sondern ist bereits spürbar im Gang. Je höher wir die globale Temperatur ansteigen lassen, desto höher wird der zu bezahlende Preis sein. Es gibt weltweite Bemühungen, den Temperaturanstieg zu begrenzen. An der Pariser Klimakonferenz im Jahr 2015 wurde das Ziel vereinbart, die Klimaerwärmung auf 2 Grad zu beschränken. Diese Bemühungen werden uns nicht komplett von Schäden bewahren, vielmehr geht es dabei darum, die Konsequenzen soweit zu begrenzen, dass die Menschheit damit umgehen kann.</p>

    <p>1/3 der weltweiten Treibhausgasemissionen hängen mit der Lebensmittelversorgungskette zusammen. Wie und was wir essen trägt mehr zum Klimawandel bei als der globale Personen- und Gütertransport.</p>

    <p>Über 80 % der Emissionen unserer Lebensmittelversorgung entstehen bei der Produktion; Die Emissionen enstehen vor allem durch Waldrodungen (38%), Torfabbau (11%) sowie in der Landwirtschaft selber (50%), wo die Nutztierhaltung, das Düngen und die Reisproduktion den Grossteil ausmachen.</p>

    - ⅓ aller emissionen kommen aus der Ernährung
    - Klimaziel der Nationen
    - Probleme bei über 2°
    - Folgen für Menschheit
    - Folgen auf die Nahrungsmittelversorgung
    - Ziel zur Reduktion

    <img src="${problemOnlyDE2}" />

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

<iframe width="1024" height="718" src="http://batch-dot-eaternity-app.appspot.com/reports/?year=2017&month=11&customer=Apleona_DE&lang=de&target-audience=guest&kitchen-id=28159" frameborder="0" allowfullscreen></iframe>

    <h1>Inhalte PDF report zum Zertifikat Restaurant mit Erläuterungen (vom Vormonat)
</h1>
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

          <iframe width="1024" height="718" src="http://batch-dot-eaternity-app.appspot.com/reports/?year=2017&month=11&customer=Apleona_DE&lang=de&target-audience=guest&kitchen-id=28159" frameborder="0" allowfullscreen></iframe>
    `
  },
  {
    title: "Was ist ein klimafreundliches Menu",
    subtitle: "Wann bekommt ein Menu die Auszeichnung «klimafreundlich»?",
    id: "award",
    picture: {
      large: "http://www.eaternity.org/img/eat-at-home/eatathome-parallax.jpg",
      thumbnail: require("./assets/Report-Icon-Products.jpg")
    },
    htmlContent: `


    <br />
    <ul>
    <li>Was ist das Potential eines klimafreundlichen Menus</li>
    <li>Wo können wir wieviel CO₂ beim Menu einsparen</li>
    <li>Unterschiedliche Bilanzen von Zutaten</li>
    <li>Die klimafreundlichen Menus im Restaurant (link zu QNips möglich?) - mit CO₂ Werten</li>
    <li>CO₂ Werte anderer Menus (von heute?)</li>
    </ul>
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
    title: "An der Verlosung teilnehmen",
    subtitle: "Rette das Klima und gewinne.",
    id: "win",
    picture: {
      large: "http://www.eaternity.org/img/home/screens.png",
      thumbnail: require("./assets/Report-Icon-Certificate.jpg")
    },
    htmlContent: `

    <iframe width="1024" height="718" src="https://manuelklarmann.typeform.com/to/QBMh5I" frameborder="0" allowfullscreen></iframe>


    <p>Eaternity hat einen ausgeprägten Appetit auf Veränderung. Wir etablieren klimafreundliche Mahlzeiten in der Gesellschaft. Eaternity hat eine innovative Software entwickelt, mit welcher Restaurants den CO₂-Fussabdruck ihrer Mahlzeiten und Einkäufen automatisch berechnen und verbessern können. Parallel dazu können alle ihre persönlichen ernährungsbezogenen CO₂-Emissionen mit Eaternitys öffentlich zugänglicher Web App überprüfen.</p>

    <p>Die Gastronomiebranche hat das Potential, der Angelegenheit eine neue Richtung zu verleihen; ihr fällt beim Klimawandel eine Schlüsselrolle zu. Deshalb konzentrieren wir uns auf die Entwicklung der optimalen Lösung, um Köchen und Köchinnen in allen Bereichen der Gastronomiebranche wichtige Umweltinformationen zur Verfügung zu stellen.</p>


    Bild von der App, Möglichkeit Emailadresse zu hinterlassen,
    damit wir den Link zuschicken / Rezept Ideen zuschicken /
    Feedback formular / Möglichkeit zum Bewerten der Information / Service
    `
  }
];
