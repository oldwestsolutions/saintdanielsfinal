export default function BirthInfo({ formData, updateFormData, onNext, onBack }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-center mb-4" style={{ color: '#1B3B21' }}>Birth Information</h2>
      
      <div className="mb-4">
        <h4 style={{ color: '#1B3B21' }}>Place of Birth</h4>
        <div className="row mb-3">
          <div className="col-md-4">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              value={formData.birthPlace.city}
              onChange={(e) => updateFormData({
                birthPlace: { ...formData.birthPlace, city: e.target.value }
              })}
              required
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">State</label>
            <input
              type="text"
              className="form-control"
              value={formData.birthPlace.state}
              onChange={(e) => updateFormData({
                birthPlace: { ...formData.birthPlace, state: e.target.value }
              })}
              required
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Country</label>
            <input
              type="text"
              className="form-control"
              value={formData.birthPlace.country}
              onChange={(e) => updateFormData({
                birthPlace: { ...formData.birthPlace, country: e.target.value }
              })}
              required
            />
          </div>
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