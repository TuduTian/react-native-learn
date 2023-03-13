import React, {useState} from 'react';
import {View, Text, StatusBar, StyleSheet, NativeModules} from 'react-native';
import Back from '../back';
const {StatusBarManager} = NativeModules;
const NAV_BAR_HEIGHT = 40;
const TabHead = props => {
  /**
   * title 标题
   * showBack 是否展示返回按钮
   * opacity ：透明度
   * titleBarHeight : 标题栏高度
   * showTitle： 是否直接就展示标题栏 意思就是不沉浸式 默认为不沉浸式
   */
  const {
    title,
    showBack = false,
    opacity = 1,
    titleBarHeight = 30,
    showTitle = true,
  } = props;
  console.log(props, '#######');
  const [height, setHeigt] = useState(StatusBar.currentHeight);
  const backgroundColor = `rgba(0, 0, 0, ${opacity})`;
  if (global.isIOS) {
    StatusBarManager.getHeight(statusBarHeight => {
      setHeigt(statusBarHeight.height);
    });
  }
  return (
    <>
      <View
        style={[
          {
            height: NAV_BAR_HEIGHT + height,
          },
          TitleStyle.titleBarWrapper,
        ]}>
        <StatusBar
          translucent={true}
          backgroundColor={backgroundColor}
          barStyle={'dark-content'}
        />
        <View
          style={[
            TitleStyle.titleBarBg,
            {
              opacity: opacity,
            },
          ]}
        />
        <View
          style={[
            TitleStyle.titleBarContent,
            {
              marginTop: height,
              height: NAV_BAR_HEIGHT,
            },
          ]}>
          <Back showBack={showBack} />
          <Text style={{color: backgroundColor, fontSize: global.font(30)}}>
            {title}
          </Text>
        </View>
      </View>
    </>
  );
};
const TitleStyle = StyleSheet.create({
  titleBarWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    zIndex: 100,
    width: '100%',
  },
  titleBarContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 40,
  },
  titleBarBg: {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
});

export default TabHead;
