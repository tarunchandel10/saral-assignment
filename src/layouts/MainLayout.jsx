export default function MainLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-50">
      
      {/* Sidebar */}
      <div className="w-64 bg-white border-r p-4">
        <h2 className="text-lg font-semibold mb-6">Saral</h2>

        <nav className="space-y-3 text-sm">
          <p className="text-gray-500">Home</p>
          <p className="text-gray-500">Insights</p>

          <p className="bg-purple-100 text-purple-600 px-3 py-2 rounded-lg">
            Gamification
          </p>

          <p className="text-gray-500">Applications</p>
          <p className="text-gray-500">Payments</p>
        </nav>

        <div className="absolute bottom-4 text-sm text-gray-500">
          Settings
        </div>
      </div>

      {/* Right side */}
      <div className="flex-1 flex flex-col">
        
        {/* Header */}
        <div className="h-16 bg-white border-b flex items-center justify-between px-6">
          <h2 className="font-semibold">Gamification</h2>

          <div className="flex items-center gap-3">
            🔔
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-6 overflow-auto">
          {children}
        </div>

      </div>
    </div>
  );
}