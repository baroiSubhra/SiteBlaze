function setCookie(cname, cvalue, exdays) {
  let expires = 'expires=' + new Date(exdays).toUTCString()
  document.cookie = cname + '=' + cvalue + ';' + String(expires) + ';path=/'
}

function getCookie(cname) {
  let name = cname + '='
  let ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

function deleteCookie(cname) {
  setCookie(cname, '', new Date(0))
}

export { setCookie, getCookie, deleteCookie }
