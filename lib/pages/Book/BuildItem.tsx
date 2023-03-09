import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {BookItem} from './type';
interface IProps {
  item: BookItem;
  onPress: Function;
}

const BuildBookItem = (props: IProps) => {
  const {item, onPress} = props;
  return (
    <View style={styles.card}>
      <TouchableOpacity activeOpacity={0.6} onPress={() => onPress(item)}>
        <Image style={styles.image} source={{uri: item.uri}} />
        {/*
       numberOfLines 最多两行  ellipsizeMode 超过的话省略号
        参考：https://reactnative.dev/docs/text
      */}
        <Text
          ellipsizeMode="tail"
          numberOfLines={2}
          style={{textAlign: 'center'}}>
          {item.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '33%',
    padding: global.pxw(8),
  },
  image: {
    width: '100%',
    height: global.pxw(300),
    marginBottom: global.pxw(20),
  },
});

export default BuildBookItem;
