function record(){
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://accounts.spotify.com/api/token",
    "method": "POST",
    "headers": {
      "content-type": "application/json"
    },
    "processData": false,
    "data": "{\"grant_type\":\"client_credentials\",\"client_id\": \"c06e5e51b5404463817b6667c9ecfd13\",\"client_secret\": \"e4707d7cf5b84bfa993e1e0fdfe47296\",\"audience\": \"https://accounts.spotify.com/api\"}"
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}