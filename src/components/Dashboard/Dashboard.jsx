import { useState } from 'react';
import {
  DxcFlex,
  DxcHeading,
  DxcTabs,
  DxcBadge,
  DxcButton,
  DxcTypography
} from '@dxc-technology/halstack-react';
import { dashboardMetrics, rateChanges, currentUser } from '../../data/mockData';

const Dashboard = ({ onSelectRateChange }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [viewMode, setViewMode] = useState('cards');

  const getStatusColor = (status) => {
    switch (status) {
      case 'Deployed': return 'green';
      case 'Filing Submitted': return 'blue';
      case 'Pending Approval': return 'yellow';
      case 'In Review': return 'orange';
      case 'Impact Analysis': return 'blue';
      case 'Draft': return 'grey';
      default: return 'grey';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Urgent': return '#D0021B';
      case 'High': return '#FF6B00';
      case 'Medium': return '#0095FF';
      case 'Low': return '#24A148';
      default: return '#666666';
    }
  };

  const myRateChanges = rateChanges.filter(r => r.assignedTo === currentUser.name);
  const urgentChanges = rateChanges.filter(r => r.priority === 'Urgent' || r.priority === 'High');

  const MetricCard = ({ icon, label, value, color = '#0095FF', subtext }) => (
    <div
      style={{
        flex: '1 1 200px',
        padding: 'var(--spacing-padding-m)',
        backgroundColor: 'white',
        borderRadius: 'var(--border-radius-m)',
        boxShadow: 'var(--shadow-mid-02)',
        border: '1px solid #E0E0E0'
      }}
    >
      <DxcFlex alignItems="flex-start" justifyContent="space-between">
        <DxcFlex direction="column" gap="4px">
          <span style={{ fontSize: '12px', color: '#666666', fontWeight: '500' }}>
            {label}
          </span>
          <span style={{ fontSize: '28px', fontWeight: '700', color: color }}>
            {value}
          </span>
          {subtext && (
            <span style={{ fontSize: '11px', color: '#999999' }}>
              {subtext}
            </span>
          )}
        </DxcFlex>
        <span
          className="material-icons"
          style={{ fontSize: '32px', color: color, opacity: 0.7 }}
        >
          {icon}
        </span>
      </DxcFlex>
    </div>
  );

  const RateChangeCard = ({ rateChange }) => (
    <div
      onClick={() => onSelectRateChange(rateChange)}
      style={{
        padding: 'var(--spacing-padding-m)',
        backgroundColor: 'white',
        borderRadius: 'var(--border-radius-m)',
        boxShadow: 'var(--shadow-mid-02)',
        border: '1px solid #E0E0E0',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        borderLeft: `4px solid ${getPriorityColor(rateChange.priority)}`
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-mid-02)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <DxcFlex direction="column" gap="var(--spacing-gap-xs)">
        <DxcFlex justifyContent="space-between" alignItems="flex-start">
          <DxcFlex direction="column" gap="2px">
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#333333' }}>
              {rateChange.id}
            </span>
            <span style={{ fontSize: '12px', color: '#666666' }}>
              {rateChange.source}
            </span>
          </DxcFlex>
          <DxcBadge label={rateChange.status} size="small" />
        </DxcFlex>

        <span style={{ fontSize: '14px', color: '#333333', fontWeight: '500' }}>
          {rateChange.changeTitle}
        </span>

        <DxcFlex alignItems="center" gap="var(--spacing-gap-xs)">
          <span
            className="material-icons"
            style={{ fontSize: '16px', color: '#666666' }}
          >
            business
          </span>
          <span style={{ fontSize: '13px', color: '#666666' }}>
            {rateChange.linesOfBusiness.join(', ')}
          </span>
        </DxcFlex>

        <DxcFlex alignItems="center" gap="var(--spacing-gap-xs)">
          <span
            className="material-icons"
            style={{ fontSize: '16px', color: '#666666' }}
          >
            location_on
          </span>
          <span style={{ fontSize: '13px', color: '#666666' }}>
            {rateChange.statesAffected.length} states
          </span>
        </DxcFlex>

        <DxcFlex justifyContent="space-between" alignItems="center">
          <DxcFlex alignItems="center" gap="4px">
            <span
              className="material-icons"
              style={{ fontSize: '14px', color: getPriorityColor(rateChange.priority) }}
            >
              flag
            </span>
            <span
              style={{
                fontSize: '12px',
                fontWeight: '500',
                color: getPriorityColor(rateChange.priority)
              }}
            >
              {rateChange.priority}
            </span>
          </DxcFlex>
          <DxcFlex direction="column" alignItems="flex-end">
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#0095FF' }}>
              {rateChange.premiumImpact}
            </span>
            <span style={{ fontSize: '11px', color: '#999999' }}>
              Effective: {rateChange.effectiveDate}
            </span>
          </DxcFlex>
        </DxcFlex>
      </DxcFlex>
    </div>
  );

  const renderRateChangesTable = (changes) => (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '1px solid #E0E0E0', backgroundColor: '#FAFAFA', fontSize: '13px', fontWeight: '600', color: '#666666' }}>Change ID</th>
          <th style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '1px solid #E0E0E0', backgroundColor: '#FAFAFA', fontSize: '13px', fontWeight: '600', color: '#666666' }}>Title</th>
          <th style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '1px solid #E0E0E0', backgroundColor: '#FAFAFA', fontSize: '13px', fontWeight: '600', color: '#666666' }}>Source</th>
          <th style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '1px solid #E0E0E0', backgroundColor: '#FAFAFA', fontSize: '13px', fontWeight: '600', color: '#666666' }}>Priority</th>
          <th style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '1px solid #E0E0E0', backgroundColor: '#FAFAFA', fontSize: '13px', fontWeight: '600', color: '#666666' }}>Status</th>
          <th style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '1px solid #E0E0E0', backgroundColor: '#FAFAFA', fontSize: '13px', fontWeight: '600', color: '#666666' }}>Impact</th>
          <th style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '1px solid #E0E0E0', backgroundColor: '#FAFAFA', fontSize: '13px', fontWeight: '600', color: '#666666' }}>Effective Date</th>
          <th style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '1px solid #E0E0E0', backgroundColor: '#FAFAFA', fontSize: '13px', fontWeight: '600', color: '#666666' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {changes.map((change) => (
          <tr key={change.id} style={{ borderBottom: '1px solid #F0F0F0' }}>
            <td style={{ padding: '12px 16px' }}>
              <span style={{ fontSize: '14px', fontWeight: '500' }}>
                {change.id}
              </span>
            </td>
            <td style={{ padding: '12px 16px' }}>
              <DxcFlex direction="column">
                <span style={{ fontSize: '14px' }}>{change.changeTitle}</span>
                <span style={{ fontSize: '12px', color: '#666666' }}>
                  {change.linesOfBusiness.join(', ')}
                </span>
              </DxcFlex>
            </td>
            <td style={{ padding: '12px 16px' }}>
              <span style={{ fontSize: '14px' }}>{change.source}</span>
            </td>
            <td style={{ padding: '12px 16px' }}>
              <DxcFlex alignItems="center" gap="4px">
                <span
                  className="material-icons"
                  style={{ fontSize: '16px', color: getPriorityColor(change.priority) }}
                >
                  flag
                </span>
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: '500',
                    color: getPriorityColor(change.priority)
                  }}
                >
                  {change.priority}
                </span>
              </DxcFlex>
            </td>
            <td style={{ padding: '12px 16px' }}>
              <DxcBadge label={change.status} size="small" />
            </td>
            <td style={{ padding: '12px 16px' }}>
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#0095FF' }}>{change.premiumImpact}</span>
            </td>
            <td style={{ padding: '12px 16px' }}>
              <span style={{ fontSize: '14px' }}>{change.effectiveDate}</span>
            </td>
            <td style={{ padding: '12px 16px' }}>
              <DxcButton
                label="View"
                mode="tertiary"
                size="small"
                onClick={() => onSelectRateChange(change)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const renderRateChangesGrid = (changes) => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: 'var(--spacing-gap-m)'
      }}
    >
      {changes.map((change) => (
        <RateChangeCard key={change.id} rateChange={change} />
      ))}
    </div>
  );

  return (
    <div style={{ padding: 'var(--spacing-padding-l)', width: '100%', backgroundColor: '#F5F7FA' }}>
      <DxcFlex direction="column" gap="var(--spacing-gap-l)">
        {/* Header */}
        <DxcFlex justifyContent="space-between" alignItems="center">
          <DxcFlex direction="column" gap="4px">
            <DxcHeading level={2} text="Rate Impact and Change Dashboard" />
            <span style={{ fontSize: '14px', color: '#666666' }}>
              Welcome back, {currentUser.name}. Track and manage all rate changes.
            </span>
          </DxcFlex>
          <DxcFlex alignItems="center" gap="var(--spacing-gap-xs)">
            <span style={{ fontSize: '12px', color: '#666666' }}>
              Last updated: {new Date().toLocaleTimeString()}
            </span>
            <span
              className="material-icons"
              style={{ fontSize: '20px', color: '#666666', cursor: 'pointer' }}
            >
              refresh
            </span>
          </DxcFlex>
        </DxcFlex>

        {/* Metrics Cards */}
        <DxcFlex gap="var(--spacing-gap-m)" wrap="wrap">
          <MetricCard
            icon="pending"
            label="Pending Rate Changes"
            value={dashboardMetrics.pendingRateChanges}
            color="#FF6B00"
            subtext="Awaiting action"
          />
          <MetricCard
            icon="description"
            label="Active Filings"
            value={dashboardMetrics.activeFilings}
            color="#0095FF"
            subtext="In regulatory review"
          />
          <MetricCard
            icon="schedule"
            label="Avg Implementation"
            value={dashboardMetrics.avgImplementationTime}
            color="#0095FF"
            subtext="Time to deploy"
          />
          <MetricCard
            icon="check_circle"
            label="Filing Approval Rate"
            value={dashboardMetrics.filingApprovalRate}
            color="#24A148"
            subtext="First-pass success"
          />
          <MetricCard
            icon="attach_money"
            label="Portfolio Impact"
            value={dashboardMetrics.portfolioImpact}
            color="#0095FF"
            subtext="Total premium change"
          />
          <MetricCard
            icon="map"
            label="States Affected"
            value={dashboardMetrics.statesAffected}
            color="#666666"
            subtext="Active jurisdictions"
          />
        </DxcFlex>

        {/* Main Content with Tabs */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: 'var(--border-radius-m)',
            boxShadow: 'var(--shadow-mid-02)',
            overflow: 'hidden'
          }}
        >
          <div style={{ padding: '8px 16px', borderBottom: '1px solid #E0E0E0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <DxcTabs
              activeTabIndex={activeTab}
              onTabClick={(index) => setActiveTab(index)}
              tabs={[
                { label: `My Rate Changes (${myRateChanges.length})` },
                { label: `All Changes (${rateChanges.length})` },
                { label: `High Priority (${urgentChanges.length})` }
              ]}
            />
            <DxcFlex alignItems="center" gap="var(--spacing-gap-xs)">
              <span
                onClick={() => setViewMode('cards')}
                className="material-icons"
                style={{
                  fontSize: '20px',
                  color: viewMode === 'cards' ? '#0095FF' : '#999999',
                  cursor: 'pointer'
                }}
              >
                grid_view
              </span>
              <span
                onClick={() => setViewMode('table')}
                className="material-icons"
                style={{
                  fontSize: '20px',
                  color: viewMode === 'table' ? '#0095FF' : '#999999',
                  cursor: 'pointer'
                }}
              >
                view_list
              </span>
            </DxcFlex>
          </div>

          <div style={{ padding: 'var(--spacing-padding-m)' }}>
            {activeTab === 0 && (
              viewMode === 'cards'
                ? renderRateChangesGrid(myRateChanges)
                : renderRateChangesTable(myRateChanges)
            )}
            {activeTab === 1 && (
              viewMode === 'cards'
                ? renderRateChangesGrid(rateChanges)
                : renderRateChangesTable(rateChanges)
            )}
            {activeTab === 2 && (
              viewMode === 'cards'
                ? renderRateChangesGrid(urgentChanges)
                : renderRateChangesTable(urgentChanges)
            )}
          </div>
        </div>

        {/* Priority Items Section */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: 'var(--border-radius-m)',
            boxShadow: 'var(--shadow-mid-02)',
            padding: 'var(--spacing-padding-m)'
          }}
        >
          <DxcFlex direction="column" gap="var(--spacing-gap-m)">
            <DxcFlex justifyContent="space-between" alignItems="center">
              <DxcFlex alignItems="center" gap="var(--spacing-gap-xs)">
                <span
                  className="material-icons"
                  style={{ fontSize: '20px', color: '#D0021B' }}
                >
                  priority_high
                </span>
                <DxcHeading level={4} text="Urgent Rate Changes" />
              </DxcFlex>
              <span style={{ fontSize: '12px', color: '#666666' }}>
                Items requiring immediate attention
              </span>
            </DxcFlex>

            <DxcFlex direction="column" gap="var(--spacing-gap-xs)">
              {urgentChanges.slice(0, 3).map((change) => (
                <div
                  key={change.id}
                  onClick={() => onSelectRateChange(change)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px',
                    backgroundColor: '#FFF5F5',
                    borderRadius: 'var(--border-radius-s)',
                    cursor: 'pointer',
                    border: '1px solid #FFE0E0'
                  }}
                >
                  <DxcFlex alignItems="center" gap="var(--spacing-gap-m)">
                    <span
                      className="material-icons"
                      style={{ fontSize: '18px', color: getPriorityColor(change.priority) }}
                    >
                      flag
                    </span>
                    <DxcFlex direction="column">
                      <span style={{ fontSize: '14px', fontWeight: '500' }}>
                        {change.changeTitle}
                      </span>
                      <span style={{ fontSize: '12px', color: '#666666' }}>
                        {change.id} | Due: {change.dueDate} | Impact: {change.premiumImpact}
                      </span>
                    </DxcFlex>
                  </DxcFlex>
                  <DxcBadge label={change.priority} size="small" />
                </div>
              ))}
            </DxcFlex>
          </DxcFlex>
        </div>
      </DxcFlex>
    </div>
  );
};

export default Dashboard;
