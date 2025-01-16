import { Layout } from "@/components/layout/Layout";
import { StatCard } from "@/components/dashboard/StatCard";
import { EmployeeTable } from "@/components/dashboard/EmployeeTable";
import { Button } from "@/components/ui/button";
import { Users, DollarSign, Calendar, FileText } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Welcome to PayrollPH. Here's your overview.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Employees"
            value="150"
            icon={Users}
            trend={{ value: 5, isPositive: true }}
          />
          <StatCard
            title="Pending Cash Advances"
            value="12"
            icon={DollarSign}
            trend={{ value: 2, isPositive: false }}
          />
          <StatCard
            title="Next Payroll Date"
            value="May 15, 2024"
            icon={Calendar}
          />
          <StatCard
            title="Tax Compliance"
            value="98%"
            icon={FileText}
            trend={{ value: 3, isPositive: true }}
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Employee Management</h2>
            <Button>Add Employee</Button>
          </div>
          <EmployeeTable />
        </div>
      </div>
    </Layout>
  );
};

export default Index;