import { Layout } from "@/components/layout/Layout";
import { PayrollSummary } from "@/components/dashboard/PayrollSummary";
import { PayrollTable } from "@/components/dashboard/PayrollTable";
import { PayrollPeriodSelect } from "@/components/dashboard/PayrollPeriodSelect";
import { Button } from "@/components/ui/button";
import { FileDown, Printer } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Payroll Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Overview of current payroll period and employee compensation
          </p>
        </div>

        <PayrollSummary />

        <div className="flex items-center justify-between">
          <PayrollPeriodSelect />
          <div className="flex gap-2">
            <Button variant="outline">
              <FileDown className="mr-2 h-4 w-4" />
              Export Data
            </Button>
            <Button>
              <Printer className="mr-2 h-4 w-4" />
              Generate Payroll
            </Button>
          </div>
        </div>

        <PayrollTable />
      </div>
    </Layout>
  );
};

export default Index;