import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface PayslipDialogProps {
  employee: {
    id: string;
    name: string;
    position: string;
    grossIncome: number;
    deductions: number;
    netPay: number;
  };
  period: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PayslipDialog({ employee, period, open, onOpenChange }: PayslipDialogProps) {
  const payslipDetails = {
    rate: 2500, // Daily rate
    totalHours: 160,
    cashAdvance: 5000,
    overtime: {
      hours: 10,
      amount: 3125,
    },
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>Employee Payslip</DialogTitle>
            <Button variant="outline" onClick={handlePrint}>
              <Printer className="mr-2 h-4 w-4" />
              Print Payslip
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="font-bold text-xl">ACME Corporation</h2>
            <p className="text-sm text-muted-foreground">
              123 Business Street, Metro Manila
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Employee ID</p>
                <p className="font-medium">{employee.id}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pay Period</p>
                <p className="font-medium">{period}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Employee Name</p>
                <p className="font-medium">{employee.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Position</p>
                <p className="font-medium">{employee.position}</p>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <h3 className="font-semibold">Earnings</h3>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Basic Rate (Daily)</span>
                  <span>₱{payslipDetails.rate.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Total Hours</span>
                  <span>{payslipDetails.totalHours}</span>
                </div>
                <div className="flex justify-between text-sm font-medium">
                  <span>Gross Income</span>
                  <span>₱{employee.grossIncome.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <h3 className="font-semibold">Deductions</h3>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Cash Advance</span>
                  <span>₱{payslipDetails.cashAdvance.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>SSS</span>
                  <span>₱1,375.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>PhilHealth</span>
                  <span>₱750.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Pag-IBIG</span>
                  <span>₱100.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Withholding Tax</span>
                  <span>₱5,000.00</span>
                </div>
                <div className="flex justify-between text-sm font-medium">
                  <span>Total Deductions</span>
                  <span>₱{employee.deductions.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <h3 className="font-semibold">Additional Earnings</h3>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Overtime ({payslipDetails.overtime.hours} hours)</span>
                  <span>₱{payslipDetails.overtime.amount.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="flex justify-between font-bold">
                <span>NET PAY</span>
                <span>₱{employee.netPay.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}