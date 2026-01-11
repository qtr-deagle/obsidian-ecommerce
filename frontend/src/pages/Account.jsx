import { useState } from 'react';
import AccountProfile from './AccountProfile';
import AccountOrders from './AccountOrders';
import EditProfile from './EditProfile';
import ChangePassword from './ChangePassword';

export default function Account() {
  const [view, setView] = useState('profile'); // profile, orders, edit, password
  const [loading, setLoading] = useState(false);
  
  // TODO: Fetch user data from backend
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    role: 'customer'
  };

  const handleEditProfile = async (formData) => {
    setLoading(true);
    // TODO: Send to backend
    setTimeout(() => {
      alert('Profile updated successfully!');
      setLoading(false);
      setView('profile');
    }, 1000);
  };

  const handleChangePassword = async (formData) => {
    setLoading(true);
    // TODO: Send to backend
    setTimeout(() => {
      alert('Password changed successfully!');
      setLoading(false);
      setView('profile');
    }, 1000);
  };

  const handleEditClick = (section) => {
    setView(section);
  };

  const handleCancel = () => {
    setView('profile');
  };

  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="w-full max-w-2xl mx-auto">
        <div className="max-w-md mx-auto">
          {view === 'profile' && (
            <AccountProfile user={user} onEdit={handleEditClick} loading={loading} />
          )}
          {view === 'orders' && (
            <AccountOrders user={user} />
          )}
          {view === 'edit' && (
            <EditProfile
              user={user}
              onSave={handleEditProfile}
              onCancel={handleCancel}
              loading={loading}
            />
          )}
          {view === 'password' && (
            <ChangePassword
              onSave={handleChangePassword}
              onCancel={handleCancel}
              loading={loading}
            />
          )}
        </div>
      </div>
    </div>
  );
}
