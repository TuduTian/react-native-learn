## 调试
1. cnpm install -g react-devtools
2. react-devtools

## 调试网络请求
1. 找到 node_modules下面的react-native/Libraries/Core/InitializeCore.js 打开并且在末尾添加
```js
//下面代码是让工具可以看到网络请求
	global.XMLHttpRequest = global.originalXMLHttpRequest
	  ? global.originalXMLHttpRequest
	  : global.XMLHttpRequest
	global.FormData = global.originalFormData
	  ? global.originalFormData
	  : global.FormData
	fetch // Ensure to get the lazy property
	if (window.__FETCH_SUPPORT__) {
	  // it's RNDebugger only to have
	  window.__FETCH_SUPPORT__.blob = false
	} else {
	  /*
	   * Set __FETCH_SUPPORT__ to false is just work for `fetch`.
	   * If you're using another way you can just use the native Blob and remove the `else` statement
	   */
	  global.Blob = global.originalBlob ? global.originalBlob : global.Blob
	  global.FileReader = global.originalFileReader
	    ? global.originalFileReader
	    : global.FileReader
	}
```
2. 打开react-native-debugger就可以了


## ios图片出不来的原因，http的原因 因为一下安全策略
1. 把http的换成https就可以正常展示图片了，ios的安全措施


## iconfont的使用 
1. 最外层新建一个文件 react-native.config.js
2. 写入 module.exports = {assets: ['./assets/iconfont/'],}; 你的iconfont在哪里就写哪里
3. 下载一个包  yarn add react-native-asset
4. 终端运行 react-native-asset
5. 配置iconfont fontFamily 必须是iconfont 剩下就是 \u后面的字符集
```jsx
	//demo   iconfont &#xe614;  可见 lib文件下面的routes下面的 config.ts文件
	<Text stlye={{fontFamily:'iconfont'}}>'\ue614'</Text>
```


