import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Eye, Printer } from "lucide-react";
import { PayslipDialog } from "./PayslipDialog";
import { useState } from "react";

interface Employee {
  id: string;
  name: string;
  position: string;
  grossIncome: number;
  deductions: number;
  netPay: number;
}

const sampleData: Employee[] = [
  {
    id: "EMP001",
    name: "Juan Dela Cruz",
    position: "Software Engineer",
    grossIncome: 50000,
    deductions: 7225,
    netPay: 42775,
  },
  {
    id: "EMP002",
    name: "Maria Santos",
    position: "Project Manager",
    grossIncome: 65000,
    deductions: 9425,
    netPay: 55575,
  },
];

export function PayrollResults({ period }: { period: string }) {
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  const handlePrintPayroll = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Payroll Summary</h2>
          <p className="text-muted-foreground">Pay Period: {period}</p>
        </div>
        <Button onClick={handlePrintPayroll}>
          <Printer className="mr-2 h-4 w-4" />
          Print Payroll
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Employee ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Position</TableHead>
              <TableHead className="text-right">Gross Income</TableHead>
              <TableHead className="text-right">Deductions</TableHead>
              <TableHead className="text-right">Net Pay</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleData.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.id}</TableCell>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.position}</TableCell>
                <TableCell className="text-right">
                  ₱{employee.grossIncome.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  ₱{employee.deductions.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  ₱{employee.netPay.toLocaleString()}
                </TableCell>
                <TableCell className="text-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedEmployee(employee)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {selectedEmployee && (
        <PayslipDialog
          employee={selectedEmployee}
          period={period}
          open={!!selectedEmployee}
          onOpenChange={() => setSelectedEmployee(null)}
        />
      )}
    </div>
  );
}