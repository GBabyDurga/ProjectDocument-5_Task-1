import { Card, Title, LineChart } from '@tremor/react';
import { useQuery } from 'react-query';
import { fetchAnalytics } from '../../services/analyticsService';

function AnalystView() {
  const { data: analytics, isLoading } = useQuery('detailed-analytics', 
    () => fetchAnalytics('30d')
  );

  if (isLoading) return <div className="loading">Loading detailed analytics...</div>;

  return (
    <div className="analyst-container">
      <Title>Detailed Analysis</Title>
      <div className="grid grid-cols-1 gap-6 mt-6">
        <Card>
          <Title>Trend Analysis</Title>
          <LineChart
            data={analytics?.trends || []}
            index="date"
            categories={["users", "engagement", "retention"]}
            colors={["blue", "green", "red"]}
          />
        </Card>
      </div>
    </div>
  );
}

export default AnalystView;