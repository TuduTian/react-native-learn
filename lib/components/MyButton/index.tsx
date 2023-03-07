import React, {ReactNode} from 'react';

import {
  TouchableNativeFeedback,
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
    <TouchableNativeFeedback onPress={onPressHandler}>
      <View style={{alignItems: 'center'}}>
        <View style={style}>
          <Text style={{color: '#fff'}}> {children}</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default MyButton;
