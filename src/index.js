export class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    try{
      this.members.add(character);
    }
    catch (err) {
      alert ('Ошибка ' +  err.name)
    } 
  }

  addAll(character) {
    this.members.add(...character);
  }

  toArray() {
    Array.from(this.members)
  }
}

export class Character {
  constructor(name) {
    this.name = name;
  }
}

const team = new Team();
const character = new Character('Ivan');
team.add(character);
console.log(team);
