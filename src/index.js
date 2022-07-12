export class Team {
  constructor() {
    this.members = new Set();
    console.log(this.members);
  }

  add(character) {
    const isExist = this.members.has(character);
    if (isExist === false) {
      this.members.add(character);
    } else {
      throw new Error("Персонаж уже добавлен в команду!");
    }
  }

  addAll(...characters) {
    this.members.add(...characters);
  }

  toArray() {
    return Array.from(this.members);
  }
}

export class Character {
  constructor(name) {
    this.name = name;
  }
}


