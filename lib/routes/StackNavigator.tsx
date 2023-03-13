import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
const Stack = createNativeStackNavigator();
import router from './index';
import Nav from './components';

const StackNavigator = () => {
  //从子导航器获取路由名称
  const getChildTitle = route => {
    const routeName = getFocusedRouteNameFromRoute(route);
    return routeName;
  };
  return (
    <Stack.Navigator>
      {router.map((item, index) => {
        return (
          <Stack.Screen
            name={item.name}
            key={index}
            component={item.component}
            options={({route}) => {
              const title =
                getChildTitle(route) || route.params?.title || item.title;
              return {
                header: () => {
                  return null;
                },
              };
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default StackNavigator;
