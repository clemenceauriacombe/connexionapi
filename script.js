const url = "https://pokeapi.co/api/v2/";
// const response = fetch(url);
// console.log(response);

fetch(url)
.then(function(response) {
  return(response.json());
})
.then(affichemoi);

function affichemoi (x) {
console.log(x);
}




