import React, {useState} from 'react';
import {ScrollView, View, Image} from 'react-native';
import Nav from '../../routes/components';
const TITLE_BAR_HEIGHT = 200;
const Detail = () => {
  const [titleBarView, setTitleBarView] = useState<number>(0);
  // 监听列表滚动事件
  const scrollViewScroll = event => {
    const y = event.nativeEvent.contentOffset.y;
    // 设置标题栏和状态栏的透明度 titleOpacity
    // 当页面滚动的距离等于标题栏的高度时，其透明度变为1
    const scale = (y * 1.0) / TITLE_BAR_HEIGHT;
    setTitleBarView(scale);
  };
  const list = Array.from({length: 30});
  return (
    <View>
      {/*沉浸式标题*/}
      <Nav.TabHead
        showTitle={false}
        opacity={titleBarView}
        titleBarHeight={TITLE_BAR_HEIGHT}
        showBack={true}
        title={'测试测试'}
      />
      <ScrollView scrollEventThrottle={100} onScroll={scrollViewScroll}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRagCHul6AikIkxabQvzt7HapBjhxjm0JK8rg&usqp=CAU',
          }}
          style={{width: '100%', height: global.pxw(600)}}
        />
        {list.map((item, index) => (
          <View
            key={index}
            style={{
              width: '100%',
              height: 40,
              backgroundColor: 'green',
              marginBottom: 10,
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Detail;
