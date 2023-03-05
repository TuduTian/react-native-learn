import Book from '../../pages/Book';
import Cartoon from '../../pages/Cartoon';

/**
 * 底部导航
 */
const ButtonConfig = [
  {
    name: '小说',
    component: Book,
    key: 'book',
    iconfont: '\ue614',
  },
  {
    name: '漫画',
    component: Cartoon,
    key: 'cartoon',
    iconfont: '\ue62b',
  },
];
export default ButtonConfig;
