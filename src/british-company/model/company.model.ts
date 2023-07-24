import { Employee } from './employee.model.js';
import { Location } from './location.model.js';

export class Company<T extends Location> {
  constructor(private location: T) {}

  addEmployee(employee: Employee) {
    this.location.addPerson(employee);
  }

  getProjectsList(): string[] {
    let projectList: string[] = [];
    for (let i = 0; i < this.location.getPersonCount(); i++) {
      projectList.push(this.location.getPerson(i).getCurrentProject());
    }
    return projectList.filter(this.onlyUnique);
  }

  getNamesList(): string[] {
    let namesList: string[] = [];
    for (let i = 0; i < this.location.getPersonCount(); i++) {
      namesList.push(this.location.getPerson(i).getName());
    }
    return namesList;
  }

  private onlyUnique(value: any, index: number, self: Array<any>) {
    return self.indexOf(value) === index;
  }
}
