import React from 'react';
import { Text, View, TextInput, Picker, Switch } from 'react-native';

export default class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      worker: "",
      castId: "",
      comment: "",
      remote: false
    }
  }
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
        <View>
          <Text>Worker</Text>
          <TextInput
            value={this.state.worker}
            placeholder="enter worker name"
            onChangeText={(text) => {
              this.setState({worker: text})
            }}/>
        </View>
        <View>
          <Text>Cast Member</Text>
          <Picker
            selectedValue={this.state.castId}
            onValueChange={(val) => {this.setState({castId: val})}}>
            <Picker.Item label="Annabelle" value="Annabelle" />
            <Picker.Item label="Joey" value="Joey" />
            <Picker.Item label="Michael" value="Michael" />
          </Picker>
        </View>
        <View>
          <Text>Work from Home</Text>
          <Switch
            value={this.state.remote}
            onValueChange={(val) =>{this.setState({remote: val})}}
          />
        </View>
        <View>
          <Text>Comment</Text>
          <TextInput
            value={this.state.comment}
            placeholder="enter comment"
            onChangeText={(text) => {
              this.setState({comment: text})
            }}/>
        </View>
        <Text>{"Worker is: " + this.state.worker}</Text>
        <Text>{"Cast is: " + this.state.castId}</Text>
        <Text>{"Remote is: " + this.state.remote}</Text>
        <Text>{"Comment is: " + this.state.comment}</Text>
      </View>
    );
  }
}
