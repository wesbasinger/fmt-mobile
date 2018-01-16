import React from 'react';
import { Text, View, TextInput, Picker, Switch, Button, Alert } from 'react-native';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import CastPicker from './CastPicker';

import isRemote from '../isRemote';

import { getSignIns } from '../queries';

class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      worker: "",
      castId: "",
      comment: "",
      remote: false,
      geolocation: {},
      slug: ""
    }

    this.handleCastChange = this.handleCastChange.bind(this);
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

  handleCastChange(fieldVal) {
    const delim = fieldVal.split(":");
    const castId = delim[0];
    const slug = delim[1];
    this.setState({castId, slug})
  }

  render() {

    var self = this;

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
        <CastPicker onCastChange={this.handleCastChange} castId={this.state.castId}/>
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
        <Button title="Submit" onPress={() => {

          if(isRemote(this.state.geolocation) && !this.state.remote) {
            Alert.alert(
              'Sign In Error',
              'Sorry, you must be on location or mark work from home.',
              [
                {text: 'Go back to sign in.', onPress: () => console.log('Go back pressed.')}
              ],
              { cancelable: true }
            )
          } else if (!this.state.worker || !this.state.castId) {
            Alert.alert(
              'Sign In Error',
              'Sorry, you must enter a value for worker and cast.',
              [
                {text: 'Go back to sign in.', onPress: () => console.log('Go back pressed.')}
              ],
              { cancelable: true }
            )
          } else {
            this.props.mutate({
              refreshQueries: [{query: getSignIns}],
              variables: {
                worker: this.state.worker,
                sessionSlug: this.state.slug,
                comment: this.state.comment,
                castId: this.state.castId,
                remote: this.state.remote
              }
            }).then(({data}) => {
              console.log(data);
              self.props.navigation.navigate('Home')
            }).catch((errors) => {
              console.log(errors);
              self.props.navigation.navigate('Home')
            })
          }
        }}/>
        <Text>{"Worker is: " + this.state.worker}</Text>
        <Text>{"Cast is: " + this.state.castId}</Text>
        <Text>{"Slug is: " + this.state.slug}</Text>
        <Text>{"Remote is: " + this.state.remote}</Text>
        <Text>{"Comment is: " + this.state.comment}</Text>
        <Text>{"geolocation is: " + JSON.stringify(this.state.geolocation)}</Text>
      </View>
    );
  }
}

const mutation = gql`
  mutation punchIn(
    $worker: String
    $sessionSlug: String
    $comment: String
    $castId: String
    $remote: Boolean) {
    punchIn(worker: $worker, sessionSlug: $sessionSlug, comment: $comment, castId: $castId, remote: $remote) {
        newHours {
            id
        }
    }
  }
`;

const MutationPage = graphql(mutation)(SignIn);

export default MutationPage;
