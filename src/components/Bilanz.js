import React from 'react'
import styled from 'styled-components'

import {StyledImage} from './Image'

const BilanzBase = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 960px;
`
const Bilanz = () => (
  <BilanzBase>
    <StyledImage source={require('../config/assets/app-download.jpg')} />
    <StyledImage source={require('../config/assets/labeling.jpg')} />
  </BilanzBase>
)

export default Bilanz
