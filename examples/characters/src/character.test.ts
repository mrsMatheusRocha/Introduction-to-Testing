import { describe, it, expect } from 'vitest';
import { Character } from './character.js';
import { Person } from './person.js';

describe('Character', () => {
  it('should create a character with a first name, last name, and role', () => {
      expect(new Character("Joseph", "Rich", "Mage")).toEqual({
        firstName: "Joseph",
        lastName: "Rich",
        role: "Mage",
        charisma: expect.any(Number),
        constitution: expect.any(Number),
        dexterity: expect.any(Number),
        intelligence: expect.any(Number),
        level: expect.any(Number),
        strength: expect.any(Number),
        wisdom: expect.any(Number),
        id: expect.stringContaining("person-"),
        lastModified: expect.any(Date),
        createdAt: expect.any(Date),
      })
    },
  );

  it('should allow you to increase the level', () => {
    const character = new Character("Juan", "Quintana", "Scientist")
    character.levelUp();
    expect(character.level).toBe(2);
  });

  it('should update the last modified date when leveling up', () => {
    const character = new Character("Juan", "Quintana", "Scientist")
    const initialLastModified = character.lastModified;
    character.levelUp();
    expect(initialLastModified).not.toBe(character.lastModified);
  });
});