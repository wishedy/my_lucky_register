import Cookies from 'js-cookie'
const appId = 'wxde33b51b91dae373'
// 判断一个字符串是无效的字符串
export function isInvalidString (val) {
    if (((typeof val == 'string') && (val.length == 0)) || (val == undefined) || (val == 'undefined') || (val == 'null') || (typeof val == 'undefined') || (typeof val == 'null') || (val == null)) {
        return true
    } else {
        return false
    }
}
export const cleanArray = function (actual) {
    const newArray = []
    for (let i = 0; i < actual.length; i++) {
        if (actual[i]) {
            newArray.push(actual[i])
        }
    }
    return newArray
}
export const json2Query = function (json) {
    if (!json) return ''
    return cleanArray(Object.keys(json).map(key => {
        if (json[key] === undefined) return ''
        return encodeURIComponent(key) + '=' +
          encodeURIComponent(json[key])
    })).join('&')
}
export const getBasicAuth = (token) => {
    return token ? 'login_tokens:' + token : ''
}
//判断是否微信登陆
export const isWeiXin = ()=> {
    const ua = window.navigator.userAgent.toLowerCase();
    console.log(ua);//mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}
export const  getParameterByName=(name)=> {
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  const regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results == null ? "": decodeURIComponent(results[1]);
}
