
# 组件的使用
## FlatList 组件  
1. numColumns 水平方向展示几个项目 默认为1
2. data要展示的数组
3. ListEmptyComponent 内容为空的时候展示的组件
4. onEndReachedThreshold={0.3} 和 onEndReached={bottomLoad} 触底加载
5. onRefresh + refreshing 下拉刷新 refreshing的loading要是可控的
6. renderItem渲染器，渲染的组件
```jsx
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
```

## TouchableNativeFeedback组件的使用
**如果是FlatList组件下面的每一项都要套用处理手势的组件的话，一定要使用这个组件，其他的貌似有问题**
1. onpress事件

## text 组件的换行 以及溢出省略号
1. numberOfLines  2  最多2行
2. ellipsizeMode 溢出的时候如何处理 好几种可能性

## image 组件必须要进行设置宽高，不然是无法进行显示的