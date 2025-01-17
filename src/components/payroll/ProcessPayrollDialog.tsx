import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { ArrowRightCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PayrollResults } from "./PayrollResults";

export function ProcessPayrollDialog() {
  const [selectedPeriod, setSelectedPeriod] = useState("");
  const [isProcessed, setIsProcessed] = useState(false);

  const handleProcess = () => {
    if (selectedPeriod) {
      setIsProcessed(true);
    }
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setIsProcessed(false);
      setSelectedPeriod("");
    }
  };

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button>
          <ArrowRightCircle className="mr-2 h-4 w-4" />
          Process Payroll
        </Button>
      </DialogTrigger>
      <DialogContent className={isProcessed ? "sm:max-w-[900px]" : "sm:max-w-[425px]"}>
        {!isProcessed ? (
          <>
            <DialogHeader>
              <DialogTitle>Process Payroll</DialogTitle>
              <DialogDescription>
                Select the payroll period and confirm processing.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="period" className="text-right">
                  Pay Period
                </Label>
                <Select
                  value={selectedPeriod}
                  onValueChange={setSelectedPeriod}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="may1">May 1-15, 2024</SelectItem>
                    <SelectItem value="may2">May 16-31, 2024</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button
                type="submit"
                onClick={handleProcess}
                disabled={!selectedPeriod}
              >
                Process
              </Button>
            </DialogFooter>
          </>
        ) : (
          <PayrollResults
            period={
              selectedPeriod === "may1"
                ? "May 1-15, 2024"
                : "May 16-31, 2024"
            }
          />
        )}
      </DialogContent>
    </Dialog>
  );
}