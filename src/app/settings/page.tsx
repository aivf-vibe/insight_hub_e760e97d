import { Card, Title, TextInput, Button, Select, SelectItem } from "@tremor/react";

export default function Settings() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="mt-2 text-gray-600">Manage your account and preferences</p>
      </div>

      <div className="space-y-6">
        <Card>
          <Title>Account Settings</Title>
          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Fund Name</label>
              <TextInput placeholder="Enter fund name" className="mt-1" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Base Currency</label>
              <Select className="mt-1">
                <SelectItem value="usd">USD</SelectItem>
                <SelectItem value="eur">EUR</SelectItem>
                <SelectItem value="gbp">GBP</SelectItem>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Time Zone</label>
              <Select className="mt-1">
                <SelectItem value="utc">UTC</SelectItem>
                <SelectItem value="est">EST</SelectItem>
                <SelectItem value="pst">PST</SelectItem>
              </Select>
            </div>
            <Button>Save Changes</Button>
          </div>
        </Card>

        <Card>
          <Title>Notification Preferences</Title>
          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Notifications</label>
              <Select className="mt-1">
                <SelectItem value="all">All Activities</SelectItem>
                <SelectItem value="important">Important Only</SelectItem>
                <SelectItem value="none">None</SelectItem>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Alert Thresholds</label>
              <TextInput placeholder="Portfolio change %" className="mt-1" />
            </div>
            <Button>Update Preferences</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}