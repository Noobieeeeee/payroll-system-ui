import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Employee {
  id: string;
  name: string;
  position: string;
  basicSalary: number;
  deductions: number;
  netPay: number;
}

const employees: Employee[] = [
  {
    id: "EMP001",
    name: "Juan Dela Cruz",
    position: "Software Engineer",
    basicSalary: 50000,
    deductions: 7250,
    netPay: 42750,
  },
  {
    id: "EMP002",
    name: "Maria Santos",
    position: "HR Manager",
    basicSalary: 45000,
    deductions: 6525,
    netPay: 38475,
  },
  {
    id: "EMP003",
    name: "Pedro Reyes",
    position: "Accountant",
    basicSalary: 40000,
    deductions: 5800,
    netPay: 34200,
  },
];

export function PayrollTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Employee ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Position</TableHead>
            <TableHead className="text-right">Basic Salary</TableHead>
            <TableHead className="text-right">Deductions</TableHead>
            <TableHead className="text-right">Net Pay</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.id}</TableCell>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.position}</TableCell>
              <TableCell className="text-right">
                ₱{employee.basicSalary.toLocaleString()}
              </TableCell>
              <TableCell className="text-right">
                ₱{employee.deductions.toLocaleString()}
              </TableCell>
              <TableCell className="text-right">
                ₱{employee.netPay.toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}