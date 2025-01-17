import { Layout } from "@/components/layout/Layout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AddTravelDialog } from "@/components/attendance/AddTravelDialog";
import { CaterLeavesDialog } from "@/components/attendance/CaterLeavesDialog";
import { AddAttendanceDialog } from "@/components/attendance/AddAttendanceDialog";
import { PrintAttendanceDialog } from "@/components/attendance/PrintAttendanceDialog";

const attendanceData = [
  {
    id: "EMP001",
    name: "Juan Dela Cruz",
    morning: {
      timeIn: "08:00",
      timeOut: "12:00",
      status: "On-Time",
    },
    afternoon: {
      timeIn: "13:00",
      timeOut: "17:00",
      status: "On-Time",
    },
    totalHours: 8,
  },
  {
    id: "EMP002",
    name: "Maria Santos",
    morning: {
      timeIn: "08:15",
      timeOut: "12:00",
      status: "Late",
    },
    afternoon: {
      timeIn: "13:00",
      timeOut: "17:00",
      status: "On-Time",
    },
    totalHours: 7.75,
  },
];

export default function Attendance() {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Attendance Management</h1>
          <p className="text-muted-foreground mt-2">
            Track and manage employee attendance records
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-[240px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(date) => date && setDate(date)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <Input
              placeholder="Search employee..."
              className="max-w-[300px]"
            />
          </div>
          <div className="flex gap-2">
            <AddTravelDialog />
            <CaterLeavesDialog />
            <AddAttendanceDialog />
            <PrintAttendanceDialog />
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee Name</TableHead>
                <TableHead>Morning Time In</TableHead>
                <TableHead>Morning Time Out</TableHead>
                <TableHead>Morning Status</TableHead>
                <TableHead>Afternoon Time In</TableHead>
                <TableHead>Afternoon Time Out</TableHead>
                <TableHead>Afternoon Status</TableHead>
                <TableHead className="text-right">Total Hours</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attendanceData.map((record) => (
                <TableRow key={record.id}>
                  <TableCell>{record.name}</TableCell>
                  <TableCell>{record.morning.timeIn}</TableCell>
                  <TableCell>{record.morning.timeOut}</TableCell>
                  <TableCell>{record.morning.status}</TableCell>
                  <TableCell>{record.afternoon.timeIn}</TableCell>
                  <TableCell>{record.afternoon.timeOut}</TableCell>
                  <TableCell>{record.afternoon.status}</TableCell>
                  <TableCell className="text-right">
                    {record.totalHours} hrs
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Layout>
  );
}