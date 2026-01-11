import { useState } from 'react';

export default function EditProfile({ user, onSave, onCancel, loading }) {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email
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

    if (!formData.name.trim()) {
      setError('Full name is required');
      return;
    }

    if (!formData.email) {
      setError('Email is required');
      return;
    }

    onSave(formData);
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-2">
          Edit Profile
        </h1>
        <p className="text-base text-gray-600">Update your account information</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-black font-semibold mb-2">Full Name</label>
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
          <label className="block text-black font-semibold mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email*"
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
            {loading ? 'Saving...' : 'Save Changes'}
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
