import {FlatList, Text, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import BuildBookItem from './BuildItem';
import type {IBookState, BookItem} from './type';
import BOOK_DATA from '../../../db/book';
import styled from 'styled-components';
let ID = 1;
let count = 0;
const FooterComponents = styled.View`
  height: ${global.pxw(80)}px;
  width: 100%;
  padding-bottom: ${global.pxw(20)}px;
  justify-content: center;
  align-items: center;
`;

const Font = styled.Text`
  font-size: 16px;
  color: #000;
`;

const Book = ({navigation}) => {
  const [bookState, setBookState] = useState<IBookState>({
    list: [], // 数据列表
    count: 20, //总数
  }); //要展示的数据列表数组
  const [loading, setLoading] = useState(false); // loading
  const [end, setEnd] = useState(false);
  // 初始化数据
  const initData = (bool?: boolean) => {
    if (bool) {
      setTimeout(() => {
        setBookState({
          list: bookState.list.reverse(),
          count: bookState.count,
        });
        setLoading(false);
      }, 1000);
      return;
    }

    if (count === 3) {
      setEnd(true);
      return;
    }

    count++;
    const newList = BOOK_DATA.map((v: BookItem) => {
      v.uri = v.cover.replace('http://', 'https://');
      v.id = ++ID + Date.now();
      return v;
    });
    setBookState({
      list: [...bookState.list, ...newList],
      count: bookState.count,
    });
    setLoading(false);
  };
  // 触底加载
  const bottomLoad = () => {
    initData();
  };
  // 下拉刷新·
  const refreshHandler = () => {
    setLoading(true);
    initData(true);
  };

  //触摸子元素时进行跳转路由
  function onPressHandler(data: BookItem) {
    navigation.navigate('details', {
      data,
      title: data.title,
      back_title: '小说',
    });
  }

  useEffect(() => {
    setLoading(true);
    initData();
  }, []);

  const BuildFooter = () => {
    if (end) {
      return (
        <FooterComponents>
          <Font>已全部加载完成</Font>
        </FooterComponents>
      );
    }
    return (
      <FooterComponents>
        <ActivityIndicator size="large" color="yellow" />
      </FooterComponents>
    );
  };
  return (
    <FlatList
      numColumns={3}
      /* 内容为空时的内容展示 */
      ListEmptyComponent={<Text>当前搜索暂无更多内容</Text>}
      /* 当距离底部多远时触发 onEndReached 函数 */
      onEndReached={bottomLoad}
      /* 尾部组件 可以展示一个loading */
      ListFooterComponent={BuildFooter}
      /* 下拉刷新函数 */
      onRefresh={refreshHandler}
      refreshing={loading}
      keyExtractor={item => item.id}
      contentContainerStyle={{
        padding: global.pxw(10),
      }}
      data={bookState.list}
      renderItem={({item}) => (
        <BuildBookItem onPress={onPressHandler} item={item} />
      )}
    />
  );
};
export default Book;
