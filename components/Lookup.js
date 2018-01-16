import React from 'react';
import { Text, View, Button } from 'react-native';

import { StackNavigator } from 'react-navigation';

import CastPicker from './CastPicker';
import CastDetail from './CastDetail'

class Lookup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      castId: "",
      slug: ""
    }

    this.handleCastChange = this.handleCastChange.bind(this);
  }

  static navigationOptions = {
    title: 'Lookup'
  }

  handleCastChange(fieldVal) {
    const delim = fieldVal.split(":");
    const castId = delim[0];
    const slug = delim[1];
    this.setState({castId, slug})
  }

  render() {

    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
        <CastPicker onCastChange={this.handleCastChange} />
        <Button title="Lookup" onPress={()=>{
          this.props.navigation.navigate('CastDetail', {castId: this.state.castId, slug: this.state.slug})
        }}/>
      </View>
    );
  }
}

const ModalStack = StackNavigator({
  Lookup: {
    screen: Lookup,
  },
  CastDetail: {
    screen: CastDetail,
  },
});


export default ModalStack;
