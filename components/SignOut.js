import React from 'react';
import { Text, View, Picker } from 'react-native';

export default class SignOut extends React.Component {

  constructor(props) {
    super(props);
    this.state = {hourId: ""}
  }
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
        <Text>Worker</Text>
        <Picker
          selectedValue={this.state.hourId}
          onValueChange={(val) => {this.setState({hourId: val})}}>
          <Picker.Item value="" label="---"/>
          <Picker.Item value="Wes Basinger" label="Evil Twin"/>
          <Picker.Item value="Wesley Basinger" label="The Real Wes"/>
        </Picker>
        <Text>{this.state.hourId}</Text>
      </View>
    );
  }
}
