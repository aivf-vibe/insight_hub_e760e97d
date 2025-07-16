import TransactionsTable from "@/components/TransactionsTable";
import { Card, Title } from "@tremor/react";

export default function Transactions() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Transactions</h1>
        <p className="mt-2 text-gray-600">View recent trading activity</p>
      </div>

      <Card>
        <Title>Recent Transactions</Title>
        <TransactionsTable />
      </Card>
    </div>
  );
}