import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NativeRouter, Switch, Route } from 'react-router-native';

import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Lookup from './components/Lookup';
import SignOut from './components/SignOut';
import SignIn from './components/SignIn';


export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={{flex: 1}}>
          <View style={{flex: 1}}>
            <Header />
          </View>
          <View style={{flex: 8}}>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route path="/signIn" component={SignIn} />
              <Route path="/signOut" component={SignOut} />
              <Route path="/lookup" component={Lookup} />
            </Switch>
          </View>
          <View style={{flex: 1}}>
            <Footer />
          </View>
        </View>
      </NativeRouter>
    );
  }
}
