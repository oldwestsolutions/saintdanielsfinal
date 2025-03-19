export default function AddressInfo({ formData, updateFormData, onNext, onBack }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  const handleMailingAddressChange = (useResidential) => {
    updateFormData({
      mailingAddress: {
        ...formData.mailingAddress,
        sameAsResidential: useResidential
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-center mb-4" style={{ color: '#1B3B21' }}>Address Information</h2>
      
      <div className="mb-4">
        <h4 style={{ color: '#1B3B21' }}>Residential Address</h4>
        <div className="mb-3">
          <label className="form-label">Street Address</label>
          <input
            type="text"
            className="form-control"
            value={formData.residentialAddress.street}
            onChange={(e) => updateFormData({
              residentialAddress: { ...formData.residentialAddress, street: e.target.value }
            })}
            required
          />
        </div>
        <div className="row mb-3">
          <div className="col">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              value={formData.residentialAddress.city}
              onChange={(e) => updateFormData({
                residentialAddress: { ...formData.residentialAddress, city: e.target.value }
              })}
              required
            />
          </div>
          <div className="col">
            <label className="form-label">State</label>
            <input
              type="text"
              className="form-control"
              value={formData.residentialAddress.state}
              onChange={(e) => updateFormData({
                residentialAddress: { ...formData.residentialAddress, state: e.target.value }
              })}
              required
            />
          </div>
          <div className="col">
            <label className="form-label">ZIP Code</label>
            <input
              type="text"
              className="form-control"
              value={formData.residentialAddress.zip}
              onChange={(e) => updateFormData({
                residentialAddress: { ...formData.residentialAddress, zip: e.target.value }
              })}
              required
            />
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            checked={formData.mailingAddress.sameAsResidential}
            onChange={(e) => handleMailingAddressChange(e.target.checked)}
            id="sameAddress"
          />
          <label className="form-check-label" htmlFor="sameAddress">
            Mailing address same as residential
          </label>
        </div>

        {!formData.mailingAddress.sameAsResidential && (
          <>
            <h4 style={{ color: '#1B3B21' }}>Mailing Address</h4>
            <div className="mb-3">
              <label className="form-label">Street Address</label>
              <input
                type="text"
                className="form-control"
                value={formData.mailingAddress.street}
                onChange={(e) => updateFormData({
                  mailingAddress: { ...formData.mailingAddress, street: e.target.value }
                })}
                required
              />
            </div>
            <div className="row mb-3">
              <div className="col">
                <label className="form-label">City</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.mailingAddress.city}
                  onChange={(e) => updateFormData({
                    mailingAddress: { ...formData.mailingAddress, city: e.target.value }
                  })}
                  required
                />
              </div>
              <div className="col">
                <label className="form-label">State</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.mailingAddress.state}
                  onChange={(e) => updateFormData({
                    mailingAddress: { ...formData.mailingAddress, state: e.target.value }
                  })}
                  required
                />
              </div>
              <div className="col">
                <label className="form-label">ZIP Code</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.mailingAddress.zip}
                  onChange={(e) => updateFormData({
                    mailingAddress: { ...formData.mailingAddress, zip: e.target.value }
                  })}
                  required
                />
              </div>
            </div>
          </>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Occupation</label>
        <input
          type="text"
          className="form-control"
          value={formData.occupation}
          onChange={(e) => updateFormData({ occupation: e.target.value })}
          required
        />
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