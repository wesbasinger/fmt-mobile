import React from 'react';
import { Text, View, Button, Alert } from 'react-native';

import { graphql } from 'react-apollo';

import { getSingleCast } from '../queries';

const CastDetail = (props) => {

    const cast = (props.data.singleCast)

    if (cast) {
        return(
            <View>
                <Text>Cast Detail for {cast.firstName + " " + cast.lastName}</Text>
            </View>
        )
    } else {
        return(<View></View>)
    }
}


const LoadedCastDetail = graphql(getSingleCast, {
    options: (ownProps) => {
        return({variables: {id: ownProps.navigation.state.params.castId}})
    }
})(CastDetail)

export default LoadedCastDetail;
