import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign, MinusCircle, PlusCircle } from "lucide-react";

export function PayrollSummary() {
  const summaryData = {
    totalSalaries: 450000,
    totalDeductions: 65250,
    netPay: 384750,
  };

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Salaries</CardTitle>
          <PlusCircle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ₱{summaryData.totalSalaries.toLocaleString()}
          </div>
          <p className="text-xs text-muted-foreground">
            Gross pay for current period
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Deductions</CardTitle>
          <MinusCircle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ₱{summaryData.totalDeductions.toLocaleString()}
          </div>
          <p className="text-xs text-muted-foreground">
            Including tax and benefits
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Net Pay</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ₱{summaryData.netPay.toLocaleString()}
          </div>
          <p className="text-xs text-muted-foreground">
            Total disbursement amount
          </p>
        </CardContent>
      </Card>
    </div>
  );
}