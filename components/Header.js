import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Link } from 'react-router-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flex: 1}}>
          <Link to="/"><Text>Home</Text></Link>
        </View>
        <View style={{flex: 1}}>
          <Link to="/signIn"><Text>Sign In</Text></Link>
        </View>
        <View style={{flex: 1}}>
          <Link to="/signOut"><Text>Sign Out</Text></Link>
        </View>
        <View style={{flex: 1}}>
          <Link to="/lookup"><Text>Lookup</Text></Link>
        </View>
      </View>
    );
  }
}
