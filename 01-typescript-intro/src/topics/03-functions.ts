function  addNumbers(a: number, b: number): number
{
    return a + b;
}

const addNumbersArrow = (a: number, b: number):string => {
    return `${a + b}`;
}

function multiply( firstNumber: number, secondNumber?: number, base: number = 2): number {
    return firstNumber * base;
}

//const result: number = addNumbers(1, 2);
//const result2: string = addNumbersArrow(2, 3);
//const multiplyResult: number = multiply(3,);

interface Character {
    name: string;
    hp: number;
    showHp: ()=>void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: number{

}

//console.log({result, result2, multiplyResult});
export {};