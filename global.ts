/**
 * Created by yang on 2021/8/11
 * 屏幕适配
 * 以iphone6为准
 * width: 750
 * height: 1334
 * pixel: 2
 * 如果需要更改只需改动：uiWidthPx 、 uiHeightPx 、 defaultPixel 即可
 */
import {Dimensions, PixelRatio, Platform} from 'react-native';

//定义设计稿总宽高 单位是px
const uiWidthPx = 750;
const uiHeightPx = 1334;
//获取屏幕宽度
const deviceWidthDp = Dimensions.get('window').width;
console.log('屏幕尺寸:', deviceWidthDp);
//获取屏幕高度
const deviceHeightDp = Dimensions.get('window').height;
//获取字体大小缩放比例
let fontScale = PixelRatio.getFontScale();
//获取当前设备像素密度
let pixelRatio = PixelRatio.get();
//iphone6像素密度
let defaultPixel = 2;
//单位转换成dp∂
const uiWidthDp = uiWidthPx / defaultPixel;
const uiHeightDp = uiHeightPx / defaultPixel;
//现在设计稿一般都用iphone6的尺寸750*1334来做，如果你的设计稿不是按照这个来，就改一下设计稿总宽高以及像素密度
//获取缩放比例
let scale = Math.min(deviceHeightDp / uiHeightDp, deviceWidthDp / uiWidthDp);
//直接传设计稿元素宽度
global.pxw = function getWidthDp(uiEleWidthPx: number) {
  return (uiEleWidthPx * deviceWidthDp) / uiWidthPx;
};

//直接传设计稿元素高度 (当是正方形元素的时候用一个比例来算)
global.pxh = function getHeightDp(uiEleHeightPx: number) {
  console.log((uiEleHeightPx * deviceHeightDp) / uiHeightPx);
  return (uiEleHeightPx * deviceHeightDp) / uiHeightPx;
};

//直接传设计稿字体大小
global.font = function getFontDp(number: number) {
  number = Math.round((number * scale) / fontScale / defaultPixel);
  return number;
};

// 如果是ios  不是ios 就只有这两种情况
global.isIOS = Platform.OS == 'ios';
