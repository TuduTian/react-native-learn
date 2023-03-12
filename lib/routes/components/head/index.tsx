import React, {useState} from 'react';
import {View, Text, StatusBar, StyleSheet, NativeModules} from 'react-native';
import Back from '../back';
const {StatusBarManager} = NativeModules;
const TabHead = props => {
  const {title, showBack = false} = props;
  const [height, setHeigt] = useState(StatusBar.currentHeight);
  if (global.isIOS) {
    StatusBarManager.getHeight(statusBarHeight => {
      setHeigt(statusBarHeight.height);
    });
  }
  return (
    <>
      <View
        style={{
          ...styles.navContainer,
          paddingBottom: 10,
          paddingTop: props.children ? 0 : height,
          backgroundColor: props.children ? 'none' : '#fff',
        }}>
        <StatusBar
          translucent={true}
          backgroundColor="transparent"
          barStyle={'dark-content'}
        />
        {props.children ? (
          props.children
        ) : (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#000', fontSize: global.font(30)}}>
              {title}
            </Text>
          </View>
        )}
      </View>
      <Back showBack={showBack} title={props.params?.back_title} />
    </>
  );
};
const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
});

export default TabHead;
