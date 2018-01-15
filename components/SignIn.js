import React from 'react';
import { Text, View, TextInput, Picker, Switch, Button } from 'react-native';

import CastPicker from './CastPicker';

export default class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      worker: "",
      castId: "",
      comment: "",
      remote: false,
      geolocation: {}
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      const geolocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
      this.setState({geolocation})
    })
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
        <CastPicker />
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
        <Button title="Submit" onPress={() => {console.log("Button pressed")}}/>
        <Text>{"Worker is: " + this.state.worker}</Text>
        <Text>{"Cast is: " + this.state.castId}</Text>
        <Text>{"Remote is: " + this.state.remote}</Text>
        <Text>{"Comment is: " + this.state.comment}</Text>
        <Text>{"geolocation is: " + JSON.stringify(this.state.geolocation)}</Text>
      </View>
    );
  }
}
