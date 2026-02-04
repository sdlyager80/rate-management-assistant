import { useState } from 'react';
import { DxcApplicationLayout, DxcFlex, DxcTypography } from '@dxc-technology/halstack-react';
import Dashboard from './components/Dashboard/Dashboard';
import RateImpactDetail from './components/RateImpactDetail/RateImpactDetail';
import RateIntake from './components/RateIntake/RateIntake';
import { currentUser } from './data/mockData';
import './App.css';

function App() {
  console.log('App component rendering...');
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedRateChange, setSelectedRateChange] = useState(null);
  const [sidenavExpanded, setSidenavExpanded] = useState(true);
  console.log('App state initialized');

  const handleNavigation = (view) => {
    setCurrentView(view);
    if (view !== 'detail') {
      setSelectedRateChange(null);
    }
  };

  const handleSelectRateChange = (rateChange) => {
    setSelectedRateChange(rateChange);
    setCurrentView('detail');
  };

  const handleIntakeSubmitted = () => {
    setCurrentView('dashboard');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard onSelectRateChange={handleSelectRateChange} />;
      case 'detail':
        return (
          <RateImpactDetail
            rateChange={selectedRateChange}
            onBack={() => handleNavigation('dashboard')}
          />
        );
      case 'intake':
        return <RateIntake onSubmit={handleIntakeSubmitted} onCancel={() => handleNavigation('dashboard')} />;
      case 'impact':
        return (
          <div style={{ padding: 'var(--spacing-padding-l)' }}>
            <div style={{
              backgroundColor: 'white',
              padding: 'var(--spacing-padding-l)',
              borderRadius: 'var(--border-radius-m)',
              boxShadow: 'var(--shadow-mid-02)'
            }}>
              <DxcTypography fontWeight="font-weight-semibold">Portfolio Impact Tool</DxcTypography>
              <DxcTypography color="#666666">
                Advanced impact modeling coming soon...
              </DxcTypography>
            </div>
          </div>
        );
      case 'filings':
        return (
          <div style={{ padding: 'var(--spacing-padding-l)' }}>
            <div style={{
              backgroundColor: 'white',
              padding: 'var(--spacing-padding-l)',
              borderRadius: 'var(--border-radius-m)',
              boxShadow: 'var(--shadow-mid-02)'
            }}>
              <DxcTypography fontWeight="font-weight-semibold">Filing Management</DxcTypography>
              <DxcTypography color="#666666">
                Regulatory filing tracking coming soon...
              </DxcTypography>
            </div>
          </div>
        );
      default:
        return <Dashboard onSelectRateChange={handleSelectRateChange} />;
    }
  };

  const sidenavItems = [
    {
      label: "Dashboard",
      icon: "dashboard",
      selected: currentView === 'dashboard',
      onClick: () => handleNavigation('dashboard')
    },
    {
      label: "My Rate Changes",
      icon: "trending_up",
      selected: currentView === 'mychanges',
      onClick: () => handleNavigation('dashboard')
    },
    {
      label: "Import Rates",
      icon: "upload_file",
      selected: currentView === 'intake',
      onClick: () => handleNavigation('intake')
    },
    {
      label: "Impact Analysis",
      icon: "analytics",
      selected: currentView === 'impact',
      onClick: () => handleNavigation('impact')
    },
    {
      label: "Filings",
      icon: "description",
      selected: currentView === 'filings',
      onClick: () => handleNavigation('filings')
    },
    {
      label: "Reports",
      icon: "assessment",
      selected: currentView === 'reports',
      onClick: () => handleNavigation('dashboard')
    }
  ];

  return (
    <DxcApplicationLayout
      header={
        <DxcApplicationLayout.Header
          appTitle="Rate Impact and Change Assistant"
          sideContent={(isResponsive) =>
            isResponsive ? null : (
              <DxcFlex gap="var(--spacing-gap-m)" alignItems="center">
                <DxcFlex direction="column" gap="var(--spacing-gap-none)">
                  <DxcTypography>{currentUser.name}</DxcTypography>
                  <DxcTypography
                    fontSize="font-scale-01"
                    color="var(--color-fg-neutral-stronger)"
                  >
                    {currentUser.role}
                  </DxcTypography>
                </DxcFlex>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-bg-primary-lighter)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-fg-primary-stronger)",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  {currentUser.avatar}
                </div>
              </DxcFlex>
            )
          }
        />
      }
      sidenav={
        <DxcApplicationLayout.Sidenav
          navItems={sidenavItems}
          expanded={sidenavExpanded}
          onExpandedChange={setSidenavExpanded}
        />
      }
    >
      <DxcApplicationLayout.Main>
        {renderContent()}
      </DxcApplicationLayout.Main>
    </DxcApplicationLayout>
  );
}

export default App;
