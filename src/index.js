export class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    const arr = this.toArray();
    const isExist = arr.find( el => arr.includes(el))
    if (!isExist) {
      this.members.add(character);
    } else {
      throw new Error ("Персонаж уже добавлен в команду!")
    }
    
  }

  addAll(...characters) {
    this.members.add(...characters);
  }

  toArray() {
    return Array.from(this.members)
  }
}

export class Character {
  constructor(name) {
    this.name = name;
  }
}

const team = new Team();
const character = new Character('Ivan');
const character1 = new Character('Ivan');
team.add(character);
team.add(character1);
console.log(team);
