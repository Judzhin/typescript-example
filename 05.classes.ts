class TypeScript {
  version: string;
  constructor(version: string) {}
  info(name: string) {
    return `[${name}]: TypeScript version ${this.version}`;
  }
}

// class Car {
//     readonly model: string;
//     readonly numberOfWheels: number = 4;
//     constructor(theModel: string) {
//         this.model = theModel;
//     }
// }

class Car {
  readonly numberOfWheels: number = 4;
  constructor(readonly model: string) {}
}
//================================================================

class Animal {
  protected voice: string = "";
  public color: string = "black";
  private go() {
    console.log("Go");
  }
}

class Dog extends Animal {
  public setVoice(voice: string): void {
    // super.voice = voice;
    this.voice = voice;
  }
}

const dog = new Dog();
// dog.voice;
dog.setVoice("Woof");
console.log(dog.color);

//================================================================
abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class Button extends Component {
  render(): void {
    console.log("Button render");
  }
  info(): string {
    return "This is a button";
  }
}
