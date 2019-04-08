import React from 'react';
import {Button,Platform} from 'react-native';
import { createAppContainer, createStackNavigator,createBottomTabNavigator,createDrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import NewContact from '../screens/NewContact';
import Me from '../screens/Me';

import {DrawerButton} from '../components/Header';

const LeftDrawerButton = ({navigation}) => {
    if(Platform.OS==='android'){
        return <DrawerButton onPress={() => navigation.openDrawer()} />;
    }
    else
        return null;
}

export const MainNavigator = createStackNavigator({
    Contacts: {
        screen: Contacts,
        navigationOptions:(props)=>({
            title:'Contacts',
            headerLeft: <LeftDrawerButton {...props}/>,
        }),
    },
    Details: {
        screen: Details,
        navigationOptions:{
            title:'Details',
        },
    },
}, {
    initialRouteName: 'Contacts',
});

export const NewContactNavigator = createStackNavigator({
    NewContact: {
        screen: NewContact,
        navigationOptions:(props)=>({
            title:'New Contact',
            headerLeft: <LeftDrawerButton {...props}/>,
        }),
    },
});

export const MeNavigator = createStackNavigator({
    Me: {
        screen: Me,
        navigationOptions:(props)=>({
            title:'Me',
            headerLeft: <LeftDrawerButton {...props}/>,
        }),
    },
});


export const Tabs = createBottomTabNavigator({
    Contact:{
        screen: MainNavigator,
        navigationOptions:{
            tabBarLabel:'Contacts',
            tabBarIcon: ({tintColor}) => <Icon name='ios-list' size={35} color={tintColor}/>
        }
    },
    NewContact:{
        screen: NewContactNavigator,
        navigationOptions:{
            tabBarLabel:'New Contact',
            tabBarIcon: ({tintColor}) => <Icon name='ios-add' size={35} color={tintColor}/>
        }
    },
    Me:{
        screen: MeNavigator,
        navigationOptions:{
            tabBarLabel:'Me',
            tabBarIcon: ({tintColor}) => <Icon name='ios-contact' size={35} color={tintColor}/>
        }
    },
});

export const Drawer = createDrawerNavigator({
    Contact:{
        screen:MainNavigator,
        navigationOptions:{
            drawerLabel:'Contacts'
        },
    },
    NewContact:{
        screen:NewContactNavigator,
        navigationOptions:{
            drawerLabel:'New Contact'
        },
    },
    Me:{
        screen:MeNavigator,
        navigationOptions:{
            drawerLabel:'Me'
        },
    },
});


export const DrawerApp = createAppContainer(Drawer);
export const TabsApp = createAppContainer(Tabs);