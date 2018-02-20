import {Animated, Easing} from 'react-native'
import {AppLoading, Asset} from 'expo'
import PropTypes from 'prop-types'
import React, {Component} from 'react'

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image)
    } else {
      return Asset.fromModule(image).downloadAsync()
    }
  })
}

class BounceImage extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    style: PropTypes.object
  }

  state = {
    isReady: false
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('../config/assets/APLEONA_GruneKuche_Design_EntwurfA_Wortmarke.png'),
      require('../config/assets/Report-Icon-Products.jpg'),
      require('../config/assets/Report-Icon-Certificate.jpg'),
      require('../config/assets/Report-Icon-CO2.jpg'),
      require('../config/assets/Report-Icon-Menu.jpg'),
      require('../config/assets/Report-Icon-Award.jpg'),
      require('../config/assets/Report-Icon-Restaurant.jpg')
      // require("../config/assets/problem-CO2.jpg.b64.js"),
      // require("../config/assets/info.jpg.b64.js"),
      // require("../config/assets/problem-short-CO2.jpg.b64.js"),
      // require("../config/assets/problem-only-DE.jpg.b64.js"),
      // require("../config/assets/problem-only-DE2.jpg.b64.js"),
      // require("../config/assets/solution-CO2.jpg.b64.js"),
      // require("../config/assets/app-download.jpg.b64.js"),
      // require("../config/assets/labeling.jpg.b64.js"),
      // require("../config/assets/recipes.jpg.b64.js"),
      // require("../config/assets/circle.jpg.b64.js"),
      // require("../config/assets/fallstudie.jpg.b64.js"),
      // require("../config/assets/ingredients.jpg.b64.js"),
      // require("../config/assets/symbols.jpg.b64.js"),
      // require("../config/assets/report.pdf")
    ])

    await Promise.all([...imageAssets])
  }

  state = {
    xPosition: new Animated.Value(50),
    scale: new Animated.Value(1) // Initial value for opacity: 0
  }

  componentDidMount() {}

  constructor(props) {
    super(props)

    // Toggle the state every second
    setInterval(() => {
      Animated.sequence([
        Animated.parallel([
          Animated.timing(this.state.xPosition, {
            toValue: 100,
            duration: 400,
            easing: Easing.back()
          }),
          Animated.timing(this.state.scale, {
            toValue: 0.2,
            duration: 400,
            easing: Easing.back()
          })
        ]),
        Animated.parallel([
          Animated.timing(this.state.xPosition, {
            toValue: 50,
            duration: 400,
            easing: Easing.bounce
          }),
          Animated.timing(this.state.scale, {
            toValue: 1,
            duration: 400,
            easing: Easing.bounce
          })
        ])
        // Animated.spring(this.state.xPosition, {
        //   toValue: 80
        // })
      ]).start() // start the sequence group
    }, 4000) // change to 4000 before release
  }

  render() {
    let {xPosition} = this.state
    let {scale} = this.state
    // let display = this.state.showText ? this.props.text : " ";

    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({isReady: true})}
          onError={console.warn}
        />
      )
    }

    return (
      <Animated.View // Special animatable View
        style={{
          ...this.props.style,
          // animation: waggle 1s 3s forwards ease-outm,
          marginBottom: xPosition,
          transform: [
            {scale: scale},
            // { rotateY: xPosition },
            {perspective: 1000} // without this line this Animation will not render on Android while working fine on iOS
          ]
        }}
      >
        {this.props.children}
      </Animated.View>
    )
  }
}

export default BounceImage
