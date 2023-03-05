import {BASE_URL} from '../base';
import http from '../feach';
// 搜索小说
export const $apiSearchBook = ({option, key, from, size}, options?: any) =>
  http.GET(
    `${BASE_URL}/fiction/search/${option}/${key}/${from}/${size}`,
    options || {},
  );
