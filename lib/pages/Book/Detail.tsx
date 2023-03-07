import React, {useLayoutEffect} from 'react';
import {View, Text} from 'react-native';
const Detail = props => {
  const {data} = props.route.params;
  /**
   * 当这个函数触发的时候动态写入 导航栏的title
   */
  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: data.title + '-详情页',
    });
  }, [props.navigation, data.title]);
  return (
    <View>
      <Text>123123</Text>
    </View>
  );
};
export default Detail;
