// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean mayor que 18
 const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

let filterAges = ages.filter(age => age > 18)
console.log("Edades > 18: ", filterAges)

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean par.
 const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

 let filterAges2 = ages2.filter(age => age%2==0)
 console.log("Valores pares: ", filterAges2)


// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.
 const streamers = [
 	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
 	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
 	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
 	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
 ];

 let filterStreamers = streamers.filter(streamer => streamer.gameMorePlayed === "League of Legends" )
 console.log("Streamer filtrado: ", filterStreamers)


// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
// usar la funcion .includes() para la comprobación.
 const streamers2 = [
 	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
 	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
 	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
 	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
 ];

 let filterStreamers2 = streamers2.filter(streamer => streamer.name.includes("u"))
 console.log("Streamer filtrado 2: ", filterStreamers2)

// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
// .age sea mayor que 35.

let filterStreamer3 = streamers2.filter((streamer) => {
    if(streamer.age > 35) {
        streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase()
        return streamer.gameMorePlayed.toUpperCase().includes("Legends".toUpperCase())
    }
    return streamer.gameMorePlayed.includes("Legends")
})

console.log("Streamer filtrado 3: ",filterStreamer3)



// 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
// los streamers que incluyan la palabra introducida en el input. De esta forma, si 
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
 const streamers3 = [
 	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
 	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
 	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
 	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
 ];

 window.onload = () => {

 let body = document.querySelector("body")

 let input = document.querySelector("input")
 let filterStreamer4 
 let button = document.querySelector('button') 
 button.addEventListener("click", () => {
     filterStreamer4 = streamers3.filter(streamer => {
      if(streamer.name.toUpperCase().includes(input.value.toUpperCase())) {
          return streamer
      }   
     })
     console.log(filterStreamer4)
 })

 input.addEventListener("input", () => {

 })

 }