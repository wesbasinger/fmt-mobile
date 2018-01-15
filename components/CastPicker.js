import React from 'react';

import { Text, View, Picker } from 'react-native';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class CastPicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pickerValue: ""
    }
  }

  render() {
    return(
      <View>
        <Text>Cast Member</Text>
        <Picker
          onValueChange={(val) => {
            this.setState({pickerValue: val})
            this.props.onCastChange(val)}}
            selectedValue={this.state.pickerValue}>
          {
            this.props.data.activeCast ?
              this.props.data.activeCast.map((cast) => {
                return(
                  <Picker.Item
                    key={cast.id} label={cast.firstName + " " + cast.lastName}
                    value={cast.id + ":" + cast.sessions[0].slug} />
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
