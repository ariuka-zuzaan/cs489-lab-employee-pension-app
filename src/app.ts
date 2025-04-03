import { Employee } from "./models/Employee";
import { PensionPlan } from "./models/PensionPlan";
import { getYearsDiff, upcomingDateStart } from "./utils/date";

function main() {
  const employees: Employee[] = [
    new Employee(1, "Daniel", "Agar", new Date("2014-05-16"), 105945.5, new PensionPlan("EX1089", new Date("2023-01-17"), 100)),
    new Employee(2, "Benard", "Shaw", new Date("2022-09-03"), 197750.0),
    new Employee(3, "Carly", "Agar", new Date("2014-05-16"), 842000.75, new PensionPlan("SM2307", new Date("2014-05-16 "), 1555.5)),
    new Employee(4, "Wesley", "Schneider", new Date("2022-07-21"), 74500),
    new Employee(5, "Anna", "Wiltord", new Date("2022-06-15"), 85750.0),
    new Employee(6, "Ariunkhishig", "Zuzaan", new Date("2022-01-01"), 100000.0),
    new Employee(6, "John", "Agar", new Date("2022-10-13"), 100000.0),
    new Employee(7, "Yosef", "Tesfalem", new Date("2022-10-31"), 100000.0),
  ];

  console.log("-----------------------------");
  console.log("Employees JSON array sorted by yearly salary and last name");
  printEmployees(employees);
  console.log("-----------------------------");

  console.log("Upcoming quarterly enrollees");
  upcomingQuarterlyEnrollees(employees);
  console.log("-----------------------------");
}

//Upcoming quarterly enrollees
function upcomingQuarterlyEnrollees(employees: Employee[]): void {
  employees = employees.filter((employee) => getYearsDiff(employee.employmentDate, upcomingDateStart) <= 5);
  printEmployees(employees);
}

//Print employees in JSON format
function printEmployees(employees: Employee[]): void {
  employees.sort((a, b) => {
    if (a.getYearlySalary() !== b.getYearlySalary()) return b.getYearlySalary() - a.getYearlySalary();
    return a.getLastName().localeCompare(b.getLastName());
  });

  employees.forEach((employee) => {});
  console.log(
    JSON.stringify(
      employees,
      (key, value) => {
        if (key === "employmentDate") return value.toLocaleString("en-US");
        if (key === "yearlySalary") return value.toLocaleString("en-US");
        if (key === "pensionPlan") {
          return value
            ? {
                ...value,
                enrollmentDate: value.enrollmentDate?.toLocaleString("en-US"),
                monthlyContribution: value.monthlyContribution?.toLocaleString("en-US"),
              }
            : null;
        }
        return value;
      },
      2,
    ),
  );
}

main();
