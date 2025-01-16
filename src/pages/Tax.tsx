import { Layout } from "@/components/layout/Layout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const taxData = [
  {
    id: "EMP001",
    name: "Juan Dela Cruz",
    taxableIncome: 600000,
    sssTotal: 16500,
    philhealthTotal: 9000,
    pagibigTotal: 1200,
    taxWithheld: 60000,
  },
  {
    id: "EMP002",
    name: "Maria Santos",
    taxableIncome: 540000,
    sssTotal: 14850,
    philhealthTotal: 8100,
    pagibigTotal: 1200,
    taxWithheld: 54000,
  },
];

const Tax = () => {
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
                <BreadcrumbPage>Tax Compliance</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-3xl font-bold mt-4">Tax Compliance</h1>
          <p className="text-gray-600 mt-2">
            Monitor and manage tax compliance and contributions.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold">Annual Tax Summary</h2>
              <p className="text-sm text-gray-500">Year 2024</p>
            </div>
            <Button>
              <FileText className="mr-2 h-4 w-4" />
              Generate Tax Report
            </Button>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Taxable Income</TableHead>
                  <TableHead>SSS Total</TableHead>
                  <TableHead>PhilHealth Total</TableHead>
                  <TableHead>Pag-IBIG Total</TableHead>
                  <TableHead>Tax Withheld</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {taxData.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell>{employee.id}</TableCell>
                    <TableCell>{employee.name}</TableCell>
                    <TableCell>₱{employee.taxableIncome.toLocaleString()}</TableCell>
                    <TableCell>₱{employee.sssTotal.toLocaleString()}</TableCell>
                    <TableCell>₱{employee.philhealthTotal.toLocaleString()}</TableCell>
                    <TableCell>₱{employee.pagibigTotal.toLocaleString()}</TableCell>
                    <TableCell>₱{employee.taxWithheld.toLocaleString()}</TableCell>
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

export default Tax;