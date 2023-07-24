import { Employee } from './employee.model';

export class BackendEmployee implements Employee {
  private readonly currentProject: string;
  private readonly name: string;

  constructor(name: string, currentProject: string) {
    this.name = name;
    this.currentProject = currentProject;
  }

  getCurrentProject(): string {
    return this.currentProject;
  }

  getName(): string {
    return this.name;
  }
}
