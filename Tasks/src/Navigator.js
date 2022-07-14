import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Auth from './screens/Auth'
import TaskList from './screens/TaskList'

import AuthOrApp from './screens/AuthOrApp'
import Menu from './screens/Menu'
import commonStyles from './commonStyles'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const menuConfig = {
    labelStyle: {
        fontFamily: commonStyles.fontFamily,
        fontWeight: 'normal',
        fontSize: 20,
    },
    activeTintColor: '#080',
    headerShown: false,
}

const DrawerNavigator = props => {
    const { email, name } = props.params

    return(
        <Drawer.Navigator screenOptions = { menuConfig}
            drawerContent={(props)=> <Menu {...props} email={email} name={name}/>}>
                <Drawer.Screen name= "Today" options={{ title: 'Hoje' }}>
                    {props => <TaskList {...props} title='Hoje' dayAshed={0} />}
                </Drawer.Screen>
                <Drawer.Screen name= "Today" options={{ title: 'Amanhã' }}>
                    {props => <TaskList {...props} title='Amanhã' dayAshed={1} />}
                </Drawer.Screen>
                <Drawer.Screen name= "Today" options={{ title: 'Semana' }}>
                    {props => <TaskList {...props} title='Semana' dayAshed={7} />}
                </Drawer.Screen>
                <Drawer.Screen name= "Today" options={{ title: 'Mês' }}>
                    {props => <TaskList {...props} title='Mês' dayAshed={30} />}
                </Drawer.Screen>
        </Drawer.Navigator>
    )
}

const AuthNavigator = () => {
    return(
       <Stack.NavigationContainer screenOptions={{ headerShown: false}}>
            <Stack.Screen name = "AuthOrApp" component = {AuthOrApp} />
            <Stack.Screen name = "Auth" component = {Auth} />
            <Stack.Screen name = "Home" component = {DrawerNavigator} />
       </Stack.NavigationContainer>
    )
}

const Navigator = () => {
    return(
        <NavigationContainer>
            <AuthNavigator/>
        </NavigationContainer>
    )
}

export default Navigator