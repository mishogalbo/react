import React,{Component} from 'react';
import {View,Text} from 'react-native';

import {Header,Actions,Info} from '../components/UserDetails';
import colors from '../config/colors';
import { ScrollView } from 'react-native-gesture-handler';

class Details extends Component {
    render(){
        const contact = this.props.navigation.state.params;

        return (
            <ScrollView style={{backgroundColor:colors.background}}>
                <Header {...contact}/>
                <Actions {...contact}/>
                <Info {...contact}/>
            </ScrollView>
        );
    }
}

export default Details;