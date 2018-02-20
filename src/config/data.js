import {apleona} from './assets/apleona.jpg.b64.js'
import {circle} from './assets/circle.jpg.b64.js'
import {eaternity} from './assets/eaternity.jpg.b64.js'
import {fallstudie} from './assets/fallstudie.jpg.b64.js'
import {ingredients} from './assets/ingredients.jpg.b64.js'
import {label} from './assets/labeling.jpg.b64.js'
import {problemCO2} from './assets/problem-CO2.jpg.b64.js'
import {problemShortCO2} from './assets/problem-short-CO2.jpg.b64.js'
import {qnips} from './assets/app-download.jpg.b64.js'
import {recipes} from './assets/recipes.jpg.b64.js'
import {solutionCO2} from './assets/solution-CO2.jpg.b64.js'
import {symbols} from './assets/symbols.jpg.b64.js'
import AboutApleonaAndEaternity from '../components/AboutApleonaAndEaternity'
import Bilanz from '../components/Bilanz'
import EssenUndKlimawandel from '../components/EssenUndKlimawandel'
import KlimafreundlicheMenus from '../components/KlimafreundlicheMenus'
import Reports from '../components/Reports'
import Verlosung from '../components/Verlosung'

// import { parallax } from "./assets/home-parallax.jpg.b64.js";

export const screens = [
  {
    title: 'Essen und Klimawandel',
    subtitle: 'Welcher Herausforderung müssen wir uns zum Klimawandel stellen?',
    id: 'problem',
    picture: {
      large: require('./assets/essen_und_klima_feld.jpg'),
      thumbnail: require('./assets/Report-Icon-CO2.jpg')
    },
    content: EssenUndKlimawandel
  },
  {
    title: 'CO₂ Bilanz dieses Restaurants',
    subtitle: 'Wieviel Emissionen wurden im Monat Dezember verursacht?',
    id: 'restaurant',
    picture: {
      thumbnail: require('./assets/Report-Icon-Restaurant.jpg')
    },
    content: Reports
  },
  {
    title: 'CO₂ Bilanz der Menus im Angebot',
    subtitle:
      'Wieviel Emissionen haben die Menus im Monat Dezember verursacht?',
    id: 'menus',
    picture: {
      large: '',
      thumbnail: require('./assets/Report-Icon-Menu.jpg')
    },
    content: Bilanz
  },
  {
    title: 'Klimafreundliche Menus',
    subtitle: 'Wann bekommt ein Menu die Auszeichnung «klimafreundlich»?',
    id: 'award',
    picture: {
      large: 'http://www.eaternity.org/img/eat-at-home/eatathome-parallax.jpg',
      thumbnail: require('./assets/Report-Icon-Products.jpg')
    },
    content: KlimafreundlicheMenus
  },
  {
    title: 'An der Verlosung teilnehmen',
    subtitle: 'Klimafreundliche Fragen beantworten und gewinnen.',
    id: 'win',
    picture: {
      large: 'http://www.eaternity.org/img/home/screens.png',
      thumbnail: require('./assets/Report-Icon-Certificate.jpg')
    },
    content: Verlosung
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
    title: 'Über Apleona und Eaternity',
    subtitle: 'Neugierig geworden? Erfahren Sie mehr.',
    id: 'app',
    picture: {
      large: '',
      thumbnail: require('./assets/Report-Icon-Award.jpg')
    },
    content: AboutApleonaAndEaternity
  }
]
