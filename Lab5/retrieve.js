//const fetch = require('node-fetch');

 let URL = "https://cosc203.cspages.otago.ac.nz/labs/files/emoji.json";
 function response_callback(response) {
    if (response.status !== 200){
        return;
    } else {
        return response.text();
        }
    }
 function data_callback(data) {
     let emoji_array = JSON.parse(data);
     for(let e of emoji_array){
        if(e.name.includes("smiling")){
            console.log(e.name + e.emoji)
        }
     }
 }
 fetch(URL).then(response_callback).then(data_callback);

