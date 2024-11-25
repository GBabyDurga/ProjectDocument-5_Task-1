import { useState } from 'react';
import { Card, Title, AreaChart, DonutChart, BarChart } from '@tremor/react';
import { useQuery } from 'react-query';
import { fetchAnalytics } from '../../services/analyticsService';

function Dashboard() {
  const [timeRange, setTimeRange] = useState('7d');
  const { data: analytics, isLoading } = useQuery(
    ['analytics', timeRange],
    () => fetchAnalytics(timeRange)
  );

  if (isLoading) return <div className="loading">Loading analytics...</div>;

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <Title>Analytics Dashboard</Title>
        <select 
          value={timeRange} 
          onChange={(e) => setTimeRange(e.target.value)}
          className="time-range-selector"
        >
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
        </select>
      </div>

      <div className="metrics-grid">
        <Card className="metric-card">
          <Title>User Engagement</Title>
          <AreaChart
            data={analytics?.engagement || []}
            index="date"
            categories={["activeUsers", "sessions"]}
            colors={["blue", "green"]}
          />
        </Card>

        <Card className="metric-card">
          <Title>User Distribution</Title>
          <DonutChart
            data={analytics?.userTypes || []}
            category="value"
            index="name"
            colors={["slate", "violet", "indigo"]}
          />
        </Card>

        <Card className="metric-card">
          <Title>Feature Usage</Title>
          <BarChart
            data={analytics?.featureUsage || []}
            index="feature"
            categories={["usage"]}
            colors={["blue"]}
          />
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;