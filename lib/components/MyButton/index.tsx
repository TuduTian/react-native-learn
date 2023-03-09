import React, {ReactNode} from 'react';

import {
  TouchableOpacity,
  View,
  Text,
  GestureResponderEvent,
} from 'react-native';

interface Iprops {
  children: ReactNode;
  onPress: (event: GestureResponderEvent) => void;
  style?: Object;
}

const MyButton = (props: Iprops) => {
  const {onPress: onPressHandler, children, style} = props;
  return (
    /* activeOpacity 激活时的透明度，  */
    <TouchableOpacity activeOpacity={0.8} onPress={onPressHandler}>
      <View style={{alignItems: 'center'}}>
        <View style={style}>
          <Text style={{color: '#fff', fontSize: global.font(28)}}>
            {' '}
            {children}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MyButton;
