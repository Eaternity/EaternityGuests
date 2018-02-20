import {Dimensions} from 'react-native'
import styled from 'styled-components'

const dimensions = Dimensions.get('window')
const imageHeight = Math.round(dimensions.width * 9 / 16)
const imageWidth = dimensions.width

export const StyledImage = styled.Image.attrs({
  resizeMode: 'contain'
})`
  flex: 1;
  align-self: stretch;
  width: ${imageWidth}px;
  height: ${imageHeight}px;
`
