import { NavLink } from "react-router-dom";

export default function MainLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-50">
      
      {/* Sidebar */}
      <div className="w-64 bg-white border-r p-4 relative">
        <h2 className="text-lg font-semibold mb-6">Saral</h2>

        <div className="space-y-2 text-sm">

          {/* Home */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg ${
                isActive
                  ? "bg-purple-100 text-purple-600"
                  : "text-gray-500 hover:bg-gray-100"
              }`
            }
          >
            <img src="/Home.svg" className="w-5 h-5" />
            <span>Home</span>
          </NavLink>

          {/* Insights */}
          <NavLink
            to="/insights"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg ${
                isActive
                  ? "bg-purple-100 text-purple-600"
                  : "text-gray-500 hover:bg-gray-100"
              }`
            }
          >
            <img src="/Brain.svg" className="w-5 h-5" />
            <span>Insights</span>
          </NavLink>

          {/* Gamification ✅ FIXED */}
          <NavLink
            to="/gamification"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg ${
                isActive
                  ? "bg-purple-100 text-purple-600"
                  : "text-gray-500 hover:bg-gray-100"
              }`
            }
          >
            <img src="/Briefcase.svg" className="w-5 h-5" />
            <span>Gamification</span>
          </NavLink>

          {/* Applications */}
          <NavLink
            to="/applications"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg ${
                isActive
                  ? "bg-purple-100 text-purple-600"
                  : "text-gray-500 hover:bg-gray-100"
              }`
            }
          >
            <img src="/applications.svg" className="w-5 h-5" />
            <span>Applications</span>
          </NavLink>

          {/* Payments */}
          <NavLink
            to="/payments"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg ${
                isActive
                  ? "bg-purple-100 text-purple-600"
                  : "text-gray-500 hover:bg-gray-100"
              }`
            }
          >
            <img src="/Wallet.svg" className="w-5 h-5" />
            <span>Payments</span>
          </NavLink>

        </div>

        {/* Settings */}
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