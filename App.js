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
        <View>
          <Header />
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route path="/signIn" component={SignIn} />
            <Route path="/signOut" component={SignOut} />
            <Route path="/lookup" component={Lookup} />
          </Switch>
          <Footer />
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
