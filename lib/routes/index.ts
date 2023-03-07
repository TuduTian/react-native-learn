const router = [
  {
    name: 'index', // 跳转路径
    title: '小说', // 头部展示标题
    component: require('./TabNavigator').default,
  },
  //下面只需要配置非tabbar页面路径
  {
    name: 'details', // 详情页
    title: '小说详情', // 头部展示标题
    component: require('../pages/Book/Detail').default,
  },
];
export default router;
