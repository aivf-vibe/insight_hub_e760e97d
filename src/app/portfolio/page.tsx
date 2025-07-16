import PortfolioTable from "@/components/PortfolioTable";
import { Card, Title } from "@tremor/react";

export default function Portfolio() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Portfolio</h1>
        <p className="mt-2 text-gray-600">View and manage your portfolio positions</p>
      </div>

      <Card>
        <Title>Current Positions</Title>
        <PortfolioTable />
      </Card>
    </div>
  );
}