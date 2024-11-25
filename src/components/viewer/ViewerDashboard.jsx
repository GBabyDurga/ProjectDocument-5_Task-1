import { Card, Title, BarList } from '@tremor/react';
import { useQuery } from 'react-query';
import { fetchAnalytics } from '../../services/analyticsService';

function ViewerDashboard() {
  const { data: analytics, isLoading } = useQuery('viewer-analytics', 
    () => fetchAnalytics('7d')
  );

  if (isLoading) return <div className="loading">Loading viewer data...</div>;

  return (
    <div className="viewer-container">
      <Title>Overview Dashboard</Title>
      <div className="grid grid-cols-1 gap-6 mt-6">
        <Card>
          <Title>Key Metrics</Title>
          <BarList
            data={analytics?.keyMetrics || []}
            className="mt-4"
          />
        </Card>
      </div>
    </div>
  );
}

export default ViewerDashboard;