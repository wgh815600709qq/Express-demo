function toggleMenu() { // 【移动端】菜单切换
  var Ul = document.querySelector('ul')
  if (!Ul.style.display || Ul.style.display === 'none') {
    Ul.style.display = 'block'
  } else {
    Ul.style.display = 'none'
  }
}

function  queryParams (param) { // 【get请求】拼接字符串
  if (!params) return param
  let str = ''
  for(i in param) {
    str = str + i + '' + param[i] + '&'
  }
  str = str.substring(0, str.length - 1) // 去&
  return
}

class Ajax { // 原生ajax类
  constructor () {
  }
  get (url, params) {
    var promise = new Promise ((resolve, reject) => {
      var oAjax = new XMLHttpRequest() // IE6以上, 创建
      if (params) {
        let params = queryParams(params)
        oAjax.open('GET',`${url}?${params}`,true) // 连接
      } else {
        oAjax.open('GET',`${url}`,true) // 连接
      }
      oAjax.send() // 发送
      oAjax.onreadystatechange = function () {
        if (oAjax.readyState === 4) {
          if (oAjax.status === 200) {
            resolve(oAjax.responseText)
          } else {
            reject('error')
          }
        }
      }
    })
    return promise
  }
  post (url, params) {
    var promise = new Promise ((resolve, reject) => {
      var oAjax = new XMLHttpRequest() // IE6以上, 创建
      oAjax.open('POST',`${url}`) // 连接
      oAjax.setRequestHeader('Content-type', 'application/json')
      oAjax.send(params) // 发送
      oAjax.onreadystatechange = function () {
        if (oAjax.readyState === 4) {
          if (oAjax.status === 200) {
            resolve(oAjax.responseText)
          } else {
            reject('error')
          }
        }
      }
    })
    return promise
  }
}

window.onload = function () {
  console.log('ready')
  var ajax = new Ajax()
  ajax.get('/getUser').then(res => {
    console.log('res', res)
  }).catch(err => {
    console.log('err', err)
  })
}