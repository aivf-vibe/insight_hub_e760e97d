import MetricsGrid from "@/components/MetricsGrid";
import PortfolioOverview from "@/components/PortfolioOverview";

export default function Home() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="mt-2 text-gray-600">Welcome to your fund management dashboard</p>
      </div>
      
      <MetricsGrid />
      <PortfolioOverview />
    </div>
  );
}
