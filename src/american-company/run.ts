import { Company, FrontendEmployee, BackendEmployee } from './model/index.js';

export function run() {
  console.log('Begin America');
  let company = new Company();
  company.addEmployee(new FrontendEmployee('Jonathan Doe', 'Project 3'));
  company.addEmployee(new BackendEmployee('Jack Mccarthy', 'Project 3'));
  company.addEmployee(new BackendEmployee('Frederick Shaw', 'Project 3'));
  company.addEmployee(new BackendEmployee('Matthew Lawson', 'Project 3'));
  company.addEmployee(new FrontendEmployee('Eduardo Soto', 'Project 4'));
  company.addEmployee(new BackendEmployee('Tia James', 'Project 4'));
  company.addEmployee(new BackendEmployee('Kelly Martinez', 'Project 4'));
  console.log(company.getProjectsList());
  console.log(company.getNamesList());
}
