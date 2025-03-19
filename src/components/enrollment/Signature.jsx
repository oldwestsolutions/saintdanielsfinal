export default function Signature({ formData, updateFormData, onSubmit, onBack }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-center mb-4" style={{ color: '#1B3B21' }}>Final Step</h2>
      
      <div className="mb-4">
        <div className="alert alert-info">
          <h5 className="alert-heading">Important Disclaimer</h5>
          <p className="mb-0" style={{ fontSize: '0.9rem' }}>
            By signing this application, I certify that all information provided is true and accurate. 
            I understand that providing false information may result in denial of coverage or cancellation 
            of benefits. I authorize Saint Daniels Healthcare to verify any information provided in this application.
          </p>
        </div>
      </div>

      <div className="mb-4">
        <label className="form-label">Full Legal Name (as signature)</label>
        <input
          type="text"
          className="form-control"
          value={formData.fullName}
          onChange={(e) => updateFormData({ fullName: e.target.value })}
          required
          placeholder="Type your full name as signature"
        />
      </div>

      <div className="mb-4">
        <label className="form-label">Social Security Number</label>
        <input
          type="password"
          className="form-control"
          value={formData.ssn}
          onChange={(e) => updateFormData({ ssn: e.target.value })}
          required
          placeholder="XXX-XX-XXXX"
          pattern="\d{3}-?\d{2}-?\d{4}"
        />
        <small className="text-muted">Format: XXX-XX-XXXX</small>
      </div>

      <div className="mb-4">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={formData.agreesToTerms}
            onChange={(e) => updateFormData({ agreesToTerms: e.target.checked })}
            required
            id="agreeTerms"
          />
          <label className="form-check-label" htmlFor="agreeTerms">
            I agree to the terms and conditions, and I certify that all information provided is accurate
          </label>
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
          disabled={!formData.agreesToTerms}
        >
          Submit Application
        </button>
      </div>
    </form>
  );
} 