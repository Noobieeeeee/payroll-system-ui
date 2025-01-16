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

const adjustmentData = [
  {
    id: "RA001",
    name: "Juan Dela Cruz",
    currentRate: 50000,
    proposedRate: 55000,
    reason: "Annual Performance Review",
    status: "Pending",
    effectiveDate: "2024-06-01",
  },
  {
    id: "RA002",
    name: "Maria Santos",
    currentRate: 45000,
    proposedRate: 48000,
    reason: "Promotion",
    status: "Approved",
    effectiveDate: "2024-05-15",
  },
];

const RateAdjustments = () => {
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
                <BreadcrumbPage>Rate Adjustments</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-3xl font-bold mt-4">Rate Adjustments</h1>
          <p className="text-gray-600 mt-2">
            Manage employee salary rate adjustments and approvals.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold">Adjustment Requests</h2>
              <p className="text-sm text-gray-500">
                Review and approve rate adjustment requests
              </p>
            </div>
            <Button>New Adjustment</Button>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Request ID</TableHead>
                  <TableHead>Employee Name</TableHead>
                  <TableHead>Current Rate</TableHead>
                  <TableHead>Proposed Rate</TableHead>
                  <TableHead>Reason</TableHead>
                  <TableHead>Effective Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {adjustmentData.map((adjustment) => (
                  <TableRow key={adjustment.id}>
                    <TableCell>{adjustment.id}</TableCell>
                    <TableCell>{adjustment.name}</TableCell>
                    <TableCell>₱{adjustment.currentRate.toLocaleString()}</TableCell>
                    <TableCell>₱{adjustment.proposedRate.toLocaleString()}</TableCell>
                    <TableCell>{adjustment.reason}</TableCell>
                    <TableCell>{adjustment.effectiveDate}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                          adjustment.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {adjustment.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-green-600"
                          disabled={adjustment.status !== "Pending"}
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-600"
                          disabled={adjustment.status !== "Pending"}
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

export default RateAdjustments;