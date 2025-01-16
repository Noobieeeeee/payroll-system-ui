import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit2, Trash2, Eye } from "lucide-react";

interface Employee {
  id: string;
  name: string;
  department: string;
  position: string;
  salary: number;
  payType: "hourly" | "daily" | "monthly";
}

const employees: Employee[] = [
  {
    id: "EMP001",
    name: "Juan Dela Cruz",
    department: "IT",
    position: "Software Engineer",
    salary: 50000,
    payType: "monthly",
  },
  {
    id: "EMP002",
    name: "Maria Santos",
    department: "HR",
    position: "HR Manager",
    salary: 45000,
    payType: "monthly",
  },
  {
    id: "EMP003",
    name: "Pedro Reyes",
    department: "Finance",
    position: "Accountant",
    salary: 40000,
    payType: "monthly",
  },
];

export function EmployeeTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Employee ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Salary Rate</TableHead>
            <TableHead>Pay Type</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.id}</TableCell>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.department}</TableCell>
              <TableCell>{employee.position}</TableCell>
              <TableCell>₱{employee.salary.toLocaleString()}</TableCell>
              <TableCell className="capitalize">{employee.payType}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}