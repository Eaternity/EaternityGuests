import React from 'react'
import styled from 'styled-components'
import {Dimensions} from 'react-native'

import {StyledImage} from './Image'

const dimensions = Dimensions.get('window')
const imageHeight = Math.round(dimensions.width * 1587 / 1123)
const imageWidth = dimensions.width

const BilanzBase = styled.View``

const AllImage = styled.Image.attrs({
  resizeMode: 'contain'
})`
  width: ${imageWidth}px;
  height: ${imageHeight}px;
`

const Bilanz = () => (
  <BilanzBase>
    <AllImage source={require('../config/assets/CUL_App_Plakat_A3_BUMB.jpg')} />
    {/* <StyledImage source={require('../config/assets/app-download.jpg')} /> */}
    <StyledImage source={require('../config/assets/labeling.jpg')} />
  </BilanzBase>
)

export default Bilanz
