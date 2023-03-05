import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
const Stack = createNativeStackNavigator();
import router from './index';
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
            key={index}
            name={item.name}
            component={item.component}
            options={({route}) => ({
              title: getChildTitle(route) || item.title,
              headerStyle: {
                backgroundColor: 'pink',
                height: 40,
              },
              headerTitleStyle: {
                color: '#000',
                fontSize: 15,
              },
              headerShown: true, //不显示头部标题
            })}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default StackNavigator;
