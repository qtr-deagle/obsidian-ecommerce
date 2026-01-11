import { useState } from 'react';

export default function RegisterEmailStep({ onContinue, loading }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Email is required');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    onContinue(email);
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-2">
          Create an account
        </h1>
        <p className="text-base text-gray-600">Enter your email to get started.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
            placeholder="Email*"
            className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg text-base text-black focus:outline-none focus:border-primary placeholder-gray-400 transition"
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        <div className="text-sm text-gray-600">
          By continuing, I agree to the{' '}
          <a href="#" className="underline text-gray-600 hover:text-black">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="#" className="underline text-gray-600 hover:text-black">
            Terms of Use
          </a>
          .
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-white font-semibold py-4 rounded-full hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          {loading ? 'Continuing...' : 'Continue'}
        </button>
      </form>
    </div>
  );
}
