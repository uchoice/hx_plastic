import 'whatwg-fetch'
import { stringify } from 'qs';

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
  fetch(url, option)
  .then(checkStatus)
  .then(parseJSON)
  .then(function(data) {
    return data;
  })
}
