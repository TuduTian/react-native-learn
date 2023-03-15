import React from 'react';
import StackNavigator from './lib/routes/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {SWRConfig} from 'swr';
import {AppState} from 'react-native';
const App = () => {
  return (
    <SWRConfig
      value={{
        provider: () => new Map(),
        isVisible: () => {
          return true;
        },
        initFocus: callback => {
          let appState = AppState.currentState;
          const onAppStateChange = nextAppState => {
            /* 如果正在从后台或非 active 模式恢复到 active 模式 */
            if (
              appState.match(/inactive|background/) &&
              nextAppState === 'active'
            ) {
              callback();
            }
            appState = nextAppState;
          };
          // 订阅 app 状态更改事件
          const subscription = AppState.addEventListener(
            'change',
            onAppStateChange,
          );
          return () => {
            subscription.remove();
          };
        },
      }}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SWRConfig>
  );
};
export default App;
