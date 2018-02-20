import {ScrollView} from 'react-native'
import PropTypes from 'prop-types'
import React, {Component} from 'react'
import styled from 'styled-components'

// function TileExtra(props) {
//   if (typeof props.picture.large !== "undefined") {
//     return (
//       <Tile
//         imageSrc={props.picture.large}
//         featured
//         title={props.title.toUpperCase()}
//         caption={props.subtitle}
//       />
//     );
//   }
//   return (
//     <Tile featured title={props.title.toUpperCase()} caption={props.subtitle} />
//   );
// }

const StyledView = styled.View`
  background-color: #ffffff;
  padding-bottom: 0;
  padding-top: 0;
`

class ScreenDetail extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  render() {
    const {content: Content} = this.props.navigation.state.params

    return (
      <ScrollView>
        {/* <TileExtra
          imageSrc={picture.large}
          featured
          title={title.toUpperCase()}
          caption={subtitle}
        /> */}
        <StyledView>
          <Content />
        </StyledView>
      </ScrollView>
    )
  }
}

export default ScreenDetail
