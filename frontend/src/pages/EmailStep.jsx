import { useState } from 'react';

export default function EmailStep({ onContinue, loading }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isFocused, setIsFocused] = useState(false);

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
      <div>
        <h1 className="text-4xl font-medium text-black mb-2 leading-8">
          Enter your email to join us or sign in.
        </h1>
      </div>

      <div className="mb-10">
        <span className="text-xl font-medium text-gray-700">Philippines</span>
        <button className="ml-3 text-black underline cursor-pointer">
          Change
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="relative">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder=""
            className={`px-4 py-3.5 w-full border-2 rounded-lg font-semibold text-black focus:outline-none transition-all duration-300 ${
              error
                ? 'border-red-500 focus:border-red-500'
                : 'border-gray-300 focus:border-black'
            } ${
              isFocused || email ? 'font-semibold text-xl' : 'text-xl font-bold'
            }`}
          />
          <label
            className={`absolute transition-all duration-300 pointer-events-none bg-white px-1 ${
              error ? 'text-red-500' : 'text-black'
            } ${
              isFocused || email
                ? 'text-lg -top-3.5 left-2 font-semibold'
                : 'text-2xl top-3.5 left-2'
            }`}
          >
            Email*
          </label>
          {error && <p className="absolute left-3 text-red-500 text-base font-bold top-full mt-1">{error}</p>}
        </div>

        <div className="text-xl font-medium text-gray-600">
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
          className="w-full text-2xl bg-black text-white font-semibold py-4 rounded-full hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          {loading ? 'Continuing...' : 'Continue'}
        </button>
      </form>
    </div>
  );
}
