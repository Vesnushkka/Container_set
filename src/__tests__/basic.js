import { Team, Character } from "../index.js";

test("checkAddMethods", () => {
  const team = new Team();
  const character = new Character("Ivan");
  const character1 = new Character("Maks");
  team.add(character);
  team.add(character1);
  const result = team.toArray();

  expect(result).toEqual([
    {"name": "Ivan"}, 
    {"name": "Maks"}
  ])
});
