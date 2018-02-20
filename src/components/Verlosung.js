import React from 'react'
import styled from 'styled-components'

const VerlosungBase = styled.View``

const StyledWebView = styled.WebView`
  width: 1024px;
  height: 718px;
`
const Verlosung = () => (
  <VerlosungBase>
    <StyledWebView
      source={{
        uri: 'https://manuelklarmann.typeform.com/to/QBMh5I'
      }}
    />
  </VerlosungBase>
)

export default Verlosung
