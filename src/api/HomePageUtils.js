const API_DOMAIN = "http://localhost:3012";//Dev purposes


function postAndCallback(url, body, callback){
    console.log("Posting to " + API_DOMAIN + url)
    fetch(API_DOMAIN + url, {
            method: "POST",
            body: body
        }).then(res => res.json())
        .then(data => {
            callback(data)
        }).catch((e) => {
          console.log(e);
        });
}


export default {postAndCallback, API_DOMAIN};
