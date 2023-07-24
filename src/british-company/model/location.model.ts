import { Employee } from './employee.model.js';

export interface Location {
  addPerson(person: Employee): void;

  getPerson(index: number): Employee;

  getPersonCount(): number;
}

export class LocationArray implements Location {
  private people: Employee[] = [];

  addPerson(person: Employee): void {
    this.people.push(person);
  }

  getPerson(index: number): Employee {
    return this.people[index];
  }

  getPersonCount(): number {
    return this.people.length;
  }
}

export class LocationLocalStorage implements Location {
  private readonly key: string;

  private readonly storage: Storage;

  constructor(key: string, storage: Storage) {
    this.key = key;
    this.storage = storage;
    this.storage.setItem(this.key, JSON.stringify([]));
  }

  addPerson(person: Employee): void {
    const people = this.getPeople();
    people.push(person);
    this.storage.setItem(this.key, JSON.stringify(people));
  }

  getPerson(index: number): Employee {
    return this.getPeople()[index];
  }

  getPersonCount(): number {
    return this.getPeople().length;
  }

  private getPeople(): Employee[] {
    const people: Employee[] = [];
    const json = this.storage.getItem(this.key);
    if (!json) {
      return people;
    }
    const parsed = JSON.parse(json);
    for (const person of parsed) {
      people.push(new Employee(person.name, person.currentProject));
    }
    return people;
  }
}
