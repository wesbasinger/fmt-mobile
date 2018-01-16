import React from 'react';
import { Text, View, Picker, Button, Alert } from 'react-native';

import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';

import { getSignIns } from '../queries';

class SignOut extends React.Component {

  constructor(props) {
    super(props);
    this.state = {hourId: ""}
  }
  render() {

    var self = this;

    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
        <Text>Worker</Text>
        <Picker
          selectedValue={this.state.hourId}
          onValueChange={(val) => {this.setState({hourId: val})}}>
          <Picker.Item value="" label="---"/>
          {
            this.props.data.signIns ?
            this.props.data.signIns.map((signIn) => {
              return(
                <Picker.Item key={signIn.id} value={signIn.id} label={signIn.worker}/>
              )
            }) : <Picker.Item value="" label="" />
          }
        </Picker>
        <Button title="Submit" onPress={ () => {

          if(!this.state.hourId) {
            Alert.alert(
              'Sign Out Error',
              'Please select a worker to sign out.',
              [
                {text: 'Go back to sign out.', onPress: () => console.log('Go back pressed.')}
              ],
              { cancelable: true }
            )
          } else {
            this.props.mutate({
                variables: {hoursId: this.state.hourId}
            }).then(({data}) => {
                console.log(data)
                self.props.navigation.navigate('Home');
            }).catch((error) => {
                console.log(error)
                self.props.navigation.navigate('Home')
            })
          }
        }}/>
      </View>
    );
  }
}

const mutation = gql`
mutation punchOut($hoursId: String) {
  punchOut(hoursId: $hoursId) {
      newHours {
          id
      }
  }
}
`

const LoadedSignOut = compose(graphql(getSignIns), graphql(mutation))(SignOut)

export default LoadedSignOut;
