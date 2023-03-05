class Http {
  async GET(url: string, options: any) {
    console.log(url);
    const res = await fetch(url, {
      method: 'get',
      headers: {
        ...options.headers,
      },
      body: options.data,
    });
    const resp = await res.json();
    return resp;
  }
}

export default new Http();
