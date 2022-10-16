const isTrue: boolean = true;
const isFalse: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const str: string = "Hello TypeScript";

const nums01: number[] = [1, 2, 3];
const nums02: Array<number> = [1, 2, 3]; // generic array types

const words: string[] = ["Hello", "TypeScript"];

// Tuple
const contact: [string, number] = ["Phone", 0987654321];

// Any
// let variable = 42
let variable: any = 42;
// variable = 'contact';
variable = "New String";
variable = [];

function sayMyName(name: string): void {
  console.log(`Hello ${name}`);
}

sayMyName("John");

// Never called
function throwError(message: string): never {
  throw new Error(message);
}

function infinity(): never {
  while (true) {}
}

// Type
type Login = string;

const login: Login = "admin";
// const registration: Login = 2;

type ID = string | number
const id1 : ID = "UUID";
const id2 : ID = 123;
// const id3 : ID = true;

type SomeType = string | null | undefined;