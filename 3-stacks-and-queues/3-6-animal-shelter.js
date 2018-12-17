const Queue = require("./queue");
const listValues = require("../2-linked-lists/list-values");

// 3-4 An animal shelter, which holds only dogs and cats, operates on a strictly
// FIFO basis. People must adopt either the "oldest" (based on arrival time)
// of all animals at the shelter, or they can select whether they would prefer
// a dog or a cat (and will receive the oldest animal of that type). They cannot
// select which specific animal they would like. Create the data structures to
// maintain this system and implement operations such as enqueue, dequeueAny,
// dequeueDog, dequeueCat.

class AnimalShelter {
  constructor() {
    this._dogs = new Queue(100);
    this._cats = new Queue(100);
    this._count = 0;
  }

  enqueue(v) {
    // v.type: "cat" | "dog"
    let count = this._count;
    this[`_${v.type}s`].add({ count, value: v });
    this._count += 1;
  }

  dequeueAny() {
    let cat = this._cats.peek();
    let dog = this._dogs.peek();

    if (cat === null && dog === null) {
      return null;
    } else if (cat === null) {
      return dog.value;
    } else if (dog === null) {
      return cat.value;
    }

    // console.log("cat ", cat);
    if (cat.count <= dog.count) {
      return this.dequeueCat();
    } else if (dog.count < cat.count) {
      return this.dequeueDog();
    }
  }

  dequeueDog() {
    let dog = this._dogs.peek();
    if (dog !== null) {
      return this._dogs.remove().value;
    } else {
      return null;
    }
  }

  dequeueCat() {
    let cat = this._cats.peek();
    if (cat !== null) {
      return this._cats.remove().value;
    } else {
      return null;
    }
  }
}

module.exports = AnimalShelter;
