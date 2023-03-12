import React, {useLayoutEffect} from 'react';
import {ScrollView, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Nav from '../../routes/components';
const Detail = props => {
  const navigation = useNavigation();
  const scrollHandler = e => {
    const y = e.nativeEvent.contentOffset.y;
    if (y > 140) {
      navigation.setOptions({
        header: () => <Detail.Layout list={list} />,
      });
    }
  };
  const list = Array.from({length: 35});
  navigation.setOptions({
    header: () => (
      <Detail.Layout scrollHandler={scrollHandler} {...props} list={list} />
    ),
  });
};

Detail.Layout = props => {
  const {list, scrollHandler} = props;
  return (
    <Nav.Layout>
      <ScrollView onScroll={scrollHandler} scrollEventThrottle={444}>
        <Image
          source={{
            uri: 'https://img95.699pic.com/photo/50152/9794.jpg_wh300.jpg',
          }}
          style={{width: '100%', height: global.pxw(400)}}
        />
        {list.map((_, index) => (
          <View
            key={index}
            style={{
              width: '100%',
              height: 50,
              backgroundColor: 'red',
              marginBottom: 20,
            }}
          />
        ))}
      </ScrollView>
    </Nav.Layout>
  );
};
export default Detail;
