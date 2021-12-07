const API_DOMAIN = "http://localhost:80";//Dev purposes


function postAndCallback(url, body, callback){
    fetch(API_DOMAIN + url, {
            method: "POST",
            body: body
        }).then(res => res.json())
        .then(data => {
            callback(data)
        });
}


export default {postAndCallback, API_DOMAIN};