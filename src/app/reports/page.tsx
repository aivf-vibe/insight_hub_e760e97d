import ReportsList from "@/components/ReportsList";
import { Card, Title } from "@tremor/react";

export default function Reports() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
        <p className="mt-2 text-gray-600">Access fund reports and analysis</p>
      </div>

      <Card>
        <Title>Available Reports</Title>
        <ReportsList />
      </Card>
    </div>
  );
}