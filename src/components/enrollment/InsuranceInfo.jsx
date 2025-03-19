export default function InsuranceInfo({ formData, updateFormData, onNext, onBack }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  const handleCoverageChange = (type) => {
    const newCoverage = { ...formData.currentCoverage };
    
    // If "None" is selected, uncheck all others
    if (type === 'none') {
      Object.keys(newCoverage).forEach(key => {
        newCoverage[key] = key === 'none' ? !newCoverage[key] : false;
      });
    } else {
      // If any other is selected, uncheck "None"
      newCoverage[type] = !newCoverage[type];
      newCoverage.none = false;
    }

    updateFormData({ currentCoverage: newCoverage });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-center mb-4" style={{ color: '#1B3B21' }}>Insurance Information</h2>
      
      <div className="mb-4">
        <h4 style={{ color: '#1B3B21' }}>Current Coverage</h4>
        <p className="text-muted mb-3">Select all that apply:</p>
        
        <div className="mb-3">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={formData.currentCoverage.medicare}
              onChange={() => handleCoverageChange('medicare')}
              id="medicare"
            />
            <label className="form-check-label" htmlFor="medicare">Medicare</label>
          </div>
          
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={formData.currentCoverage.medicaid}
              onChange={() => handleCoverageChange('medicaid')}
              id="medicaid"
            />
            <label className="form-check-label" htmlFor="medicaid">Medicaid</label>
          </div>
          
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={formData.currentCoverage.tricare}
              onChange={() => handleCoverageChange('tricare')}
              id="tricare"
            />
            <label className="form-check-label" htmlFor="tricare">Tricare</label>
          </div>
          
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={formData.currentCoverage.employer}
              onChange={() => handleCoverageChange('employer')}
              id="employer"
            />
            <label className="form-check-label" htmlFor="employer">Employer Coverage</label>
          </div>
          
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={formData.currentCoverage.none}
              onChange={() => handleCoverageChange('none')}
              id="none"
            />
            <label className="form-check-label" htmlFor="none">None</label>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h4 style={{ color: '#1B3B21' }}>Plan Preference</h4>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            name="planPreference"
            checked={formData.planPreference.zeroDeductible}
            onChange={() => updateFormData({
              planPreference: { zeroDeductible: true, highDeductible: false }
            })}
            id="zeroDeductible"
            required
          />
          <label className="form-check-label" htmlFor="zeroDeductible">$0 Deductible Plan</label>
        </div>
        
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            name="planPreference"
            checked={formData.planPreference.highDeductible}
            onChange={() => updateFormData({
              planPreference: { zeroDeductible: false, highDeductible: true }
            })}
            id="highDeductible"
          />
          <label className="form-check-label" htmlFor="highDeductible">High Deductible Plan</label>
        </div>
      </div>

      <div className="d-flex gap-3">
        <button
          type="button"
          className="btn w-50"
          onClick={onBack}
          style={{ border: '1px solid #1B3B21', color: '#1B3B21' }}
        >
          Back
        </button>
        <button
          type="submit"
          className="btn w-50"
          style={{ backgroundColor: '#B4975A', color: 'white' }}
        >
          Next
        </button>
      </div>
    </form>
  );
} 