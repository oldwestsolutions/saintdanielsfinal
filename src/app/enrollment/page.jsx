'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PersonalInfo from '../../components/enrollment/PersonalInfo';
import AddressInfo from '../../components/enrollment/AddressInfo';
import BirthInfo from '../../components/enrollment/BirthInfo';
import InsuranceInfo from '../../components/enrollment/InsuranceInfo';
import Signature from '../../components/enrollment/Signature';

export default function Enrollment() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    phone: '',
    email: '',
    
    // Address Info
    residentialAddress: {
      street: '',
      city: '',
      state: '',
      zip: ''
    },
    mailingAddress: {
      sameAsResidential: true,
      street: '',
      city: '',
      state: '',
      zip: ''
    },
    
    // Occupation
    occupation: '',
    
    // Birth Info
    birthPlace: {
      city: '',
      state: '',
      country: ''
    },
    
    // Insurance Info
    currentCoverage: {
      medicare: false,
      medicaid: false,
      tricare: false,
      employer: false,
      none: false
    },
    planPreference: {
      zeroDeductible: false,
      highDeductible: false
    },
    
    // Signature
    fullName: '',
    ssn: '',
    agreesToTerms: false
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const updateFormData = (newData) => {
    setFormData(prevData => ({ ...prevData, ...newData }));
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      
      <main className="flex-grow-1" style={{ backgroundColor: '#E5E2D9' }}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card shadow">
                <div className="card-body p-4">
                  <div className="progress mb-4">
                    <div 
                      className="progress-bar" 
                      role="progressbar" 
                      style={{ 
                        width: `${(step / 5) * 100}%`,
                        backgroundColor: '#1B3B21' 
                      }}
                      aria-valuenow={(step / 5) * 100}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                  
                  {step === 1 && (
                    <PersonalInfo 
                      formData={formData} 
                      updateFormData={updateFormData}
                      onNext={handleNext}
                    />
                  )}
                  
                  {step === 2 && (
                    <AddressInfo 
                      formData={formData}
                      updateFormData={updateFormData}
                      onNext={handleNext}
                      onBack={handleBack}
                    />
                  )}
                  
                  {step === 3 && (
                    <BirthInfo 
                      formData={formData}
                      updateFormData={updateFormData}
                      onNext={handleNext}
                      onBack={handleBack}
                    />
                  )}
                  
                  {step === 4 && (
                    <InsuranceInfo 
                      formData={formData}
                      updateFormData={updateFormData}
                      onNext={handleNext}
                      onBack={handleBack}
                    />
                  )}
                  
                  {step === 5 && (
                    <Signature 
                      formData={formData}
                      updateFormData={updateFormData}
                      onSubmit={handleSubmit}
                      onBack={handleBack}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 