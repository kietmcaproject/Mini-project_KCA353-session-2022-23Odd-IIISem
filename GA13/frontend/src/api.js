import axios from "axios";

export default function getSimilarSubject(data){
  console.log(data)
    var config = {  
        method: 'post',
        url: 'https://aniketars.pythonanywhere.com/api/v1/similar-subject',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
    };

    return axios(config)
}