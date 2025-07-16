import { Card, List, ListItem, Title } from "@tremor/react";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

const reports = [
  {
    title: "Monthly Performance Report - June 2025",
    date: "2025-07-01",
    type: "Performance"
  },
  {
    title: "Risk Analysis Q2 2025",
    date: "2025-07-05",
    type: "Risk"
  },
  {
    title: "Portfolio Attribution Report",
    date: "2025-07-10",
    type: "Analysis"
  },
  {
    title: "Compliance Review - H1 2025",
    date: "2025-07-15",
    type: "Compliance"
  }
];

const ReportsList = () => {
  return (
    <List>
      {reports.map((report) => (
        <ListItem key={report.title}>
          <div className="flex items-center gap-4">
            <DocumentTextIcon className="w-6 h-6 text-gray-500" />
            <div>
              <p className="text-sm font-medium text-gray-900">{report.title}</p>
              <p className="text-sm text-gray-500">{report.date} • {report.type}</p>
            </div>
          </div>
        </ListItem>
      ))}
    </List>
  );
};

export default ReportsList;