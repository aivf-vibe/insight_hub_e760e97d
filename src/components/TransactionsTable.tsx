import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Badge,
} from "@tremor/react";

const transactions = [
  {
    id: "TX001",
    date: "2025-07-16",
    type: "Buy",
    asset: "AAPL",
    amount: "$250,000",
    price: "$190.25",
    status: "completed"
  },
  {
    id: "TX002",
    date: "2025-07-15",
    type: "Sell",
    asset: "BTC",
    amount: "$100,000",
    price: "$42,150",
    status: "completed"
  },
  {
    id: "TX003",
    date: "2025-07-15",
    type: "Buy",
    asset: "US10Y",
    amount: "$500,000",
    price: "98.25",
    status: "pending"
  },
];

const TransactionsTable = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>ID</TableHeaderCell>
          <TableHeaderCell>Date</TableHeaderCell>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>Asset</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Price</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {transactions.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.date}</TableCell>
            <TableCell>
              <Badge color={item.type === "Buy" ? "blue" : "red"}>
                {item.type}
              </Badge>
            </TableCell>
            <TableCell>{item.asset}</TableCell>
            <TableCell>{item.amount}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>
              <Badge color={item.status === "completed" ? "green" : "yellow"}>
                {item.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TransactionsTable;