import {AxiosError, AxiosInstance, AxiosResponse} from 'axios';
import {RequestConfig} from '../../api/request';
import requestContianer from './requestContianer';

// 定义返回结果的数据类型
export interface ResultFormat<T> {
  data: null | T;
  err: AxiosError | null;
  response: AxiosResponse<T> | null;
}

// makeRequest 请求传参情况
interface MakerRequest {
  //没有参数，只有返回结果的定义
  <Payload = any>(config: RequestConfig): (
    requestConfig?: Partial<RequestConfig>,
  ) => Promise<ResultFormat<Payload>>;

  // 有data参数 post请求会用到， 这时需要传递两个参数
  <Payload, Data>(config: RequestConfig): (
    requestConfig?: Partial<Omit<RequestConfig, 'data'>> & {data: Data},
  ) => Promise<ResultFormat<Payload>>;

  // 有params 参数 get请求会用到 先把data和params 参数脱离掉，然后动态去添加
  <Payload, Data, Params>(config: RequestConfig): (
    requestConfig?: Partial<Omit<RequestConfig, 'data' | 'params'>> &
      ((Data extends undefined ? {data?: undefined} : {data: Data}) & {
        params: Params;
      }),
  ) => Promise<ResultFormat<Payload>>;

  //有args 参数 自定义参数 自定义参数是需要拦截器进行自行替换的
  <Payload, Data, Params, Args>(config: RequestConfig): (
    requestConfig: Partial<Omit<RequestConfig, 'data' | 'params' | 'args'>> &
      (Data extends undefined ? {data?: undefined} : {data: Data}) &
      (Params extends undefined ? {params?: undefined} : {params: Params}) & {
        args: Args;
      },
  ) => Promise<ResultFormat<Payload>>;
}

const makeRequest: MakerRequest = (config: RequestConfig) => {
  return async (requestConfig?: Partial<RequestConfig>) => {
    //合并请求参数
    const mergedConfig: RequestConfig = {
      ...config,
      ...requestConfig,
      header: {
        ...config.headers,
        ...requestConfig?.headers,
      },
    };

    // 统一的错误处理
    try {
      const {n, url} = findRequestContianer(mergedConfig.url);
      const response = await (requestContianer[n] as AxiosInstance).request(
        Object.assign(mergedConfig, {url}),
      );
      const {data} = response;
      return {err: null, data: data.data, response};
    } catch (err: any) {
      return {err, data: null, response: null};
    }
  };
};

// 看一下路径是需要什么来进行请求的
const findRequestContianer = (url?: string): {n: string; url: string} => {
  const n = url?.split(':')[0];
  const realUrl = url?.slice((n?.length as number) + 1);
  return {
    n: n as string,
    url: realUrl as string,
  };
};

export default makeRequest;
