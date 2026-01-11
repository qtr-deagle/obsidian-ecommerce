import { useState } from 'react';

export default function AccountProfile({ user, onEdit, loading }) {
  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-2">
          {user.name}
        </h1>
        <p className="text-base text-gray-600">Manage your account information</p>
      </div>

      <div className="bg-gray-50 rounded-lg border-2 border-gray-200 p-8 space-y-6">
        <div>
          <p className="text-gray-600 text-sm font-semibold mb-2">Full Name</p>
          <p className="text-black text-lg">{user.name}</p>
        </div>

        <div>
          <p className="text-gray-600 text-sm font-semibold mb-2">Email Address</p>
          <p className="text-black text-lg">{user.email}</p>
        </div>

        <div>
          <p className="text-gray-600 text-sm font-semibold mb-2">Account Type</p>
          <p className="text-black text-lg capitalize">{user.role}</p>
        </div>

        <div className="pt-4 border-t-2 border-gray-200">
          <p className="text-gray-600 text-sm font-semibold mb-4">Account Actions</p>
          <div className="space-y-3">
            <button
              onClick={() => onEdit('profile')}
              disabled={loading}
              className="w-full bg-primary text-white font-semibold py-4 rounded-full hover:bg-opacity-90 disabled:opacity-50 transition"
            >
              Edit Profile
            </button>
            <button
              onClick={() => onEdit('password')}
              disabled={loading}
              className="w-full bg-white border-2 border-gray-300 text-black font-semibold py-4 rounded-full hover:bg-gray-50 transition"
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
