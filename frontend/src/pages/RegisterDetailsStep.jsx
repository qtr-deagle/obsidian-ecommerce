import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RegisterDetailsStep({ email, onSubmit, onBack, loading }) {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    confirmPassword: '',
    role: 'customer'
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim()) {
      setError('Full name is required');
      return;
    }

    if (!formData.password) {
      setError('Password is required');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    onSubmit(formData);
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-2">
          Complete your profile
        </h1>
        <p className="text-base text-gray-600">Just a few more details to get started.</p>
      </div>

      <div className="mb-6">
        <span className="text-base text-gray-700">{email}</span>
      </div>

      <form onSubmit={handleSubmitForm} className="space-y-6">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name*"
            className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg text-base text-black focus:outline-none focus:border-primary placeholder-gray-400 transition"
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password*"
            className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg text-base text-black focus:outline-none focus:border-primary placeholder-gray-400 transition"
          />
        </div>

        <div>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password*"
            className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg text-base text-black focus:outline-none focus:border-primary placeholder-gray-400 transition"
          />
        </div>

        <div>
          <label className="block text-black font-semibold mb-2">Account Type</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg text-black focus:outline-none focus:border-black"
          >
            <option value="customer">Customer</option>
            <option value="seller">Seller</option>
          </select>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-white font-semibold py-4 rounded-full hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          {loading ? 'Creating Account...' : 'Create Account'}
        </button>

        <button
          type="button"
          onClick={onBack}
          className="w-full bg-white border-2 border-gray-300 text-black font-semibold py-4 rounded-full hover:bg-gray-50 transition"
        >
          Back
        </button>
      </form>

      <div className="mt-6 text-center">
        <span className="text-gray-600 text-base">Already have an account? </span>
        <Link to="/login" className="text-primary hover:underline font-semibold">
          Sign in
        </Link>
      </div>
    </div>
  );
}
