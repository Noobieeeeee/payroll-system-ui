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
import { Check, X } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const cashAdvanceData = [
  {
    id: "CA001",
    name: "Juan Dela Cruz",
    amount: 5000,
    reason: "Medical Emergency",
    status: "Pending",
    date: "2024-05-01",
  },
  {
    id: "CA002",
    name: "Maria Santos",
    amount: 3000,
    reason: "School Fees",
    status: "Approved",
    date: "2024-04-28",
  },
  {
    id: "CA003",
    name: "Pedro Reyes",
    amount: 2000,
    reason: "House Repair",
    status: "Rejected",
    date: "2024-04-25",
  },
];

const CashAdvance = () => {
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
                <BreadcrumbPage>Cash Advance</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-3xl font-bold mt-4">Cash Advance Management</h1>
          <p className="text-gray-600 mt-2">
            Review and manage employee cash advance requests.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold">Cash Advance Requests</h2>
              <p className="text-sm text-gray-500">
                Review and approve pending requests
              </p>
            </div>
            <Button>New Request</Button>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Request ID</TableHead>
                  <TableHead>Employee Name</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Reason</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cashAdvanceData.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell>{request.id}</TableCell>
                    <TableCell>{request.name}</TableCell>
                    <TableCell>₱{request.amount.toLocaleString()}</TableCell>
                    <TableCell>{request.reason}</TableCell>
                    <TableCell>{request.date}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                          request.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : request.status === "Approved"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {request.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-green-600"
                          disabled={request.status !== "Pending"}
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-600"
                          disabled={request.status !== "Pending"}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
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

export default CashAdvance;