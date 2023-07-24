import { Employee } from './employee.model';

export class Company {
  private employees: Employee[] = [];

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  getProjectsList(): string[] {
    return this.employees
      .map(employee => employee.getCurrentProject())
      .filter(this.onlyUnique);
  }

  getNamesList(): string[] {
    return this.employees.map(employee => employee.getName());
  }

  private onlyUnique(value: any, index: number, self: Array<any>) {
    return self.indexOf(value) === index;
  }
}
