import { useState } from 'react';

export default function ChangePassword({ onSave, onCancel, loading }) {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.currentPassword) {
      setError('Current password is required');
      return;
    }

    if (!formData.newPassword) {
      setError('New password is required');
      return;
    }

    if (formData.newPassword.length < 6) {
      setError('New password must be at least 6 characters');
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setError('New passwords do not match');
      return;
    }

    onSave(formData);
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-2">
          Change Password
        </h1>
        <p className="text-base text-gray-600">Update your password to keep your account secure</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-black font-semibold mb-2">Current Password</label>
          <input
            type="password"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
            placeholder="Current Password*"
            className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg text-base text-black focus:outline-none focus:border-primary placeholder-gray-400 transition"
          />
        </div>

        <div>
          <label className="block text-black font-semibold mb-2">New Password</label>
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            placeholder="New Password*"
            className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg text-base text-black focus:outline-none focus:border-primary placeholder-gray-400 transition"
          />
        </div>

        <div>
          <label className="block text-black font-semibold mb-2">Confirm New Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password*"
            className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg text-base text-black focus:outline-none focus:border-primary placeholder-gray-400 transition"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-primary text-white font-semibold py-4 rounded-full hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {loading ? 'Updating...' : 'Update Password'}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-white border-2 border-gray-300 text-black font-semibold py-4 rounded-full hover:bg-gray-50 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
