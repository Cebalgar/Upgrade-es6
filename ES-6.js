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



