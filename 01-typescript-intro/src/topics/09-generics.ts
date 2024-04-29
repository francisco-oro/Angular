export function whatsMyType<T> (argument: any): any {
    return argument;
}

const amIstring = whatsMyType("Hola mundo");
const amINumber = whatsMyType(100);
const amIArray = whatsMyType([1,2,3,4,5])

console.log(amIstring.split(' '));
console.log(amINumber.split(' '));
console.log(amIArray.split(' '));