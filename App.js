import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { TabNavigator } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';

//import Header from './components/Header';
//import Footer from './components/Footer';
import Landing from './components/Landing';
import Lookup from './components/Lookup';
import SignOut from './components/SignOut';
import SignIn from './components/SignIn';



export default RootTabs = TabNavigator({
  Home: {
    screen: Landing,
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


// export default class App extends React.Component {
//   render() {
//     return (
//       <NativeRouter>
//         <View style={{flex: 1}}>
//           <View style={{flex: 1}}>
//             <Header />
//           </View>
//           <View style={{flex: 8}}>
//             <Switch>
//               <Route exact path="/" component={Landing}/>
//               <Route path="/signIn" component={SignIn} />
//               <Route path="/signOut" component={SignOut} />
//               <Route path="/lookup" component={Lookup} />
//             </Switch>
//           </View>
//           <View style={{flex: 1}}>
//             <Footer />
//           </View>
//         </View>
//       </NativeRouter>
//     );
//   }
// }
