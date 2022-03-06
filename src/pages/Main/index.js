import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

import {createBottomTabNavigator} from '@react-natigation/bottom-tabs';

import Principal from '../Principal';
import Prefil from '../Perfil';

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <Tab.Navigator screenOption={
       ({ route }) => ({
           tabBarIcon: ({ focused, color, size })=>{

             let iconName;

             if(routes.name === 'Principal'){
                  iconName = 'home';
             }else if(routes.name === 'Perfil'){
                  iconName = 'user';
             }

              return <Feather name={iconName} size={size} color={color} />;
           },

        })}

       taBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray'
       }}>

      <Tab.Screen name="Principal" component={Principal} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}
