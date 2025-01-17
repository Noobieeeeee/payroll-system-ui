import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { FileText, Download, Calendar, DollarSign } from "lucide-react";
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
    dialogTitle: "Generate Payroll Summary Report",
    dialogDescription: "Select the period for which you want to generate the payroll summary.",
  },
  {
    title: "Tax Compliance Report",
    description: "Summary of SSS, PhilHealth, Pag-IBIG, and BIR contributions",
    icon: FileText,
    dialogTitle: "Generate Tax Compliance Report",
    dialogDescription: "Select the period for tax compliance reporting.",
  },
  {
    title: "Leave Balances",
    description: "Employee leave credits, usage, and remaining balances",
    icon: Calendar,
    dialogTitle: "Generate Leave Balances Report",
    dialogDescription: "View current leave balances for all employees.",
  },
  {
    title: "Cash Advance Report",
    description: "History of cash advance requests and payments",
    icon: DollarSign,
    dialogTitle: "Generate Cash Advance Report",
    dialogDescription: "Select the period for cash advance history.",
  },
  {
    title: "Travel Report",
    description: "Summary of employee travel records and expenses",
    icon: FileText,
    dialogTitle: "Generate Travel Report",
    dialogDescription: "View travel history and details for selected period.",
  },
  {
    title: "Leaves Report",
    description: "Detailed report of employee leaves and absences",
    icon: Calendar,
    dialogTitle: "Generate Leaves Report",
    dialogDescription: "Generate comprehensive leave report for selected period.",
  },
];

const ReportDialog = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <DialogContent className="sm:max-w-[425px]">
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