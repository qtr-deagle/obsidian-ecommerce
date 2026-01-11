import { useState } from 'react';
import EmailStep from './EmailStep';
import VerificationStep from './VerificationStep';
import PasswordStep from './PasswordStep';

export default function Login() {
  const [step, setStep] = useState('email'); // email, verification, password
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

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
      setStep('password');
      setLoading(false);
    }, 1000);
  };

  const handleBack = () => {
    if (step === 'verification') {
      setStep('email');
    } else if (step === 'password') {
      setStep('verification');
    }
  };

  return (
    <div className="min-h-screen bg-white px-6 py-12 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="max-w-md mx-auto">
          {step === 'email' && (
            <EmailStep onContinue={handleEmailSubmit} loading={loading} />
          )}
          {step === 'verification' && (
            <VerificationStep
              email={email}
              onContinue={handleVerificationSubmit}
              onBack={handleBack}
              loading={loading}
            />
          )}
          {step === 'password' && (
            <PasswordStep email={email} onBack={handleBack} loading={loading} />
          )}
        </div>
      </div>
    </div>
  );
}