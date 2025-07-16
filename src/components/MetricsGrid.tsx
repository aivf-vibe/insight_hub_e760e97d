import { Card, Grid, Metric, Text } from "@tremor/react";

const metrics = [
  {
    title: "Assets Under Management",
    metric: "$3.5M",
    subtext: "+12.3% from last month"
  },
  {
    title: "YTD Returns",
    metric: "15.4%",
    subtext: "Above benchmark"
  },
  {
    title: "Sharpe Ratio",
    metric: "1.8",
    subtext: "Good risk-adjusted returns"
  },
  {
    title: "Active Positions",
    metric: "42",
    subtext: "Across 6 strategies"
  }
];

const MetricsGrid = () => {
  return (
    <Grid numItems={1} numItemsSm={2} numItemsLg={4} className="gap-4 mt-4">
      {metrics.map((item) => (
        <Card key={item.title}>
          <Text>{item.title}</Text>
          <Metric>{item.metric}</Metric>
          <Text className="mt-2">{item.subtext}</Text>
        </Card>
      ))}
    </Grid>
  );
};

export default MetricsGrid;