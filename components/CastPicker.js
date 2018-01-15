import React from 'react';

import { Text, View, Picker } from 'react-native';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class CastPicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      castId: ""
    }
  }

  render() {
    return(
      <View>
        <Text>Cast Member</Text>
        <Picker
          selectedValue={this.state.castId}
          onValueChange={(val) => {this.setState({castId: val})}}>
          {
            this.props.data.activeCast ?
              this.props.data.activeCast.map((cast) => {
                return(
                  <Picker.Item key={cast.id} label={cast.firstName} value={cast.id} />
                )
              }) : <Picker.Item label="---" value="---" />
          }
        </Picker>
      </View>
    )
  }
}

const query = gql`
  query {
    activeCast {
      id
      firstName
      lastName
      sessions {
        slug
      }
    }
}`

const LoadedCastPicker = graphql(query)(CastPicker);

export default LoadedCastPicker;
