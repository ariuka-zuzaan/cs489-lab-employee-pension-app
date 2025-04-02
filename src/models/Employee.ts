import { PensionPlan } from "./PensionPlan";

export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  employmentDate: Date;
  yearlySalary: number;
  pensionPlan: PensionPlan | null = null;

  constructor(id: number, firstName: string, lastName: string, employmentDate: Date, yearlySalary: number);
  constructor(id: number, firstName: string, lastName: string, employmentDate: Date, yearlySalary: number, pensionPlan?: PensionPlan);

  constructor(id: number, firstName: string, lastName: string, employmentDate: Date, yearlySalary: number, pensionPlan?: PensionPlan) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.employmentDate = employmentDate;
    this.yearlySalary = yearlySalary;
    this.pensionPlan = pensionPlan || null;
  }

  getId() {
    return this.id;
  }
  getFirstName() {
    return this.firstName;
  }
  setFirstName(firstName: string) {
    this.firstName = firstName;
  }

  getLastName() {
    return this.lastName;
  }
  setLastName(lastName: string) {
    this.lastName = lastName;
  }

  getEmploymentDate() {
    return this.employmentDate;
  }
  setEmploymentDate(employmentDate: Date) {
    this.employmentDate = employmentDate;
  }

  getYearlySalary() {
    return this.yearlySalary;
  }

  setYearlySalary(yearlySalary: number) {
    this.yearlySalary = yearlySalary;
  }

  getPensionPlan() {
    return this.pensionPlan;
  }
  setPensionPlan(id: string, enrollmentDate: Date | null, monthlyContribution: number | null) {
    this.pensionPlan = new PensionPlan(id, enrollmentDate, monthlyContribution);
  }
}
