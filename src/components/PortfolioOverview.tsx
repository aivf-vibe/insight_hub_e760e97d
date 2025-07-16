import { Card, Title, AreaChart } from "@tremor/react";

const data = [
  { date: "Jan 22", "AUM": 2890000, "Returns": 2400000 },
  { date: "Feb 22", "AUM": 2950000, "Returns": 2510000 },
  { date: "Mar 22", "AUM": 3100000, "Returns": 2600000 },
  { date: "Apr 22", "AUM": 3200000, "Returns": 2800000 },
  { date: "May 22", "AUM": 3500000, "Returns": 3100000 },
];

const PortfolioOverview = () => {
  return (
    <Card className="mt-4">
      <Title>Portfolio Performance</Title>
      <AreaChart
        className="h-72 mt-4"
        data={data}
        index="date"
        categories={["AUM", "Returns"]}
        colors={["blue", "green"]}
      />
    </Card>
  );
};

export default PortfolioOverview;