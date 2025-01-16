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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Edit2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function NewAdjustmentDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Edit2 className="mr-2 h-4 w-4" />
          New Adjustment
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Rate Adjustment</DialogTitle>
          <DialogDescription>
            Create a new rate adjustment request for an employee.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="employee" className="text-right">
              Employee
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select employee" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="emp1">Juan Dela Cruz</SelectItem>
                <SelectItem value="emp2">Maria Santos</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="currentRate" className="text-right">
              Current Rate
            </Label>
            <Input id="currentRate" type="number" className="col-span-3" readOnly />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="proposedRate" className="text-right">
              Proposed Rate
            </Label>
            <Input id="proposedRate" type="number" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="reason" className="text-right">
              Reason
            </Label>
            <Input id="reason" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Submit Adjustment</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}