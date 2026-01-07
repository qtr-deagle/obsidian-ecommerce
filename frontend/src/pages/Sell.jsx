import { useState } from 'react';

export default function SellerDashboard() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'shoes',
    stock: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product submitted:', formData);
    // TODO: Send to backend
    alert('Product listed successfully!');
    setFormData({
      name: '',
      description: '',
      price: '',
      category: 'shoes',
      stock: '',
      image: null
    });
  };

  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-12">Seller Dashboard</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* List New Item */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-black mb-6">List a New Item</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-lg">
              <div>
                <label className="block text-black font-semibold mb-2">Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-black focus:outline-none focus:border-black"
                  placeholder="e.g., Air Jordan 1 Retro High"
                />
              </div>

              <div>
                <label className="block text-black font-semibold mb-2">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-black focus:outline-none focus:border-black"
                >
                  <option value="shoes">Shoes</option>
                  <option value="tshirts">T-Shirts</option>
                  <option value="hoodies">Hoodies</option>
                  <option value="accessories">Accessories</option>
                </select>
              </div>

              <div>
                <label className="block text-black font-semibold mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-black focus:outline-none focus:border-black resize-none"
                  placeholder="Describe your product..."
                ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-black font-semibold mb-2">Price</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-black focus:outline-none focus:border-black"
                    placeholder="99.99"
                  />
                </div>

                <div>
                  <label className="block text-black font-semibold mb-2">Stock</label>
                  <input
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                    required
                    min="0"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-black focus:outline-none focus:border-black"
                    placeholder="10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-black font-semibold mb-2">Product Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-black focus:outline-none focus:border-black"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition"
              >
                List Product
              </button>
            </form>
          </div>

          {/* My Products */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-black mb-6">My Products</h2>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <p className="text-gray-700">You haven't listed any products yet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
