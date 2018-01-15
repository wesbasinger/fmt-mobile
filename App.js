import React from 'react';

//import Header from './components/Header';
//import Footer from './components/Footer';
import RootTabs from './components/RootTabs'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset'

const httpLink = new HttpLink({ uri: 'http://fmt-gql-server.herokuapp.com/' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootTabs />
      </ApolloProvider>
    )
  }
}
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
