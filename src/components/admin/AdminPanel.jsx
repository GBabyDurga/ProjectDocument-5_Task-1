import { Card, Title, Text } from '@tremor/react';

function AdminPanel() {
  return (
    <div className="admin-container">
      <Title>Admin Panel</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card>
          <Title>User Management</Title>
          <Text>Manage user roles and permissions</Text>
        </Card>
        <Card>
          <Title>System Settings</Title>
          <Text>Configure system parameters</Text>
        </Card>
      </div>
    </div>
  );
}

export default AdminPanel;