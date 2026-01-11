import { useState, useEffect } from 'react';

export default function RegisterVerificationStep({ email, onContinue, onBack, loading }) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [resendCountdown, setResendCountdown] = useState(0);

  useEffect(() => {
    if (resendCountdown > 0) {
      const timer = setTimeout(() => setResendCountdown(resendCountdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCountdown]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!code || code.length !== 8) {
      setError('Please enter the 8-digit code');
      return;
    }

    onContinue(code);
  };

  const handleResend = () => {
    setResendCountdown(19);
    // TODO: Call backend to resend code
    console.log('Resending code to', email);
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-2">
          Verify your email
        </h1>
        <p className="text-base text-gray-600">
          We sent a code to {email}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            value={code}
            onChange={(e) => {
              setCode(e.target.value.replace(/\D/g, '').slice(0, 8));
              setError('');
            }}
            placeholder="8-digit code*"
            maxLength="8"
            className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg text-base text-black focus:outline-none focus:border-primary placeholder-gray-400 transition"
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-sm">
            {resendCountdown > 0
              ? `Resend code in ${resendCountdown}s`
              : ''}
          </span>
          {resendCountdown === 0 && (
            <button
              type="button"
              onClick={handleResend}
              className="text-primary hover:underline cursor-pointer text-sm"
            >
              Resend code
            </button>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-white font-semibold py-4 rounded-full hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          {loading ? 'Verifying...' : 'Continue'}
        </button>

        <button
          type="button"
          onClick={onBack}
          className="w-full bg-white border-2 border-gray-300 text-black font-semibold py-4 rounded-full hover:bg-gray-50 transition"
        >
          Back
        </button>
      </form>
    </div>
  );
}
