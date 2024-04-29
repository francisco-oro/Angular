export function whatsMyType<T> (argument: T): T {
    return argument;
}

let amIString = whatsMyType<string>("Hola mundo"), amINumber = whatsMyType<number>(100), amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);

console.log(amIString.split('Hola Mundo'));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));