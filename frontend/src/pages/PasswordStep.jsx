import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function PasswordStep({ email, onBack, loading }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!password) {
      setError('Password is required');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    console.log('Login attempt:', { email, password });
    // TODO: Send to backend for authentication
    alert('Login successful!');
    navigate('/');
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-2">
          Enter your password.
        </h1>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <span className="text-base text-gray-700">{email}</span>
        <button
          onClick={onBack}
          className="text-primary hover:underline cursor-pointer"
        >
          Edit
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError('');
            }}
            placeholder="Password*"
            className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg text-base text-black focus:outline-none focus:border-primary placeholder-gray-400 transition"
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-white font-semibold py-4 rounded-full hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>

        <button
          type="button"
          onClick={onBack}
          className="w-full bg-white border-2 border-gray-300 text-black font-semibold py-4 rounded-full hover:bg-gray-50 transition"
        >
          Use Code
        </button>
      </form>

      <div className="mt-6 text-center">
        <span className="text-gray-600 text-base">Don't have an account? </span>
        <Link to="/register" className="text-primary hover:underline font-semibold">
          Sign up
        </Link>
      </div>
    </div>
  );
}
