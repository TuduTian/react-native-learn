interface BookItem {
  fictionId: string;
  title: string;
  author: string;
  fictionType: string;
  descs: string;
  cover: string;
  updateTime: string;
  [props: string]: any;
}
interface IBookState {
  list: Array<BookItem>;
  count: number;
}

export {IBookState, BookItem};
