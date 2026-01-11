export default function AccountOrders({ user }) {
  const orders = [];

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-2">
          My Orders
        </h1>
        <p className="text-base text-gray-600">View and manage your orders</p>
      </div>

      {orders.length === 0 ? (
        <div className="bg-gray-50 rounded-lg border-2 border-gray-200 p-12 text-center">
          <p className="text-gray-600 text-lg mb-4">You haven't placed any orders yet.</p>
          <a
            href="/products"
            className="inline-block bg-primary text-white font-semibold py-4 px-8 rounded-full hover:bg-opacity-90 transition"
          >
            Start Shopping
          </a>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-gray-50 rounded-lg border-2 border-gray-200 p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-600 text-sm">Order ID</p>
                  <p className="text-black font-semibold text-lg">{order.id}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Total</p>
                  <p className="text-black font-semibold text-lg">${order.total}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Status</p>
                  <p className="text-black font-semibold text-lg capitalize">{order.status}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
