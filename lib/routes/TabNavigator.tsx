import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; //底部tabs
import {Text} from 'react-native';
import ButtonConfig from './config';
const Tabs = createBottomTabNavigator(); // 底部导航

const TabNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let fcolor = focused ? 'pink' : '#333';
          return (
            <Text
              style={{
                fontFamily: 'iconfont',
                color: fcolor,
                fontSize: global.font(30),
              }}>
              {ButtonConfig.map(item => {
                if (item.name == route.name) {
                  return (
                    <Text
                      key={item.name}
                      style={{
                        fontFamily: 'iconfont',
                        fontSize: global.font(30),
                      }}>
                      {item.iconfont}
                    </Text>
                  );
                }
              })}
            </Text>
          );
        },
        //底部字体大小
        tabBarLabelStyle: {
          fontSize: global.font(24),
        },
        tabBarActiveTintColor: 'pink',
        tabBarInactiveTintColor: '#333',
        headerShown: false,
      })}>
      {ButtonConfig.map(item => (
        <Tabs.Screen
          key={item.key}
          name={item.name}
          component={item.component}
        />
      ))}
    </Tabs.Navigator>
  );
};

export default TabNavigator;
