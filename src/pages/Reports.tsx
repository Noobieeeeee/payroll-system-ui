import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { FileText, Download, Calendar, DollarSign, Plane, Shield } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const reportTypes = [
  {
    title: "Payroll Summary",
    description: "Monthly summary of payroll including gross salary, deductions, and net pay",
    icon: FileText,
    dialogTitle: "Payroll Summary Report",
    dialogDescription: "Select the period for which you want to generate the payroll summary.",
    previewContent: (
      <div className="space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-primary-50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary-800">Total Gross</h4>
            <p className="text-2xl font-bold text-primary-900">₱245,000.00</p>
          </div>
          <div className="bg-primary-50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary-800">Total Deductions</h4>
            <p className="text-2xl font-bold text-primary-900">₱35,750.00</p>
          </div>
          <div className="bg-primary-50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary-800">Total Net Pay</h4>
            <p className="text-2xl font-bold text-primary-900">₱209,250.00</p>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Employee</TableHead>
              <TableHead>Gross Pay</TableHead>
              <TableHead>Deductions</TableHead>
              <TableHead>Net Pay</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>₱35,000.00</TableCell>
              <TableCell>₱5,250.00</TableCell>
              <TableCell>₱29,750.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Smith</TableCell>
              <TableCell>₱42,000.00</TableCell>
              <TableCell>₱6,300.00</TableCell>
              <TableCell>₱35,700.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    ),
  },
  {
    title: "Tax Compliance Report",
    description: "Summary of SSS, PhilHealth, Pag-IBIG, and BIR contributions",
    icon: Shield,
    dialogTitle: "Tax Compliance Report",
    dialogDescription: "Select the period for tax compliance reporting.",
    previewContent: (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-primary-50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary-800">Total SSS Contributions</h4>
            <p className="text-2xl font-bold text-primary-900">₱12,500.00</p>
          </div>
          <div className="bg-primary-50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary-800">Total PhilHealth</h4>
            <p className="text-2xl font-bold text-primary-900">₱8,750.00</p>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Employee</TableHead>
              <TableHead>SSS</TableHead>
              <TableHead>PhilHealth</TableHead>
              <TableHead>Pag-IBIG</TableHead>
              <TableHead>Withholding Tax</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>₱1,375.00</TableCell>
              <TableCell>₱900.00</TableCell>
              <TableCell>₱100.00</TableCell>
              <TableCell>₱2,875.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    ),
  },
  {
    title: "Leave Balances",
    description: "Employee leave credits, usage, and remaining balances",
    icon: Calendar,
    dialogTitle: "Leave Balances Report",
    dialogDescription: "View current leave balances for all employees.",
    previewContent: (
      <div className="space-y-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Employee</TableHead>
              <TableHead>Vacation Leave</TableHead>
              <TableHead>Sick Leave</TableHead>
              <TableHead>Emergency Leave</TableHead>
              <TableHead>Total Used</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>10 days</TableCell>
              <TableCell>8 days</TableCell>
              <TableCell>3 days</TableCell>
              <TableCell>4 days</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Smith</TableCell>
              <TableCell>12 days</TableCell>
              <TableCell>7 days</TableCell>
              <TableCell>3 days</TableCell>
              <TableCell>2 days</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    ),
  },
  {
    title: "Cash Advance Report",
    description: "History of cash advance requests and payments",
    icon: DollarSign,
    dialogTitle: "Cash Advance Report",
    dialogDescription: "Select the period for cash advance history.",
    previewContent: (
      <div className="space-y-6">
        <div className="bg-primary-50 p-4 rounded-lg">
          <h4 className="font-semibold text-primary-800">Total Outstanding Cash Advances</h4>
          <p className="text-2xl font-bold text-primary-900">₱45,000.00</p>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Employee</TableHead>
              <TableHead>Date Requested</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Balance</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>Jan 15, 2024</TableCell>
              <TableCell>₱15,000.00</TableCell>
              <TableCell>₱10,000.00</TableCell>
              <TableCell>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">
                  Ongoing
                </span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    ),
  },
  {
    title: "Travel Report",
    description: "Summary of employee travel records and expenses",
    icon: Plane,
    dialogTitle: "Travel Report",
    dialogDescription: "View travel history and details for selected period.",
    previewContent: (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-primary-50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary-800">Total Travel Expenses</h4>
            <p className="text-2xl font-bold text-primary-900">₱125,000.00</p>
          </div>
          <div className="bg-primary-50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary-800">Total Trips</h4>
            <p className="text-2xl font-bold text-primary-900">8</p>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Employee</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Expenses</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>Manila</TableCell>
              <TableCell>Jan 10, 2024</TableCell>
              <TableCell>3 days</TableCell>
              <TableCell>₱15,000.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    ),
  },
  {
    title: "Leaves Report",
    description: "Detailed report of employee leaves and absences",
    icon: Calendar,
    dialogTitle: "Leaves Report",
    dialogDescription: "Generate comprehensive leave report for selected period.",
    previewContent: (
      <div className="space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-primary-50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary-800">Total Leave Days</h4>
            <p className="text-2xl font-bold text-primary-900">45</p>
          </div>
          <div className="bg-primary-50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary-800">Pending Approvals</h4>
            <p className="text-2xl font-bold text-primary-900">3</p>
          </div>
          <div className="bg-primary-50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary-800">Approved Leaves</h4>
            <p className="text-2xl font-bold text-primary-900">42</p>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Employee</TableHead>
              <TableHead>Leave Type</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>Vacation Leave</TableCell>
              <TableCell>Jan 20, 2024</TableCell>
              <TableCell>Jan 22, 2024</TableCell>
              <TableCell>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                  Approved
                </span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    ),
  },
];

const ReportDialog = ({
  title,
  description,
  previewContent,
}: {
  title: string;
  description: string;
  previewContent: React.ReactNode;
}) => {
  return (
    <DialogContent className="max-w-4xl">
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid gap-2">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current-month">Current Month</SelectItem>
              <SelectItem value="previous-month">Previous Month</SelectItem>
              <SelectItem value="current-quarter">Current Quarter</SelectItem>
              <SelectItem value="year-to-date">Year to Date</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="border rounded-lg p-4 bg-white">
          {previewContent}
        </div>
        <Button className="w-full">
          <Download className="mr-2 h-4 w-4" />
          Generate Report
        </Button>
      </div>
    </DialogContent>
  );
};

const Reports = () => {
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
                <BreadcrumbPage>Reports</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-3xl font-bold mt-4">Reports & Analytics</h1>
          <p className="text-gray-600 mt-2">
            Generate and download various payroll and HR reports
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reportTypes.map((report) => (
            <Card key={report.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <report.icon className="h-5 w-5" />
                  {report.title}
                </CardTitle>
                <CardDescription>{report.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Generate Report
                    </Button>
                  </DialogTrigger>
                  <ReportDialog
                    title={report.dialogTitle}
                    description={report.dialogDescription}
                    previewContent={report.previewContent}
                  />
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Reports;