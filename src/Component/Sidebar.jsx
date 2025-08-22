import React, { useState } from 'react'
import AdminImage from '../assets/admin.jpeg'
import AdminLogo from '../assets/newlogo.png'
import ChatNotification from './ChatNotification'
import NotificationsCard from './NotificationsCard'
import ProfileMenu from '../UI/ProfileMenu'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  Home,
  CheckSquare,
  Users,
  DollarSign,
  ShoppingCart,
  Package,
  User,
  Settings,
  ChevronRight,
  Search,
  FileText,
  BarChart3,
  Truck,
  MessageSquare,
  Bell,
} from 'lucide-react'

// Sidebar Component (includes both sidebar and header)
const SidebarLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [showChat, setShowChat] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  const sidebarItems = [
    { icon: Home, label: 'Dashboard', path: '/', hasDropdown: false },
    { icon: CheckSquare, label: 'Tasks', path: '/tasks', hasDropdown: false },
    {
      icon: Users,
      label: 'Buyer Meeting',
      path: '/buyer-meeting',
      hasDropdown: false,
    },
    {
      icon: DollarSign,
      label: 'Quick Costing',
      path: '/quick-costing',
      hasDropdown: false,
    },
    {
      icon: DollarSign,
      label: 'Pre Order Costing',
      path: '/pre-order-costing',
      hasDropdown: false,
    },
    {
      icon: Package,
      label: 'Style Library',
      path: '/style-library',
      hasDropdown: false,
    },
    {
      icon: FileText,
      label: 'Requisitions',
      path: '/requisitions',
      hasDropdown: true,
    },
    {
      icon: ShoppingCart,
      label: 'Buyer Purchase',
      path: '/buyer-purchase',
      hasDropdown: true,
    },
    {
      icon: Package,
      label: 'Inventory',
      path: '/inventory',
      hasDropdown: true,
    },
    {
      icon: Settings,
      label: 'Sample Development',
      path: '/sample-development',
      hasDropdown: true,
    },
    {
      icon: Settings,
      label: 'Production',
      path: '/production',
      hasDropdown: true,
    },
    {
      icon: User,
      label: 'Master Admin',
      path: '/master-admin',
      hasDropdown: true,
    },
    { icon: Users, label: 'Users', path: '/users', hasDropdown: true },
    { icon: Users, label: 'Suppliers', path: '/suppliers', hasDropdown: false },
    { icon: Home, label: 'Showroom', path: '/showroom', hasDropdown: true },
    { icon: Truck, label: 'Shipment', path: '/shipment', hasDropdown: true },
    { icon: BarChart3, label: "KPI's", path: '/kpis', hasDropdown: true },
    {
      icon: FileText,
      label: 'E-Invoice / E-Way Bill',
      path: '/e-invoice',
      hasDropdown: false,
    },
    { icon: BarChart3, label: 'Reports', path: '/reports', hasDropdown: false },
    {
      icon: Settings,
      label: 'Master Data',
      path: '/master-data',
      hasDropdown: true,
    },
    { icon: Settings, label: 'Settings', path: '/settings', hasDropdown: true },
  ]

  const handleNavigation = (path) => {
    navigate(path)
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'w-64' : 'w-16'
        } bg-white shadow-sm border-r border-gray-200 transition-all duration-300 flex flex-col`}
      >
        {/* Logo */}
        <div className="p-4 border-b border-gray-200 flex items-center">
          <div className="ml-3">
            <img src={AdminLogo} className="w-28" />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 py-4 overflow-y-auto ">
          <nav className="px-2">
            {sidebarItems.map((item, index) => (
              <div key={index} className="mb-1">
                <button
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full flex items-center px-3 py-2.5 text-sm rounded-lg transition-colors group ${
                    location.pathname === item.path
                      ? 'bg-purple-100 text-purple-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-3 flex-shrink-0" />
                  {sidebarOpen && (
                    <>
                      <span className="flex-1 text-left">{item.label}</span>
                      {item.hasDropdown && (
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      )}
                    </>
                  )}
                </button>
              </div>
            ))}
          </nav>
        </div>

        {/* AI Button */}
        <div className="p-4">
          <button className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
            <span className="text-lg">✨</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 shadow-md shadow-black">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-1 rounded hover:bg-gray-100 mr-6"
              >
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search anything here..."
                  className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg w-80 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Chat Notification */}
              <div className="relative">
                <MessageSquare
                  className="w-5 h-5 text-gray-600 hover:text-purple-600 cursor-pointer"
                  onClick={() => {
                    setShowChat(true)
                    setShowNotifications(false)
                  }}
                />
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-medium">
                  9
                </div>
              </div>

              {/* Notifications */}
              <div className="relative">
                <Bell
                  className="w-5 h-5 text-gray-600 hover:text-purple-600 cursor-pointer"
                  onClick={() => {
                    setShowNotifications(true)
                    setShowChat(false)
                  }}
                />
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-medium">
                  10
                </div>
              </div>
              {/* ======= Profile with hover popup ======= */}
              <div
                className="relative"
                onMouseEnter={() => setShowProfileMenu(true)}
                onMouseLeave={() => setShowProfileMenu(false)}
              >
                <div className="flex items-center cursor-pointer">
                  <img
                    src={AdminImage}
                    className="w-7 h-7 object-cover bg-gray-300 rounded-full mr-2"
                  />
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      Mohd Saleem
                    </div>
                    <div className="text-xs text-gray-500">Admin</div>
                  </div>
                </div>

                {/* Popup Profile Menu */}
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                    <ProfileMenu />
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-gray-50">{children}</main>
      </div>

      {/* ==== Modal Overlays ==== */}
      {showChat && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-[400px] p-4 relative">
            <button
              onClick={() => setShowChat(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <ChatNotification />
          </div>
        </div>
      )}

      {showNotifications && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-[400px] p-4 relative">
            <button
              onClick={() => setShowNotifications(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <NotificationsCard />
          </div>
        </div>
      )}
    </div>
  )
}

export default SidebarLayout
