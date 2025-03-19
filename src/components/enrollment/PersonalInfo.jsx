export default function PersonalInfo({ formData, updateFormData, onNext }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-center mb-4" style={{ color: '#1B3B21' }}>Personal Information</h2>
      
      <div className="mb-3">
        <label className="form-label" style={{ color: '#1B3B21' }}>First Name</label>
        <input
          type="text"
          className="form-control"
          value={formData.firstName}
          onChange={(e) => updateFormData({ firstName: e.target.value })}
          required
        />
      </div>
      
      <div className="mb-3">
        <label className="form-label" style={{ color: '#1B3B21' }}>Last Name</label>
        <input
          type="text"
          className="form-control"
          value={formData.lastName}
          onChange={(e) => updateFormData({ lastName: e.target.value })}
          required
        />
      </div>
      
      <div className="mb-3">
        <label className="form-label" style={{ color: '#1B3B21' }}>Date of Birth</label>
        <input
          type="date"
          className="form-control"
          value={formData.dateOfBirth}
          onChange={(e) => updateFormData({ dateOfBirth: e.target.value })}
          required
        />
      </div>
      
      <div className="mb-3">
        <label className="form-label" style={{ color: '#1B3B21' }}>Phone Number</label>
        <input
          type="tel"
          className="form-control"
          value={formData.phone}
          onChange={(e) => updateFormData({ phone: e.target.value })}
          required
        />
      </div>
      
      <div className="mb-4">
        <label className="form-label" style={{ color: '#1B3B21' }}>Email Address</label>
        <input
          type="email"
          className="form-control"
          value={formData.email}
          onChange={(e) => updateFormData({ email: e.target.value })}
          required
        />
      </div>
      
      <button
        type="submit"
        className="btn w-100"
        style={{ backgroundColor: '#B4975A', color: 'white' }}
      >
        Next
      </button>
    </form>
  );
} 