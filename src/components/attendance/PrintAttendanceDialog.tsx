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
import { Printer } from "lucide-react";
import { format } from "date-fns";

interface AttendanceRecord {
  id: string;
  name: string;
  morning: {
    timeIn: string;
    timeOut: string;
  };
  afternoon: {
    timeIn: string;
    timeOut: string;
  };
  totalHours: number;
  date: string;
}

const sampleData: AttendanceRecord[] = [
  {
    id: "1",
    name: "Juan Dela Cruz",
    morning: {
      timeIn: "08:00",
      timeOut: "12:00",
    },
    afternoon: {
      timeIn: "13:00",
      timeOut: "17:00",
    },
    totalHours: 8,
    date: "2024-01-17",
  },
  {
    id: "2",
    name: "Maria Santos",
    morning: {
      timeIn: "08:15",
      timeOut: "12:00",
    },
    afternoon: {
      timeIn: "13:00",
      timeOut: "17:00",
    },
    totalHours: 7.75,
    date: "2024-01-17",
  },
];

export function PrintAttendanceDialog() {
  const handlePrint = () => {
    const printContent = document.getElementById("print-content");
    if (printContent) {
      const printWindow = window.open("", "", "height=600,width=800");
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>Employee Attendance - ${format(
                new Date("2024-01-17"),
                "MMMM dd yyyy"
              )}</title>
              <style>
                body { font-family: Arial, sans-serif; }
                table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                th { background-color: #f5f5f5; }
                h1 { text-align: center; }
                .date { text-align: center; margin-bottom: 20px; }
              </style>
            </head>
            <body>
              <h1>Employee Attendance</h1>
              <div class="date">${format(
                new Date("2024-01-17"),
                "MMMM dd yyyy"
              )}</div>
              ${printContent.innerHTML}
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        printWindow.close();
      }
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Printer className="mr-2 h-4 w-4" />
          Print Attendance
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Print Attendance Record</DialogTitle>
          <DialogDescription>
            Review the attendance record before printing.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div id="print-content">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2">Employee Name</th>
                  <th className="border p-2">Time In AM</th>
                  <th className="border p-2">Time Out AM</th>
                  <th className="border p-2">Time In PM</th>
                  <th className="border p-2">Time Out PM</th>
                  <th className="border p-2">Total Hours</th>
                  <th className="border p-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {sampleData.map((record) => (
                  <tr key={record.id}>
                    <td className="border p-2">{record.name}</td>
                    <td className="border p-2">{record.morning.timeIn}</td>
                    <td className="border p-2">{record.morning.timeOut}</td>
                    <td className="border p-2">{record.afternoon.timeIn}</td>
                    <td className="border p-2">{record.afternoon.timeOut}</td>
                    <td className="border p-2">{record.totalHours} hrs</td>
                    <td className="border p-2">
                      {format(new Date(record.date), "MMM dd yyyy")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handlePrint}>Print</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}