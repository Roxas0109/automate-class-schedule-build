const API_DOMAIN = "http://localhost:80";//Dev purposes


function postAndCallback(url, body, callback, headers) {
  fetch(API_DOMAIN + url, {
    credentials: 'include',
    method: "POST",
    body: body,
    headers: {...headers}
  }).then(res => res.json())
    .then(data => {
      callback(data)
    }).catch((e) => {
      console.log(e);
    });
}

export default { postAndCallback, API_DOMAIN };
