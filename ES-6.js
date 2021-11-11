//Crea una arrow function que tenga dos parametros a y b y que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre por consola la suma de los dos parametros.



const summaArrow = (a=10 , b=5)=> a + b;
const result = summaArrow();
console.log(result);


//1.1 Ejecuta esta función sin pasar ningún parametro
const sinParametro = ()=> a+b;

console.log(10+5);

//1.2 Ejecuta esta función pasando un solo parametro
const unParametro = (a,b=5)=> a+b;
const suma = unParametro(10);

console.log(suma);

//1.3 Ejecuta esta función pasando dos parametros

const dosParametro = (a,b)=> a+b;
const total= dosParametro(5,10);

console.log(total);

//-------------------------------------------------------
//2.1 En base al siguiente javascript, crea variables en base a las propiedades del objeto usando object destructuring e imprimelas por consola. Cuidado, no hace falta hacer destructuring del array, solo del objeto.

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

let{title, gender, year}=game;

console.log(title,gender,year);



//2.2 En base al siguiente javascript, usa destructuring para crear 3 variables llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente imprimelo por consola.

const fruits = ['Banana', 'Strawberry', 'Orange'];

let fruit1= fruits[0];
let fruit2= fruits[1];
let fruit3= fruits[2];

console.log(fruit1,fruit2,fruit3);

//2.3 En base al siguiente javascript, usa destructuring para crear 2 variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};
let {name}= animalFunction();
let {race}= animalFunction();

console.log(name);
console.log(race);



//2.4 En base al siguiente javascript, usa destructuring para crear las variables name y itv con sus respectivos valores. Posteriormente crea 3 variables usando igualmente el destructuring para cada uno de los años y comprueba que todo esta bien imprimiendolo.

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

let {name} = car;
let {itv}= car;
console.log(name);
console.log(itv);

let [year1]=itv;
let [,year2]=itv;
let[,,year3]=itv;
console.log(year1);
console.log(year2);
console.log(year3);

//-------------------------------------------------------------
//3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]

let pointsListCopy = [...pointsList];
console.log(pointsListCopy);

//3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

let toyCopy= {...toy};
console.log(toyCopy);

//3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.

const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

let points =[...pointsList, ...pointsLis2];

console.log(points);

//3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

let newToy = {...toy, ...toyUpdate};

console.log(newToy);

//3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

colors.splice(1,1);

const newColors=[...colors];
console.log(newColors);

//-----------------------------------------------------------------

//4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const usersName = users.map(user=>user.name);
console.log(usersName);

//4.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const result=users.map(person=>person.name);

nombres=[];

nombres.push(result);

let newName="Anacleto";

for(let i=0; i<nombres.length; i++){

	if(nombres[i].charAt(0)==="A"){

		nobres[i].charAt(0)=newName

	}

	console.log(nombres);

}
	


//4.3 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}

];


var result = cities.map(city=>city.name);

	let city=cities.isVisited;

for (let city of cities){

	if(city==="true"){
		
		cities.name="Visitado";
		
	}
	
}

//---------------------------------------------------------------

//5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const mayor18= ages.filter(age=>age>18);
console.log(mayor18);



//5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const agesPar= ages.filter(age=>age %2 == 0);

console.log(agesPar);





//5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const juego= streamers.filter(stream=>stream.gameMorePlayed==="League of Legends");
console.log(juego);


//5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamersConU = streamers.filter(streamer=>streamer.name.includes("u"));
console.log(streamersConU);


//5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const newArray= streamers.filter(streamer=>streamer.gameMorePlayed.includes("Legends"));

let jugador= streamers.age;

for (let jugador of streamers){

	if(jugador>35){

	 streamers.gameMorePlayed.in


	}

}

console.log(newArray);


//--------------------------------------------------------------------------

//6.1 Dado el siguiente array, usa .find() para econtrar el número 100.

const numbers = [32, 21, 63, 95, 100, 67, 43];

const findCien = numbers.find(number=>number===100);
console.log(findCien);



//6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.

const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];

const movie2010= movies.find(movie=>movie.date===2010);

console.log(movie2010.title);


//6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre 'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación lo queremos meter en la propiedad .mutation del objeto fusionado.

const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];

const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];

const nombreAlien = aliens.find(alien=>alien.name==="Cucushumushu");
//console.log(nombreAlien);

const mutacionAlien = mutations.find(mutation=>mutation.name==="Porompompero");
//console.log(mutacionAlien);


newMutacionAlient=[];
newMutacionAlient.push(mutacionAlien);

newObjet ={...nombreAlien, mutacion:newMutacionAlient}
console.log(newObjet);

//----------------------------------------------------------------

//7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de los alumnos usando la función .reduce().

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const sumaNotas = exams.reduce((accumulator,nota)=>accumulator+nota.score,0);
console.log(sumaNotas);



//7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los alumnos que esten aprobados usando la función .reduce().

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const notas = exams.map(nota=>nota.score);
const aprobados = notas.filter(aprobado=>aprobado >= 5);
//console.log(aprobados);

const sumaAprobados= aprobados.reduce((accumulator,numero)=>accumulator + numero, 0);

console.log(sumaAprobados);
   


//7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().

const sumaNotas = exams.reduce((accumulator,nota)=>accumulator+nota.score,0);
var promedioNotas = sumaNotas / exams.length;
console.log(promedioNotas);




