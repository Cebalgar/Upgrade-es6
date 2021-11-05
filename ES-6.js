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