import React from 'react';
import { Text, View, Button } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>
          Welcome to the FMT Workday App
        </Text>
        <Button title="Sign In" onPress={(e) => {
          this.props.navigation.navigate('SignIn')
        }}/>
        <Button title="Sign Out" onPress={(e) => {
          this.props.navigation.navigate('SignOut')
        }}/>
      </View>
    );
  }
}
