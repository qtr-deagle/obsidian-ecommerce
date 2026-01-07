export default function Account() {
  // TODO: Fetch user data from backend
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    role: 'customer'
  };

  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-8">My Account</h1>
        
        <div className="bg-gray-100 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-6">Profile Information</h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-gray-600 text-sm">Name</p>
              <p className="text-black font-semibold text-lg">{user.name}</p>
            </div>
            
            <div>
              <p className="text-gray-600 text-sm">Email</p>
              <p className="text-black font-semibold text-lg">{user.email}</p>
            </div>
            
            <div>
              <p className="text-gray-600 text-sm">Account Type</p>
              <p className="text-black font-semibold text-lg capitalize">{user.role}</p>
            </div>
          </div>

          <button className="mt-8 bg-black text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-800 transition">
            Edit Profile
          </button>
        </div>

        <div className="bg-gray-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-6">My Orders</h2>
          <p className="text-gray-700">You haven't placed any orders yet.</p>
        </div>
      </div>
    </div>
  );
}
