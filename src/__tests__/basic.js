import { Team, Character } from "../index.js";

test("checkAddMethods", () => {
  const team = new Team();
  const character = new Character("Ivan");
  const result = team.add(character);
  expect(result).toEqual( Character = { name: 'Ivan' });
});
