import { useState } from 'react';
import {
  DxcFlex,
  DxcHeading,
  DxcButton,
  DxcBadge,
  DxcTabs,
  DxcTypography,
  DxcCheckbox
} from '@dxc-technology/halstack-react';
import { rateChangeDetails } from '../../data/mockData';

const RateImpactDetail = ({ rateChange, onBack }) => {
  const [activeTab, setActiveTab] = useState(0);
  const details = rateChangeDetails[rateChange.id];

  if (!details) {
    return (
      <div style={{ padding: 'var(--spacing-padding-l)' }}>
        <DxcButton label="Back to Dashboard" mode="secondary" onClick={onBack} />
        <DxcTypography>Rate change details not found.</DxcTypography>
      </div>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'green';
      case 'in_progress': return 'blue';
      case 'pending': return 'grey';
      case 'Approved': return 'green';
      case 'Pending': return 'yellow';
      default: return 'grey';
    }
  };

  const InfoRow = ({ label, value, icon }) => (
    <DxcFlex alignItems="center" gap="var(--spacing-gap-xs)" style={{ minWidth: '200px' }}>
      {icon && (
        <span className="material-icons" style={{ fontSize: '18px', color: '#666666' }}>
          {icon}
        </span>
      )}
      <DxcFlex direction="column">
        <span style={{ fontSize: '11px', color: '#999999', textTransform: 'uppercase' }}>
          {label}
        </span>
        <span style={{ fontSize: '14px', fontWeight: '500', color: '#333333' }}>
          {value}
        </span>
      </DxcFlex>
    </DxcFlex>
  );

  const renderOverview = () => (
    <DxcFlex direction="column" gap="var(--spacing-gap-l)">
      {/* Key Information */}
      <div
        style={{
          padding: 'var(--spacing-padding-m)',
          backgroundColor: 'white',
          borderRadius: 'var(--border-radius-m)',
          border: '1px solid #E0E0E0'
        }}
      >
        <DxcFlex direction="column" gap="var(--spacing-gap-m)">
          <DxcHeading level={4} text="Rate Change Information" />
          <DxcFlex wrap="wrap" gap="var(--spacing-gap-l)">
            <InfoRow label="Change ID" value={details.id} icon="tag" />
            <InfoRow label="Source" value={details.source} icon="source" />
            <InfoRow label="Effective Date" value={details.effectiveDate} icon="event" />
            <InfoRow label="Filing Deadline" value={details.filingDeadline} icon="schedule" />
            <InfoRow label="Created By" value={details.createdBy} icon="person" />
            <InfoRow label="Created Date" value={details.createdDate} icon="calendar_today" />
          </DxcFlex>

          <div style={{ marginTop: 'var(--spacing-gap-s)' }}>
            <span style={{ fontSize: '12px', color: '#666666', fontWeight: '500' }}>Description</span>
            <p style={{ fontSize: '14px', color: '#333333', marginTop: '4px', lineHeight: '1.6' }}>
              {details.description}
            </p>
          </div>
        </DxcFlex>
      </div>

      {/* Business Impact */}
      <div
        style={{
          padding: 'var(--spacing-padding-m)',
          backgroundColor: 'white',
          borderRadius: 'var(--border-radius-m)',
          border: '1px solid #E0E0E0'
        }}
      >
        <DxcFlex direction="column" gap="var(--spacing-gap-m)">
          <DxcFlex alignItems="center" gap="var(--spacing-gap-xs)">
            <span className="material-icons" style={{ fontSize: '24px', color: '#0095FF' }}>
              analytics
            </span>
            <DxcHeading level={4} text="Business Impact Summary" />
          </DxcFlex>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'var(--spacing-gap-m)'
            }}
          >
            <div style={{ padding: 'var(--spacing-padding-s)', backgroundColor: '#F5F7FA', borderRadius: 'var(--border-radius-s)' }}>
              <span style={{ fontSize: '11px', color: '#999999', textTransform: 'uppercase' }}>Total Premium Impact</span>
              <div style={{ fontSize: '24px', fontWeight: '700', color: '#0095FF', marginTop: '4px' }}>
                {details.businessImpact.totalPremiumImpact}
              </div>
            </div>

            <div style={{ padding: 'var(--spacing-padding-s)', backgroundColor: '#F5F7FA', borderRadius: 'var(--border-radius-s)' }}>
              <span style={{ fontSize: '11px', color: '#999999', textTransform: 'uppercase' }}>Percentage Change</span>
              <div style={{ fontSize: '24px', fontWeight: '700', color: '#24A148', marginTop: '4px' }}>
                {details.businessImpact.percentageChange}
              </div>
            </div>

            <div style={{ padding: 'var(--spacing-padding-s)', backgroundColor: '#F5F7FA', borderRadius: 'var(--border-radius-s)' }}>
              <span style={{ fontSize: '11px', color: '#999999', textTransform: 'uppercase' }}>Affected Policies</span>
              <div style={{ fontSize: '24px', fontWeight: '700', color: '#333333', marginTop: '4px' }}>
                {details.businessImpact.affectedPolicyCount.toLocaleString()}
              </div>
            </div>

            <div style={{ padding: 'var(--spacing-padding-s)', backgroundColor: '#F5F7FA', borderRadius: 'var(--border-radius-s)' }}>
              <span style={{ fontSize: '11px', color: '#999999', textTransform: 'uppercase' }}>Renewals</span>
              <div style={{ fontSize: '24px', fontWeight: '700', color: '#333333', marginTop: '4px' }}>
                {details.businessImpact.renewalCount.toLocaleString()}
              </div>
            </div>
          </div>
        </DxcFlex>
      </div>

      {/* State Breakdown */}
      <div
        style={{
          padding: 'var(--spacing-padding-m)',
          backgroundColor: 'white',
          borderRadius: 'var(--border-radius-m)',
          border: '1px solid #E0E0E0'
        }}
      >
        <DxcFlex direction="column" gap="var(--spacing-gap-m)">
          <DxcFlex alignItems="center" gap="var(--spacing-gap-xs)">
            <span className="material-icons" style={{ fontSize: '24px', color: '#0095FF' }}>
              map
            </span>
            <DxcHeading level={4} text="State-by-State Breakdown" />
          </DxcFlex>

          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '12px', borderBottom: '2px solid #E0E0E0', fontSize: '13px', fontWeight: '600', color: '#666666' }}>State</th>
                <th style={{ textAlign: 'left', padding: '12px', borderBottom: '2px solid #E0E0E0', fontSize: '13px', fontWeight: '600', color: '#666666' }}>Class Codes Affected</th>
                <th style={{ textAlign: 'left', padding: '12px', borderBottom: '2px solid #E0E0E0', fontSize: '13px', fontWeight: '600', color: '#666666' }}>Avg Change</th>
                <th style={{ textAlign: 'left', padding: '12px', borderBottom: '2px solid #E0E0E0', fontSize: '13px', fontWeight: '600', color: '#666666' }}>Premium Impact</th>
                <th style={{ textAlign: 'left', padding: '12px', borderBottom: '2px solid #E0E0E0', fontSize: '13px', fontWeight: '600', color: '#666666' }}>Policy Count</th>
              </tr>
            </thead>
            <tbody>
              {details.stateBreakdown.map((state) => (
                <tr key={state.state} style={{ borderBottom: '1px solid #F0F0F0' }}>
                  <td style={{ padding: '12px', fontSize: '14px', fontWeight: '600' }}>{state.state}</td>
                  <td style={{ padding: '12px', fontSize: '14px' }}>{state.classCodesAffected}</td>
                  <td style={{ padding: '12px', fontSize: '14px', fontWeight: '600', color: '#24A148' }}>{state.avgChange}</td>
                  <td style={{ padding: '12px', fontSize: '14px', fontWeight: '600', color: '#0095FF' }}>{state.premiumImpact}</td>
                  <td style={{ padding: '12px', fontSize: '14px' }}>{state.policyCount.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DxcFlex>
      </div>

      {/* Hazard Group Impact */}
      <div
        style={{
          padding: 'var(--spacing-padding-m)',
          backgroundColor: 'white',
          borderRadius: 'var(--border-radius-m)',
          border: '1px solid #E0E0E0'
        }}
      >
        <DxcFlex direction="column" gap="var(--spacing-gap-m)">
          <DxcFlex alignItems="center" gap="var(--spacing-gap-xs)">
            <span className="material-icons" style={{ fontSize: '24px', color: '#0095FF' }}>
              category
            </span>
            <DxcHeading level={4} text="Hazard Group Impact" />
          </DxcFlex>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: 'var(--spacing-gap-m)'
            }}
          >
            {details.hazardGroupImpact.map((group) => (
              <div
                key={group.group}
                style={{
                  padding: 'var(--spacing-padding-m)',
                  backgroundColor: '#F5F7FA',
                  borderRadius: 'var(--border-radius-m)',
                  border: '1px solid #E0E0E0'
                }}
              >
                <DxcFlex direction="column" gap="var(--spacing-gap-xs)">
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#333333' }}>
                    {group.group}
                  </span>
                  <DxcFlex justifyContent="space-between">
                    <span style={{ fontSize: '12px', color: '#666666' }}>Avg Change:</span>
                    <span style={{ fontSize: '14px', fontWeight: '600', color: '#24A148' }}>{group.avgChange}</span>
                  </DxcFlex>
                  <DxcFlex justifyContent="space-between">
                    <span style={{ fontSize: '12px', color: '#666666' }}>Policies:</span>
                    <span style={{ fontSize: '14px', fontWeight: '600' }}>{group.policyCount.toLocaleString()}</span>
                  </DxcFlex>
                  <DxcFlex justifyContent="space-between">
                    <span style={{ fontSize: '12px', color: '#666666' }}>Impact:</span>
                    <span style={{ fontSize: '14px', fontWeight: '600', color: '#0095FF' }}>{group.premiumImpact}</span>
                  </DxcFlex>
                </DxcFlex>
              </div>
            ))}
          </div>
        </DxcFlex>
      </div>
    </DxcFlex>
  );

  const renderTimeline = () => (
    <div
      style={{
        padding: 'var(--spacing-padding-m)',
        backgroundColor: 'white',
        borderRadius: 'var(--border-radius-m)',
        border: '1px solid #E0E0E0'
      }}
    >
      <DxcFlex direction="column" gap="var(--spacing-gap-l)">
        <DxcHeading level={4} text="Activity Timeline" />

        <div style={{ position: 'relative', paddingLeft: '40px' }}>
          {details.timeline.map((event, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                paddingBottom: index < details.timeline.length - 1 ? 'var(--spacing-gap-l)' : '0',
                borderLeft: index < details.timeline.length - 1 ? '2px solid #E0E0E0' : 'none',
                marginLeft: '12px'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: '-18px',
                  top: '0',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: '#0095FF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <span className="material-icons" style={{ fontSize: '14px', color: 'white' }}>
                  check
                </span>
              </div>

              <div style={{ marginLeft: 'var(--spacing-gap-m)' }}>
                <DxcFlex justifyContent="space-between" alignItems="flex-start">
                  <DxcFlex direction="column" gap="4px">
                    <span style={{ fontSize: '14px', fontWeight: '600', color: '#333333' }}>
                      {event.action}
                    </span>
                    <span style={{ fontSize: '13px', color: '#666666' }}>
                      {event.details}
                    </span>
                    <span style={{ fontSize: '12px', color: '#999999' }}>
                      By {event.user}
                    </span>
                  </DxcFlex>
                  <span style={{ fontSize: '12px', color: '#999999' }}>
                    {event.date}
                  </span>
                </DxcFlex>
              </div>
            </div>
          ))}
        </div>
      </DxcFlex>
    </div>
  );

  const renderApprovals = () => (
    <div
      style={{
        padding: 'var(--spacing-padding-m)',
        backgroundColor: 'white',
        borderRadius: 'var(--border-radius-m)',
        border: '1px solid #E0E0E0'
      }}
    >
      <DxcFlex direction="column" gap="var(--spacing-gap-l)">
        <DxcHeading level={4} text="Approval Status" />

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '2px solid #E0E0E0', fontSize: '13px', fontWeight: '600', color: '#666666' }}>Role</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '2px solid #E0E0E0', fontSize: '13px', fontWeight: '600', color: '#666666' }}>Name</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '2px solid #E0E0E0', fontSize: '13px', fontWeight: '600', color: '#666666' }}>Status</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '2px solid #E0E0E0', fontSize: '13px', fontWeight: '600', color: '#666666' }}>Date</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '2px solid #E0E0E0', fontSize: '13px', fontWeight: '600', color: '#666666' }}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {details.approvals.map((approval, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #F0F0F0' }}>
                <td style={{ padding: '12px', fontSize: '14px', fontWeight: '500' }}>{approval.role}</td>
                <td style={{ padding: '12px', fontSize: '14px' }}>{approval.name}</td>
                <td style={{ padding: '12px' }}>
                  <DxcBadge label={approval.status} color={getStatusColor(approval.status)} size="small" />
                </td>
                <td style={{ padding: '12px', fontSize: '14px' }}>{approval.date || '-'}</td>
                <td style={{ padding: '12px', fontSize: '13px', color: '#666666' }}>{approval.notes || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </DxcFlex>
    </div>
  );

  const renderChecklist = () => (
    <div
      style={{
        padding: 'var(--spacing-padding-m)',
        backgroundColor: 'white',
        borderRadius: 'var(--border-radius-m)',
        border: '1px solid #E0E0E0'
      }}
    >
      <DxcFlex direction="column" gap="var(--spacing-gap-l)">
        <DxcFlex justifyContent="space-between" alignItems="center">
          <DxcHeading level={4} text="Implementation Checklist" />
          <span style={{ fontSize: '13px', color: '#666666' }}>
            {details.checklist.filter(item => item.status === 'completed').length} of {details.checklist.length} completed
          </span>
        </DxcFlex>

        <DxcFlex direction="column" gap="var(--spacing-gap-s)">
          {details.checklist.map((item) => (
            <div
              key={item.id}
              style={{
                padding: 'var(--spacing-padding-s)',
                backgroundColor: item.status === 'completed' ? '#F0FDF4' : '#F5F7FA',
                borderRadius: 'var(--border-radius-s)',
                border: `1px solid ${item.status === 'completed' ? '#BBF7D0' : '#E0E0E0'}`
              }}
            >
              <DxcFlex alignItems="center" justifyContent="space-between">
                <DxcFlex alignItems="center" gap="var(--spacing-gap-s)">
                  <DxcCheckbox
                    checked={item.status === 'completed'}
                    disabled
                  />
                  <DxcFlex direction="column">
                    <span style={{ fontSize: '14px', color: '#333333' }}>
                      {item.label}
                    </span>
                    <span style={{ fontSize: '12px', color: '#666666' }}>
                      Assigned to: {item.assignedTo}
                    </span>
                  </DxcFlex>
                </DxcFlex>
                <DxcBadge
                  label={item.status === 'completed' ? 'Done' : item.status === 'in_progress' ? 'In Progress' : 'Pending'}
                  color={getStatusColor(item.status)}
                  size="small"
                />
              </DxcFlex>
            </div>
          ))}
        </DxcFlex>
      </DxcFlex>
    </div>
  );

  const renderDocuments = () => (
    <div
      style={{
        padding: 'var(--spacing-padding-m)',
        backgroundColor: 'white',
        borderRadius: 'var(--border-radius-m)',
        border: '1px solid #E0E0E0'
      }}
    >
      <DxcFlex direction="column" gap="var(--spacing-gap-l)">
        <DxcHeading level={4} text="Documents" />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 'var(--spacing-gap-m)'
          }}
        >
          {details.documents.map((doc, index) => (
            <div
              key={index}
              style={{
                padding: 'var(--spacing-padding-m)',
                backgroundColor: '#F5F7FA',
                borderRadius: 'var(--border-radius-m)',
                border: '1px solid #E0E0E0',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E8EFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#F5F7FA';
              }}
            >
              <DxcFlex alignItems="center" gap="var(--spacing-gap-s)">
                <span className="material-icons" style={{ fontSize: '32px', color: '#0095FF' }}>
                  description
                </span>
                <DxcFlex direction="column" style={{ flex: 1 }}>
                  <span style={{ fontSize: '14px', fontWeight: '500', color: '#333333' }}>
                    {doc.name}
                  </span>
                  <span style={{ fontSize: '12px', color: '#666666' }}>
                    {doc.type} • {doc.size}
                  </span>
                  <span style={{ fontSize: '11px', color: '#999999' }}>
                    {doc.date}
                  </span>
                </DxcFlex>
                <span className="material-icons" style={{ fontSize: '20px', color: '#666666' }}>
                  download
                </span>
              </DxcFlex>
            </div>
          ))}
        </div>
      </DxcFlex>
    </div>
  );

  return (
    <div style={{ padding: 'var(--spacing-padding-l)', backgroundColor: '#F5F7FA', minHeight: '100vh' }}>
      <DxcFlex direction="column" gap="var(--spacing-gap-l)">
        {/* Header */}
        <DxcFlex direction="column" gap="var(--spacing-gap-m)">
          <DxcButton label="Back to Dashboard" mode="secondary" icon="arrow_back" onClick={onBack} />

          <DxcFlex justifyContent="space-between" alignItems="flex-start">
            <DxcFlex direction="column" gap="var(--spacing-gap-xs)">
              <DxcHeading level={2} text={details.changeTitle} />
              <DxcFlex alignItems="center" gap="var(--spacing-gap-s)">
                <span style={{ fontSize: '14px', color: '#666666' }}>
                  {details.id}
                </span>
                <span style={{ fontSize: '14px', color: '#666666' }}>•</span>
                <DxcBadge label={details.status} color="blue" />
              </DxcFlex>
            </DxcFlex>

            <DxcFlex gap="var(--spacing-gap-s)">
              <DxcButton label="Export Report" mode="secondary" icon="download" />
              <DxcButton label="Request Approval" mode="primary" icon="check_circle" />
            </DxcFlex>
          </DxcFlex>
        </DxcFlex>

        {/* Tabs */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: 'var(--border-radius-m)',
            boxShadow: 'var(--shadow-mid-02)',
            overflow: 'hidden'
          }}
        >
          <div style={{ padding: '8px 16px', borderBottom: '1px solid #E0E0E0' }}>
            <DxcTabs
              activeTabIndex={activeTab}
              onTabClick={(index) => setActiveTab(index)}
              tabs={[
                { label: 'Overview' },
                { label: 'Timeline' },
                { label: 'Approvals' },
                { label: 'Checklist' },
                { label: 'Documents' }
              ]}
            />
          </div>

          <div style={{ padding: 'var(--spacing-padding-l)' }}>
            {activeTab === 0 && renderOverview()}
            {activeTab === 1 && renderTimeline()}
            {activeTab === 2 && renderApprovals()}
            {activeTab === 3 && renderChecklist()}
            {activeTab === 4 && renderDocuments()}
          </div>
        </div>
      </DxcFlex>
    </div>
  );
};

export default RateImpactDetail;
