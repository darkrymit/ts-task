import {
  LocationLocalStorage,
  LocationArray,
  Location,
  Company,
  Employee,
} from './model/index.js';

export function run() {
  console.log('Begin British');
  let location: Location = new LocationLocalStorage('location1', localStorage);
  let company = new Company(location);
  company.addEmployee(new Employee('Evan Kerr', 'Project 5'));
  company.addEmployee(new Employee('Mark Doedo', 'Project 5'));
  console.log(company.getProjectsList());
  console.log(company.getNamesList());

  location = new LocationArray();
  company = new Company(location);
  company.addEmployee(new Employee('Mary Dodoe', 'Project 6'));
  company.addEmployee(new Employee('Maria Fox', 'Project 6'));
  company.addEmployee(new Employee('Carlie Bond', 'Project 6'));
  company.addEmployee(new Employee('Mark Smith', 'Project 6'));
  console.log(company.getProjectsList());
  console.log(company.getNamesList());

  location = new LocationLocalStorage('location3', sessionStorage);
  company = new Company(location);
  company.addEmployee(new Employee('Mark Smith', 'Project 7'));
  console.log(company.getProjectsList());
  console.log(company.getNamesList());
}
