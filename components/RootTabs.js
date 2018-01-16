import React from 'react';

import { TabNavigator } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';

//import Header from './components/Header';
//import Footer from './components/Footer';
import Home from './Home';
import Lookup from './Lookup';
import SignOut from './SignOut';
import SignIn from './SignIn';
import CastDetail from './CastDetail';

export default RootTabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor, focused}) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{color: tintColor}} />
      ),
    },
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      tabBarLabel: 'SignIn',
      tabBarIcon: ({tintColor, focused}) => (
        <Ionicons
          name={focused ? 'ios-add' : 'ios-add-outline'}
          size={26}
          style={{color: tintColor}} />
      ),
    },
  },
  SignOut: {
    screen: SignOut,
    navigationOptions: {
      tabBarLabel: 'SignOut',
      tabBarIcon: ({tintColor, focused}) => (
        <Ionicons
          name={focused ? 'ios-barcode' : 'ios-barcode-outline'}
          size={26}
          style={{color: tintColor}} />
      ),
    },
  },
  Lookup: {
    screen: Lookup,
    navigationOptions: {
      tabBarLabel: 'Lookup',
      tabBarIcon: ({tintColor, focused}) => (
        <Ionicons
          name={focused ? 'ios-search' : 'ios-search-outline'}
          size={26}
          style={{color: tintColor}} />
      ),
    },
  },
})
