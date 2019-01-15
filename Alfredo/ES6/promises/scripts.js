'use strict';

// fetch(requestURL, params);
const requestURL = "https://rickandmortyapi.com/apif";
let response = fetch(requestURL)
.then(resp => resp.json())
.then((characters)=>{
  for (person of characters) {
    getName(person);
  }
})
.catch(err => console.log('err: ', err
););
console.log(response);

function getNam() {
  console.log(person.name);e
}
