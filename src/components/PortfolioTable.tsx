import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Badge,
} from "@tremor/react";

const positions = [
  {
    asset: "AAPL",
    type: "Equity",
    value: "$2.5M",
    allocation: "25%",
    performance: "+15.4%",
    status: "profit"
  },
  {
    asset: "BTC",
    type: "Crypto",
    value: "$1.2M",
    allocation: "12%",
    performance: "-5.2%",
    status: "loss"
  },
  {
    asset: "US10Y",
    type: "Bond",
    value: "$3.1M",
    allocation: "31%",
    performance: "+3.1%",
    status: "profit"
  },
  {
    asset: "EUR/USD",
    type: "FX",
    value: "$0.8M",
    allocation: "8%",
    performance: "+1.2%",
    status: "profit"
  },
];

const PortfolioTable = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Asset</TableHeaderCell>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>Value</TableHeaderCell>
          <TableHeaderCell>Allocation</TableHeaderCell>
          <TableHeaderCell>Performance</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {positions.map((item) => (
          <TableRow key={item.asset}>
            <TableCell>{item.asset}</TableCell>
            <TableCell>{item.type}</TableCell>
            <TableCell>{item.value}</TableCell>
            <TableCell>{item.allocation}</TableCell>
            <TableCell>
              <Badge color={item.status === "profit" ? "green" : "red"}>
                {item.performance}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PortfolioTable;