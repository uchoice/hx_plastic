import 'whatwg-fetch'

/* const originPath = 'http://www.66tongtu.com/api/artical'; */
const originPath = 'http://192.168.0.104:8080/api/artical';
/* const originPath = ''; */

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    console.log('request failed', response)
  }
}

function parseJSON(response) {
  return response.json()
}
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [option] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export function request(url, option) {
  return fetch(originPath + url + '&token=f1dbde938f7fa8b233a183e100ad635b', {
    ...option,
  })
  .then(checkStatus)
  .then(parseJSON)
  .then(function(data) {
    return data.data;
  })
}
