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
2. 打开 react-native-debugger 就可以了


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




## 打包安卓 (mac)
1. 没有的key的话看这里
	1. 查自己的MAC ,有没有安装Java的 JDK 终端输入 /usr/libexec/java_home -V
	2. 如果安装过的话会提示她的安装路径 ==> /Library/Java/JavaVirtualMachines/zulu-11.jdk/Contents/Home
	3. 进入这个文件后执行 sudo keytool -genkey -alias 你的key名称.keystore -keyalg RSA -sigalg SHA1WithRSA -validity 20000 -keysize 1024 -keystore 你的别名  -v
	4. 按照提示进行输入后 在此进行在终端执行 sudo keytool -importkeystore -srckeystore ./你的key名称.keystore -destkeystore 你的别名 -deststoretype JKS
	5. 这过程是要输入密码的，密码就是你生成的时候输入的密码，这个密码要记住哦
	6. 如果提示的是成功导入的话，那么恭喜您成功了！
	
2. 有key的情况下，按照1查询到java进入到java的文件 可以查看.keystore结尾的文件，他就是你的key
3. 把key复制到 android 下面的app目录下
4. 在 android 目录下面的 gradle.properties 文件中添加
```js
# 配置签名  
MYAPP_RELEASE_STORE_FILE=你的key名称 例如 cc.keystore
MYAPP_RELEASE_KEY_ALIAS=你写入的别名 cc 或者是 cc.keystore
MYAPP_RELEASE_STORE_PASSWORD= 你生成key时的密码
MYAPP_RELEASE_KEY_PASSWORD=你生成key时的密码
```
5. 前往 /android/app/build.gradle 假如
```js
...
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
                storeFile file(MYAPP_RELEASE_STORE_FILE)
                storePassword MYAPP_RELEASE_STORE_PASSWORD
                keyAlias MYAPP_RELEASE_KEY_ALIAS
                keyPassword MYAPP_RELEASE_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
...
```
6. 配置打包命令  package.json script 中配置 "b-a":"cd android && ./gradlew assembleRelease"
7. 终端输入打包命令 yarn b-a 
8. 打包后的文件在 /android/app/build/outputs/apk/release/ 下面的apk文件



## 无线网调试
> 网址： https://blog.csdn.net/qq_41911582/article/details/107384015