import React from 'react'
import styled from 'styled-components'

const ReportsBase = styled.View`
  padding: 0px;
`

const StyledWebView = styled.WebView`
  width: 100%;
  height: 960px;
`
const Reports = () => (
  <ReportsBase>
    <StyledWebView
      source={{
        uri:
          'http://www.eaternity.org/assets/EaternityGuests/reports/DE-2018-05-28104-Gast.htm'
      }}
    />
  </ReportsBase>
)

export default Reports
