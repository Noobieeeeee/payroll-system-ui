import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function PayrollPeriodSelect() {
  return (
    <Select defaultValue="may-1">
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select period" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="may-1">May 1-15, 2024</SelectItem>
        <SelectItem value="may-2">May 16-31, 2024</SelectItem>
        <SelectItem value="apr-2">April 16-30, 2024</SelectItem>
        <SelectItem value="apr-1">April 1-15, 2024</SelectItem>
      </SelectContent>
    </Select>
  );
}