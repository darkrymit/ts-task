import { Company, BackendEmployee, FrontendEmployee } from './model/index.js';

export function run() {
  console.log('Begin Europe');
  let europeCompany = new Company();
  europeCompany.addEmployee(new FrontendEmployee('John Doe', 'Project 1'));
  europeCompany.addEmployee(new BackendEmployee('Mark Doe', 'Project 1'));
  europeCompany.addEmployee(new BackendEmployee('Mary Doe', 'Project 1'));
  europeCompany.addEmployee(new FrontendEmployee('Mary Krew', 'Project 2'));
  europeCompany.addEmployee(new BackendEmployee('Peter Pen', 'Project 2'));
  europeCompany.addEmployee(new BackendEmployee('John Smith', 'Project 2'));
  console.log(europeCompany.getProjectsList());
  console.log(europeCompany.getNamesList());
}
