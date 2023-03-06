import {FlatList, Text} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {$apiSearchBook} from '../../api/modules/book';
import BuildBookItem from './BuildItem';
import type {IBookState, BookItem} from './type';
let firstLoading = true; //是否是第一次加载
const Book = ({navigation}) => {
  const [bookState, setBookState] = useState<IBookState>({
    list: [], // 数据列表
    count: 0, //总数
  }); //要展示的数据列表数组
  const [params, setParams] = useState({
    option: 'title',
    key: '全职高手',
    from: 1,
    size: 18,
  });
  const [loading, setLoading] = useState(false); // loading
  // 初始化数据
  const initData = useCallback(async () => {
    const res = await $apiSearchBook(params);
    if (res.code == 0) {
      const newList = res.data.map((v: BookItem) => {
        v.uri = v.cover.replace('http://', 'https://');
        return v;
      });
      setBookState({
        count: res.count,
        list: [...newList],
      });
    }
    firstLoading = false; // 不是第一次记载了就
    setLoading(false);
  }, [params]);

  // 触底加载
  const bottomLoad = () => {
    console.log('触底加载？');
    setParams({
      ...params,
      from: 2,
    });
  };

  // 下拉刷新
  const refreshHandler = () => {
    setLoading(true);
    initData();
  };

  //触摸子元素时进行跳转路由
  function onPressHandler(data: BookItem) {
    navigation.navigate('details', {
      data,
    });
  }
  useEffect(() => {
    setLoading(true);
    initData();
  }, [initData]);

  if (firstLoading) {
    const ele = <Text>请稍等。。</Text>;
    return ele;
  }
  return (
    <FlatList
      numColumns={3}
      /* 内容为空时的内容展示 */
      ListEmptyComponent={<Text>当前搜索暂无更多内容</Text>}
      /* 当距离底部多远时触发 onEndReached 函数 */
      onEndReachedThreshold={0.3}
      onEndReached={bottomLoad}
      /* 下拉刷新函数 */
      onRefresh={refreshHandler}
      refreshing={loading}
      keyExtractor={item => item.fictionId}
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
