const isTrue:boolean = true
const isFalse:boolean = false

const int:number = 42
const float:number = 4.2
const num:number = 3e10

const str:string = 'Hello TypeScript'

const nums01:number[] = [1, 2, 3]
const nums02:Array<number> = [1, 2, 3] // generic array types

const words:string[] = ['Hello', 'TypeScript']

// Tuple 
const contact:[string, number] = ['Phone', 0987654321]

// Any
// let variable = 42
let variable: any = 42
// variable = 'contact';
variable = 'contact';
variable = [];

function sayHello(name:string): void {
    console.log(`Hello ${name}`);
}
