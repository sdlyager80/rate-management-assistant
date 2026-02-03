import { useState } from 'react';
import {
  DxcFlex,
  DxcHeading,
  DxcButton,
  DxcTextInput,
  DxcSelect,
  DxcTextarea,
  DxcRadioGroup,
  DxcAlert,
  DxcTypography,
  DxcFileInput
} from '@dxc-technology/halstack-react';
import { linesOfBusiness, states, rateSources } from '../../data/mockData';

const RateIntake = ({ onSubmit, onCancel }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    changeTitle: '',
    source: '',
    lineOfBusiness: [],
    statesAffected: [],
    effectiveDate: '',
    description: '',
    importMethod: 'file',
    file: null,
    apiEndpoint: '',
    circularNumber: '',
    estimatedImpact: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    setShowSuccess(true);
    setTimeout(() => {
      onSubmit();
    }, 2000);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.changeTitle && formData.source && formData.lineOfBusiness.length > 0;
      case 2:
        return formData.statesAffected.length > 0 && formData.effectiveDate;
      case 3:
        return formData.importMethod === 'file' ? formData.file : formData.apiEndpoint;
      case 4:
        return true;
      default:
        return false;
    }
  };

  const renderStep1 = () => (
    <DxcFlex direction="column" gap="var(--spacing-gap-l)">
      <DxcHeading level={4} text="Basic Information" />

      <DxcTextInput
        label="Rate Change Title"
        placeholder="Enter a descriptive title"
        value={formData.changeTitle}
        onChange={({ value }) => handleInputChange('changeTitle', value)}
        required
      />

      <DxcSelect
        label="Rate Source"
        placeholder="Select rate source"
        options={rateSources}
        value={formData.source}
        onChange={({ value }) => handleInputChange('source', value)}
        required
      />

      <DxcSelect
        label="Lines of Business"
        placeholder="Select affected lines"
        options={linesOfBusiness}
        value={formData.lineOfBusiness}
        onChange={({ value }) => handleInputChange('lineOfBusiness', value)}
        multiple
        required
      />

      <DxcTextInput
        label="Circular/Filing Number"
        placeholder="e.g., NCCI-2024-Q1-WC"
        value={formData.circularNumber}
        onChange={({ value }) => handleInputChange('circularNumber', value)}
      />

      <DxcTextarea
        label="Description"
        placeholder="Describe the nature of this rate change"
        value={formData.description}
        onChange={({ value }) => handleInputChange('description', value)}
        rows={4}
      />
    </DxcFlex>
  );

  const renderStep2 = () => (
    <DxcFlex direction="column" gap="var(--spacing-gap-l)">
      <DxcHeading level={4} text="Scope & Timing" />

      <DxcSelect
        label="States Affected"
        placeholder="Select states"
        options={states}
        value={formData.statesAffected}
        onChange={({ value }) => handleInputChange('statesAffected', value)}
        multiple
        required
      />

      <DxcTextInput
        label="Effective Date"
        placeholder="YYYY-MM-DD"
        value={formData.effectiveDate}
        onChange={({ value }) => handleInputChange('effectiveDate', value)}
        type="date"
        required
      />

      <DxcTextInput
        label="Estimated Premium Impact"
        placeholder="e.g., +$5.2M or +4.5%"
        value={formData.estimatedImpact}
        onChange={({ value }) => handleInputChange('estimatedImpact', value)}
      />

      <div
        style={{
          padding: 'var(--spacing-padding-m)',
          backgroundColor: '#E8F4FD',
          borderRadius: 'var(--border-radius-m)',
          border: '1px solid #B8DAFF'
        }}
      >
        <DxcFlex alignItems="center" gap="var(--spacing-gap-s)">
          <span className="material-icons" style={{ fontSize: '20px', color: '#0095FF' }}>
            info
          </span>
          <DxcTypography fontSize="font-scale-02" color="#004085">
            The system will automatically calculate the actual portfolio impact in the next step based on your current book of business.
          </DxcTypography>
        </DxcFlex>
      </div>
    </DxcFlex>
  );

  const renderStep3 = () => (
    <DxcFlex direction="column" gap="var(--spacing-gap-l)">
      <DxcHeading level={4} text="Import Rating Data" />

      <DxcRadioGroup
        label="Import Method"
        options={[
          { label: 'Upload File (CSV, Excel, ALR, NCCI Format)', value: 'file' },
          { label: 'Connect via API', value: 'api' }
        ]}
        value={formData.importMethod}
        onChange={({ value }) => handleInputChange('importMethod', value)}
      />

      {formData.importMethod === 'file' ? (
        <DxcFlex direction="column" gap="var(--spacing-gap-m)">
          <DxcFileInput
            label="Select Rating File"
            accept=".csv,.xlsx,.xls,.txt"
            onChange={({ files }) => handleInputChange('file', files[0])}
          />

          <div
            style={{
              padding: 'var(--spacing-padding-m)',
              backgroundColor: '#F5F7FA',
              borderRadius: 'var(--border-radius-m)',
              border: '1px solid #E0E0E0'
            }}
          >
            <DxcFlex direction="column" gap="var(--spacing-gap-xs)">
              <span style={{ fontSize: '13px', fontWeight: '600', color: '#333333' }}>
                Supported File Formats:
              </span>
              <ul style={{ marginLeft: '20px', fontSize: '13px', color: '#666666' }}>
                <li>CSV - Comma-separated values</li>
                <li>Excel - .xlsx or .xls format</li>
                <li>ALR - Advisory Loss Ratio files</li>
                <li>NCCI - Workers Comp loss cost files</li>
                <li>Text - Tab-delimited .txt files</li>
              </ul>
            </DxcFlex>
          </div>
        </DxcFlex>
      ) : (
        <DxcFlex direction="column" gap="var(--spacing-gap-m)">
          <DxcTextInput
            label="API Endpoint URL"
            placeholder="https://api.example.com/rates/import"
            value={formData.apiEndpoint}
            onChange={({ value }) => handleInputChange('apiEndpoint', value)}
          />

          <DxcTextInput
            label="API Key (Optional)"
            placeholder="Enter API authentication key"
            type="password"
          />

          <DxcButton
            label="Test Connection"
            mode="secondary"
            icon="link"
          />
        </DxcFlex>
      )}

      <div
        style={{
          padding: 'var(--spacing-padding-m)',
          backgroundColor: '#FFF4E5',
          borderRadius: 'var(--border-radius-m)',
          border: '1px solid #FFE0B2'
        }}
      >
        <DxcFlex alignItems="center" gap="var(--spacing-gap-s)">
          <span className="material-icons" style={{ fontSize: '20px', color: '#FF6B00' }}>
            warning
          </span>
          <DxcTypography fontSize="font-scale-02" color="#663C00">
            The system will automatically map imported data to your internal class codes and rating structures. Manual review will be required before deployment.
          </DxcTypography>
        </DxcFlex>
      </div>
    </DxcFlex>
  );

  const renderStep4 = () => (
    <DxcFlex direction="column" gap="var(--spacing-gap-l)">
      <DxcHeading level={4} text="Review & Confirm" />

      <div
        style={{
          padding: 'var(--spacing-padding-m)',
          backgroundColor: 'white',
          borderRadius: 'var(--border-radius-m)',
          border: '1px solid #E0E0E0'
        }}
      >
        <DxcFlex direction="column" gap="var(--spacing-gap-m)">
          <div>
            <span style={{ fontSize: '12px', color: '#999999', textTransform: 'uppercase' }}>Rate Change Title</span>
            <div style={{ fontSize: '16px', fontWeight: '600', color: '#333333', marginTop: '4px' }}>
              {formData.changeTitle}
            </div>
          </div>

          <DxcFlex wrap="wrap" gap="var(--spacing-gap-l)">
            <div>
              <span style={{ fontSize: '12px', color: '#999999', textTransform: 'uppercase' }}>Source</span>
              <div style={{ fontSize: '14px', color: '#333333', marginTop: '4px' }}>
                {rateSources.find(s => s.value === formData.source)?.label || formData.source}
              </div>
            </div>

            <div>
              <span style={{ fontSize: '12px', color: '#999999', textTransform: 'uppercase' }}>Effective Date</span>
              <div style={{ fontSize: '14px', color: '#333333', marginTop: '4px' }}>
                {formData.effectiveDate}
              </div>
            </div>

            <div>
              <span style={{ fontSize: '12px', color: '#999999', textTransform: 'uppercase' }}>Estimated Impact</span>
              <div style={{ fontSize: '14px', fontWeight: '600', color: '#0095FF', marginTop: '4px' }}>
                {formData.estimatedImpact || 'To be calculated'}
              </div>
            </div>
          </DxcFlex>

          <div>
            <span style={{ fontSize: '12px', color: '#999999', textTransform: 'uppercase' }}>Lines of Business</span>
            <div style={{ fontSize: '14px', color: '#333333', marginTop: '4px' }}>
              {formData.lineOfBusiness.map(lob =>
                linesOfBusiness.find(l => l.value === lob)?.label
              ).join(', ')}
            </div>
          </div>

          <div>
            <span style={{ fontSize: '12px', color: '#999999', textTransform: 'uppercase' }}>States Affected</span>
            <div style={{ fontSize: '14px', color: '#333333', marginTop: '4px' }}>
              {formData.statesAffected.length} states: {formData.statesAffected.slice(0, 5).join(', ')}
              {formData.statesAffected.length > 5 && ` and ${formData.statesAffected.length - 5} more`}
            </div>
          </div>

          {formData.description && (
            <div>
              <span style={{ fontSize: '12px', color: '#999999', textTransform: 'uppercase' }}>Description</span>
              <div style={{ fontSize: '14px', color: '#333333', marginTop: '4px', lineHeight: '1.6' }}>
                {formData.description}
              </div>
            </div>
          )}
        </DxcFlex>
      </div>

      <div
        style={{
          padding: 'var(--spacing-padding-l)',
          backgroundColor: '#E8FFF3',
          borderRadius: 'var(--border-radius-m)',
          border: '1px solid #BBF7D0'
        }}
      >
        <DxcFlex direction="column" gap="var(--spacing-gap-m)">
          <DxcFlex alignItems="center" gap="var(--spacing-gap-s)">
            <span className="material-icons" style={{ fontSize: '24px', color: '#24A148' }}>
              check_circle
            </span>
            <DxcHeading level={5} text="What happens next?" />
          </DxcFlex>

          <ul style={{ marginLeft: '40px', fontSize: '14px', color: '#1B5E20', lineHeight: '2' }}>
            <li>System will import and validate the rating data</li>
            <li>Automatic mapping to internal class codes and structures</li>
            <li>Portfolio impact analysis will be performed</li>
            <li>You'll receive a detailed impact report within 15 minutes</li>
            <li>Manual review and approval workflow will be initiated</li>
            <li>Compliance checks will verify state filing requirements</li>
          </ul>
        </DxcFlex>
      </div>
    </DxcFlex>
  );

  return (
    <div style={{ padding: 'var(--spacing-padding-l)', backgroundColor: '#F5F7FA', minHeight: '100vh' }}>
      <DxcFlex direction="column" gap="var(--spacing-gap-l)">
        {/* Header */}
        <DxcFlex direction="column" gap="var(--spacing-gap-m)">
          <DxcHeading level={2} text="Import Rate Changes" />
          <span style={{ fontSize: '14px', color: '#666666' }}>
            Import ALR or NCCI rate updates and analyze their impact on your portfolio
          </span>
        </DxcFlex>

        {/* Progress Indicator */}
        <div
          style={{
            padding: 'var(--spacing-padding-m)',
            backgroundColor: 'white',
            borderRadius: 'var(--border-radius-m)',
            boxShadow: 'var(--shadow-mid-02)'
          }}
        >
          <DxcFlex justifyContent="space-between" alignItems="center">
            {[1, 2, 3, 4].map((step) => (
              <DxcFlex key={step} alignItems="center" style={{ flex: 1 }}>
                <DxcFlex alignItems="center" gap="var(--spacing-gap-xs)">
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: currentStep >= step ? '#0095FF' : '#E0E0E0',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '600',
                      fontSize: '14px'
                    }}
                  >
                    {currentStep > step ? (
                      <span className="material-icons" style={{ fontSize: '18px' }}>check</span>
                    ) : (
                      step
                    )}
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: currentStep === step ? '600' : '400', color: currentStep >= step ? '#333333' : '#999999' }}>
                    {step === 1 && 'Basic Info'}
                    {step === 2 && 'Scope'}
                    {step === 3 && 'Import Data'}
                    {step === 4 && 'Review'}
                  </span>
                </DxcFlex>
                {step < 4 && (
                  <div
                    style={{
                      flex: 1,
                      height: '2px',
                      backgroundColor: currentStep > step ? '#0095FF' : '#E0E0E0',
                      margin: '0 var(--spacing-gap-s)'
                    }}
                  />
                )}
              </DxcFlex>
            ))}
          </DxcFlex>
        </div>

        {/* Success Alert */}
        {showSuccess && (
          <DxcAlert
            type="success"
            title="Rate change imported successfully!"
            inlineText="Your rate change has been submitted for processing. You'll receive an impact analysis report shortly."
          />
        )}

        {/* Form Content */}
        <div
          style={{
            padding: 'var(--spacing-padding-l)',
            backgroundColor: 'white',
            borderRadius: 'var(--border-radius-m)',
            boxShadow: 'var(--shadow-mid-02)'
          }}
        >
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}
        </div>

        {/* Navigation Buttons */}
        <DxcFlex justifyContent="space-between">
          <DxcFlex gap="var(--spacing-gap-s)">
            {currentStep > 1 && (
              <DxcButton
                label="Back"
                mode="secondary"
                icon="arrow_back"
                onClick={handleBack}
              />
            )}
            <DxcButton
              label="Cancel"
              mode="tertiary"
              onClick={onCancel}
            />
          </DxcFlex>

          <DxcFlex gap="var(--spacing-gap-s)">
            {currentStep < 4 ? (
              <DxcButton
                label="Next"
                mode="primary"
                icon="arrow_forward"
                iconPosition="after"
                onClick={handleNext}
                disabled={!isStepValid()}
              />
            ) : (
              <DxcButton
                label="Submit & Import"
                mode="primary"
                icon="check_circle"
                onClick={handleSubmit}
                disabled={showSuccess}
              />
            )}
          </DxcFlex>
        </DxcFlex>
      </DxcFlex>
    </div>
  );
};

export default RateIntake;
