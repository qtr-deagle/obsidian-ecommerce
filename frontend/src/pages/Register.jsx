import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterEmailStep from './RegisterEmailStep';
import RegisterVerificationStep from './RegisterVerificationStep';
import RegisterDetailsStep from './RegisterDetailsStep';

export default function Register() {
  const [step, setStep] = useState('email'); // email, verification, details
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailSubmit = async (email) => {
    setLoading(true);
    // TODO: Call backend to send verification code
    setTimeout(() => {
      setEmail(email);
      setStep('verification');
      setLoading(false);
    }, 1000);
  };

  const handleVerificationSubmit = async (code) => {
    setLoading(true);
    // TODO: Call backend to verify code
    setTimeout(() => {
      setStep('details');
      setLoading(false);
    }, 1000);
  };

  const handleDetailsSubmit = async (formData) => {
    setLoading(true);
    console.log('Register attempt:', {
      name: formData.name,
      email: email,
      role: formData.role
    });
    // TODO: Send to backend for registration
    setTimeout(() => {
      alert('Account created successfully!');
      navigate('/login');
      setLoading(false);
    }, 1000);
  };

  const handleBack = () => {
    if (step === 'verification') {
      setStep('email');
    } else if (step === 'details') {
      setStep('verification');
    }
  };


  return (
    <div className="min-h-screen bg-white px-6 py-12 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="max-w-md mx-auto">
          {step === 'email' && (
            <RegisterEmailStep onContinue={handleEmailSubmit} loading={loading} />
          )}
          {step === 'verification' && (
            <RegisterVerificationStep
              email={email}
              onContinue={handleVerificationSubmit}
              onBack={handleBack}
              loading={loading}
            />
          )}
          {step === 'details' && (
            <RegisterDetailsStep
              email={email}
              onSubmit={handleDetailsSubmit}
              onBack={handleBack}
              loading={loading}
            />
          )}
        </div>
      </div>
    </div>
  );
}
