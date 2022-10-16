interface Rectangule {
  readonly id: string;
  color?: string;
  size: {
    width: number;
    height: number;
  };
}

const rect1: Rectangule = {
  id: "UUID4",
  size: {
    width: 20,
    height: 30,
  },
  color: "red",
};

const rect2: Rectangule = {
  id: "UUID4",
  size: {
    width: 20,
    height: 30,
  },
};
rect2.color = "green";

const rect3 = {} as Rectangule; // New format
const rect4 = <Rectangule>{}; // Old format

// =================================================================

interface RectanguleWithArea extends Rectangule {
  getArea: () => number;
}

const rect5: RectanguleWithArea = {
  id: "UUID4",
  getArea: function (): number {
    return this.size.width * this.size.height;
  },
  size: {
    width: 5,
    height: 5,
  },
};

//================================================================

interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date;
  setTime(date: Date): void {
    this.time = date;
  }
}

//===============================================================
interface Style {
    // border: string
    [key: string]: string;
}
const css: Style = {
    border: '1px solid black',
    marginTop: '10px',
    borderRadius: '10',
}