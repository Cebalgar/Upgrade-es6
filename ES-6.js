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


