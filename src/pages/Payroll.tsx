import { Layout } from "@/components/layout/Layout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProcessPayrollDialog } from "@/components/payroll/ProcessPayrollDialog";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const payrollData = [
  {
    id: "PR001",
    name: "Juan Dela Cruz",
    grossSalary: 50000,
    sss: 1375,
    philhealth: 750,
    pagibig: 100,
    tax: 5000,
    netPay: 42775,
  },
  {
    id: "PR002",
    name: "Maria Santos",
    grossSalary: 45000,
    sss: 1237.5,
    philhealth: 675,
    pagibig: 100,
    tax: 4500,
    netPay: 38487.5,
  },
];

const Payroll = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Payroll</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-3xl font-bold mt-4">Payroll Processing</h1>
          <p className="text-gray-600 mt-2">
            Process and manage employee payroll for the current period.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold">Current Payroll Period</h2>
              <p className="text-sm text-gray-500">May 1-15, 2024</p>
            </div>
            <ProcessPayrollDialog />
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Gross Salary</TableHead>
                  <TableHead>SSS</TableHead>
                  <TableHead>PhilHealth</TableHead>
                  <TableHead>Pag-IBIG</TableHead>
                  <TableHead>Tax</TableHead>
                  <TableHead>Net Pay</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payrollData.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell>{employee.id}</TableCell>
                    <TableCell>{employee.name}</TableCell>
                    <TableCell>₱{employee.grossSalary.toLocaleString()}</TableCell>
                    <TableCell>₱{employee.sss.toLocaleString()}</TableCell>
                    <TableCell>₱{employee.philhealth.toLocaleString()}</TableCell>
                    <TableCell>₱{employee.pagibig.toLocaleString()}</TableCell>
                    <TableCell>₱{employee.tax.toLocaleString()}</TableCell>
                    <TableCell>₱{employee.netPay.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payroll;