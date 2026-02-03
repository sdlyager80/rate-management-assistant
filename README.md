# Rate Management Assistant

**ALR + NCCI Integrated Rate Change Modeling & Deployment for P&C Insurers**

A modern, intelligent UI for managing insurance rate changes across multiple lines of business, states, and rating sources. Built with React and DXC Halstack design system.

## Overview

Rate changes today are slow, risky, and siloed by line of business. Rate Management Assistant unifies ALR (Advisory Loss Ratio) and NCCI (National Council on Compensation Insurance) rating updates into one intelligent workflow.

### Key Capabilities

- **Import** ALR files/APIs + NCCI circulars (loss costs, class codes, experience mods)
- **Model** financial + underwriting impact in minutes
- **Tune** pricing for growth vs. profitability
- **Route** for approvals & compliance
- **Deploy** changes into production systems

## Features

### Smart App Modules

| Module | Description |
|--------|-------------|
| **Rating Dashboard** | Overview of all rate changes with metrics and KPIs |
| **Rate Impact Detail** | Comprehensive analysis including state breakdown, hazard groups, timeline, approvals |
| **Rating Intake** | Multi-step import wizard for ALR/NCCI updates with file upload or API integration |
| **Portfolio Impact** | Before vs After premium impact by policy, state, segment, hazard group *(coming soon)* |
| **Filing Management** | Track regulatory submissions and approval status *(coming soon)* |

### Core Features

- **Multi-LOB Support**: Workers Comp, Commercial Auto, GL, Property, BOP, Package, Cyber
- **State Management**: Track rate changes across all 50 states with jurisdiction-specific rules
- **Priority Management**: Flag urgent changes and track approval workflows
- **Document Management**: Attach and track NCCI circulars, impact analyses, filing documentation
- **Timeline Tracking**: Complete audit trail of all rate change activities
- **Approval Workflows**: Multi-level approval routing with attestation and notes

## Technology Stack

- **Framework**: React 19 with Vite
- **UI Components**: DXC Technology Halstack React (@dxc-technology/halstack-react v16)
- **Styling**: Emotion for styled components
- **Icons**: Material Design Icons
- **Font**: Open Sans

### Design Principles

- Uses Halstack design tokens exclusively for consistent spacing, colors, and styling
- Blue color theme (#0095FF primary, #0077CC hover)
- Semantic colors for status indicators (Success: #24A148, Warning: #FF6B00, Error: #D0021B)
- Responsive flexbox layouts with proper gap management
- Compact spacing for professional appearance

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd rate-management-assistant

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` directory.

## Project Structure

```
rate-management-assistant/
├── src/
│   ├── components/
│   │   ├── Dashboard/
│   │   │   └── Dashboard.jsx          # Main dashboard with metrics and rate change list
│   │   ├── RateImpactDetail/
│   │   │   └── RateImpactDetail.jsx   # Detailed rate change view with tabs
│   │   └── RateIntake/
│   │       └── RateIntake.jsx         # Multi-step import wizard
│   ├── data/
│   │   └── mockData.js                # Mock data for development
│   ├── App.jsx                        # Main application layout with navigation
│   ├── main.jsx                       # Application entry point
│   └── index.css                      # Global styles
├── package.json
└── vite.config.js
```

## Usage

### Dashboard

The dashboard provides an at-a-glance view of:
- Pending rate changes
- Active regulatory filings
- Average implementation time
- Filing approval rate
- Total portfolio impact
- States affected

Navigate between:
- **My Rate Changes**: Assigned to current user
- **All Changes**: Complete list of rate changes
- **High Priority**: Urgent and high-priority items

Toggle between card and table views for different visualization preferences.

### Rate Change Details

Click any rate change to view comprehensive details:

**Overview Tab**:
- Rate change information (source, dates, status)
- Business impact summary (premium impact, policy counts)
- State-by-state breakdown
- Hazard group analysis

**Timeline Tab**:
- Complete activity history
- User actions and system events

**Approvals Tab**:
- Approval status by role
- Approval dates and notes

**Checklist Tab**:
- Implementation task tracking
- Assigned owners and status

**Documents Tab**:
- Attached files and documentation
- NCCI circulars, impact reports, filing materials

### Import Rate Changes

The multi-step intake wizard guides you through:

1. **Basic Information**: Title, source, LOB, description
2. **Scope & Timing**: States affected, effective date, estimated impact
3. **Import Data**: Upload files or connect via API
4. **Review & Confirm**: Review all details before submission

Supported file formats:
- CSV (Comma-separated values)
- Excel (.xlsx, .xls)
- ALR (Advisory Loss Ratio files)
- NCCI (Workers Comp loss cost files)
- Text (Tab-delimited .txt)

## Supported Lines of Business

- Workers Compensation
- Commercial Auto
- General Liability
- Commercial Property
- Business Owners Policy (BOP)
- Package Policies
- Cyber Liability
- Professional Liability
- Umbrella/Excess

## Rate Sources

- **ALR** - Advisory Loss Ratio
- **NCCI** - National Council on Compensation Insurance
- **Internal Analysis** - Proprietary rate studies
- **Competitive Analysis** - Market-based adjustments
- **Regulatory Directive** - Mandated changes

## Component Patterns

### Using Halstack Components

```jsx
import { DxcFlex, DxcHeading, DxcButton } from '@dxc-technology/halstack-react';

// Consistent layout with design tokens
<DxcFlex direction="column" gap="var(--spacing-gap-m)">
  <DxcHeading level={2} text="Title" />
  <DxcButton label="Action" mode="primary" />
</DxcFlex>
```

### Design Tokens

```css
/* Spacing */
var(--spacing-gap-xs)    /* Extra small gap */
var(--spacing-gap-s)     /* Small gap */
var(--spacing-gap-m)     /* Medium gap */
var(--spacing-gap-l)     /* Large gap */
var(--spacing-padding-m) /* Medium padding */

/* Colors */
var(--color-bg-primary-lighter)
var(--color-fg-neutral-stronger)
var(--border-radius-m)
var(--shadow-mid-02)
```

## Development

### Adding New Components

1. Create component directory under `src/components/`
2. Use functional components with hooks
3. Import Halstack components for UI
4. Use design tokens for styling
5. Keep components focused and reusable

### Styling Guidelines

- Use Halstack design tokens exclusively
- Avoid custom styled components
- Keep inline styles minimal
- Use blue (#0095FF) as primary color - **NO PURPLE**
- Follow spacing scale: xs < s < m < l < xl

## Deployment

### Vercel (Recommended)

1. Connect GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on push to main branch

### Other Platforms

The production build (`npm run build`) generates static files that can be deployed to any static hosting service.

## Future Enhancements

- [ ] Portfolio impact analysis with policy-level details
- [ ] Market competitiveness analysis
- [ ] Risk concentration monitoring
- [ ] Elasticity modeling for retention impact
- [ ] Regulatory compliance validation
- [ ] Integration with rating engines and PAS systems
- [ ] Real-time collaboration features
- [ ] Advanced reporting and analytics

## License

Proprietary - All rights reserved

## Support

For questions or issues, contact the development team or submit an issue in the repository.

---

Built with ❤️ using React + Vite + DXC Halstack
