const arrayOfNumbers: Array<number> = [1, 2, 3];
const arrayOfStrings: string[] = ['Hello', 'Judzhin'];

function reverse<T>(arrayOfNumbers: T[]): T[] {
  return arrayOfNumbers.slice().reverse();
}

reverse(arrayOfNumbers);
reverse(arrayOfStrings);