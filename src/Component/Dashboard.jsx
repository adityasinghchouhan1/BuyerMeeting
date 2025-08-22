import React, { useState } from 'react'
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
  Plus,
  Download,
  MoreHorizontal,
  ChevronLeft,
  FileText,
  BarChart3,
  Truck,
  MessageSquare,
  Bell,
} from 'lucide-react'

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const meetingData = [
    {
      id: 1,
      date: '01 May, 2025 at 2pm',
      status: 'Completed',
      type: 'Online',
      buyerName: 'Mango Private Limited',
      brand: 'Mango',
      dept: 'Design',
      title: 'Costing Discussion with Zara',
      meetingDate: '01 May, 2025',
      participants: 'Mohd Saleem +2',
    },
    {
      id: 2,
      date: '02 May, 2025 at 3pm',
      status: 'Upcoming',
      type: 'Offline',
      buyerName: 'Cherry Innovations',
      brand: 'Cherry',
      dept: 'Development',
      title: 'UI/UX Review',
      meetingDate: '02 May, 2025',
      participants: 'Mohd Saleem +2',
    },
    {
      id: 3,
      date: '03 May, 2025 at 10am',
      status: 'Follow-up',
      type: 'Offline',
      buyerName: 'Pineapple Inc.',
      brand: 'Pineapple',
      dept: 'Marketing',
      title: 'Campaign Strategy',
      meetingDate: '03 May, 2025',
      participants: 'Mohd Saleem +2',
    },
    {
      id: 4,
      date: '04 May, 2025 at 1pm',
      status: 'Re-scheduled',
      type: 'Offline',
      buyerName: 'Peach Corp.',
      brand: 'Peach',
      dept: 'Finance',
      title: 'Budget Review',
      meetingDate: '04 May, 2025',
      participants: 'Mohd Saleem +2',
    },
    {
      id: 5,
      date: '05 May, 2025 at 4pm',
      status: 'Overdue',
      type: 'Online',
      buyerName: 'Banana Solutions',
      brand: 'Banana',
      dept: 'Product',
      title: 'Feature Prioritization',
      meetingDate: '05 May, 2025',
      participants: 'Mohd Saleem +2',
    },
    {
      id: 6,
      date: '06 May, 2025 at 11am',
      status: 'In Progress',
      type: 'Online',
      buyerName: 'Coconut Group',
      brand: 'Coconut',
      dept: 'Support',
      title: 'Customer Feedback',
      meetingDate: '06 May, 2025',
      participants: 'Mohd Saleem +2',
    },
    {
      id: 7,
      date: '07 May, 2025 at 2pm',
      status: 'Ongoing',
      type: 'Online',
      buyerName: 'Lemon Technologies',
      brand: 'Lemon',
      dept: 'Sales',
      title: 'Sales Strategy',
      meetingDate: '07 May, 2025',
      participants: 'Mohd Saleem +2',
    },
    {
      id: 8,
      date: '08 May, 2025 at 9am',
      status: 'Completed',
      type: 'Offline',
      buyerName: 'Grapefruit LLC',
      brand: 'Grapefruit',
      dept: 'Research',
      title: 'Market Analysis',
      meetingDate: '08 May, 2025',
      participants: 'Mohd Saleem +2',
    },
    {
      id: 9,
      date: '09 May, 2025 at 3pm',
      status: 'Draft',
      type: 'Offline',
      buyerName: 'Kiwi Systems',
      brand: 'Kiwi',
      dept: 'HR',
      title: 'Employee Engagement',
      meetingDate: '09 May, 2025',
      participants: 'Mohd Saleem +2',
    },
    {
      id: 10,
      date: '10 May, 2025 at 5pm',
      status: 'Archived',
      type: 'Offline',
      buyerName: 'Orange Enterprises',
      brand: 'Orange',
      dept: 'Legal',
      title: 'Contract Review',
      meetingDate: '10 May, 2025',
      participants: 'Mohd Saleem +2',
    },
  ]

  const getStatusBadge = (status) => {
    const statusColors = {
      Completed: 'bg-green-500 text-white px-2 py-0.5 rounded text-xs',
      Upcoming: 'bg-orange-500 text-white px-2 py-0.5 rounded text-xs',
      'Follow-up': 'bg-blue-500 text-white px-2 py-0.5 rounded text-xs',
      'Re-scheduled': 'bg-purple-500 text-white px-2 py-0.5 rounded text-xs',
      Overdue: 'bg-red-500 text-white px-2 py-0.5 rounded text-xs',
      'In Progress': 'bg-orange-600 text-white px-2 py-0.5 rounded text-xs',
      Ongoing: 'bg-gray-800 text-white px-2 py-0.5 rounded text-xs',
      Draft: 'bg-gray-600 text-white px-2 py-0.5 rounded text-xs',
      Archived: 'bg-red-600 text-white px-2 py-0.5 rounded text-xs',
    }

    return (
      <span
        className={
          statusColors[status] ||
          'bg-gray-500 text-white px-2 py-0.5 rounded text-xs'
        }
      >
        {status}
      </span>
    )
  }

  const getTypeBadge = (type) => {
    return (
      <span
        className={`px-2 py-0.5 rounded text-xs ${
          type === 'Online'
            ? 'bg-green-100 text-green-700'
            : 'bg-gray-100 text-gray-700'
        }`}
      >
        {type}
      </span>
    )
  }

  const sidebarItems = [
    { icon: Home, label: 'Dashboard', active: false },
    { icon: CheckSquare, label: 'Tasks', active: false },
    { icon: Users, label: 'Buyer Meeting', active: true, hasDropdown: false },
    { icon: DollarSign, label: 'Quick Costing', active: false },
    { icon: DollarSign, label: 'Pre Order Costing', active: false },
    { icon: Package, label: 'Style Library', active: false },
    { icon: FileText, label: 'Requisitions', active: false, hasDropdown: true },
    {
      icon: ShoppingCart,
      label: 'Buyer Purchase',
      active: false,
      hasDropdown: true,
    },
    { icon: Package, label: 'Inventory', active: false, hasDropdown: true },
    {
      icon: Settings,
      label: 'Sample Development',
      active: false,
      hasDropdown: true,
    },
    { icon: Settings, label: 'Production', active: false, hasDropdown: true },
    { icon: User, label: 'Master Admin', active: false, hasDropdown: true },
    { icon: Users, label: 'Users', active: false, hasDropdown: true },
    { icon: Users, label: 'Suppliers', active: false },
    { icon: Home, label: 'Showroom', active: false, hasDropdown: true },
    { icon: Truck, label: 'Shipment', active: false, hasDropdown: true },
    { icon: BarChart3, label: "KPI's", active: false, hasDropdown: true },
    { icon: FileText, label: 'E-Invoice / E-Way Bill', active: false },
    { icon: BarChart3, label: 'Reports', active: false },
    { icon: Settings, label: 'Master Data', active: false, hasDropdown: true },
    { icon: Settings, label: 'Settings', active: false, hasDropdown: true },
  ]

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
          <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">AT</span>
          </div>
          {sidebarOpen && (
            <div className="ml-3">
              <div className="font-bold text-gray-900 text-sm">ADAM</div>
              <div className="text-xs text-gray-600">EXPORTS</div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex-1 py-4 overflow-y-auto">
          <nav className="px-2">
            {sidebarItems.map((item, index) => (
              <div key={index} className="mb-1">
                <button
                  className={`w-full flex items-center px-3 py-2.5 text-sm rounded-lg transition-colors group ${
                    item.active
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

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
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
              <div className="relative">
                <MessageSquare className="w-6 h-6 text-gray-600 hover:text-purple-600 cursor-pointer" />
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-medium">
                  9
                </div>
              </div>
              <div className="relative">
                <Bell className="w-6 h-6 text-gray-600 hover:text-red-600 cursor-pointer" />
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-medium">
                  10
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Mohd Saleem
                  </div>
                  <div className="text-xs text-gray-500">Admin</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-gray-50">
          <div className="p-6">
            {/* Page Header Section */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-xl font-semibold text-gray-900 mb-2">
                  Buyer Meeting List View
                </h1>
                <nav className="text-sm">
                  <span className="text-purple-600 font-medium">
                    Buyer Meeting
                  </span>
                  <span className="text-gray-400 mx-2">→</span>
                  <span className="text-gray-600">Buyer Meeting List View</span>
                </nav>
              </div>
              <div className="flex space-x-3">
                <button className="bg-purple-500 text-white px-4 py-2 rounded-md flex items-center space-x-2 text-sm hover:bg-purple-600">
                  <Download className="w-4 h-4" />
                  <span>Export</span>
                </button>
                <button className="bg-black text-white px-4 py-2 rounded-md flex items-center space-x-2 text-sm hover:bg-gray-800">
                  <Plus className="w-4 h-4" />
                  <span>Create New Meeting</span>
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-2 mb-3">
              <div className="flex space-x-2">
                <button className="bg-gray-200 text-purple-600 px-2 py-2 rounded-md text-xs font-medium flex items-center">
                  All
                  <span className="bg-purple-600 text-white px-2 py-0.5 rounded-md text-xs ml-2 min-w-[24px] h-5 flex items-center justify-center font-semibold">
                    100
                  </span>
                </button>
                <button className=" text-gray-700 px-4 py-2 rounded-md text-xs hover:bg-gray-300 flex items-center">
                  Draft
                  <span className="bg-gray-500 text-white px-1 py-0.5 rounded-md text-xs ml-2 min-w-[24px] h-5 flex items-center justify-center">
                    75
                  </span>
                </button>
                <button className="text-gray-700 px-2 py-2 rounded-md text-xs hover:bg-gray-300 flex items-center">
                  Archive
                  <span className="bg-gray-500 text-white px-1 py-0.5 rounded-md text-xs ml-2 min-w-[24px] h-5 flex items-center justify-center">
                    28
                  </span>
                </button>
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-8 gap-4 mb-4">
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search anything here..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option>Buyer Name</option>
              </select>
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option>Brand</option>
              </select>
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option>Dept.</option>
              </select>
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option>Meeting Type</option>
              </select>
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option>Participants</option>
              </select>
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option>Meeting Date</option>
              </select>
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option>Status</option>
              </select>
            </div>

            {/* Table */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
                    <tr>
                      <th className="px-4 py-3 text-left">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 w-3 h-3"
                        />
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[140px]">
                        Date & Time
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px]">
                        Status
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[80px]">
                        Type
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[160px]">
                        Buyer Name
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px]">
                        Brand
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px]">
                        Dept.
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[180px]">
                        Title
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px]">
                        Meeting Date
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[140px]">
                        Participants
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[60px]">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {meetingData.map((meeting) => (
                      <tr key={meeting.id} className="hover:bg-gray-50">
                        <td className="px-4 py-2">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 w-3 h-3"
                          />
                        </td>
                        <td className="px-4 py-2 text-xs text-gray-900">
                          {meeting.date}
                        </td>
                        <td className="px-4 py-2">
                          {getStatusBadge(meeting.status)}
                        </td>
                        <td className="px-4 py-2">
                          {getTypeBadge(meeting.type)}
                        </td>
                        <td className="px-4 py-2 text-xs text-gray-900 font-medium">
                          {meeting.buyerName}
                        </td>
                        <td className="px-4 py-2 text-xs text-gray-900">
                          {meeting.brand}
                        </td>
                        <td className="px-4 py-2 text-xs text-gray-900">
                          {meeting.dept}
                        </td>
                        <td className="px-4 py-2 text-xs text-gray-900 underline text-purple-600 cursor-pointer hover:text-purple-800">
                          {meeting.title}
                        </td>
                        <td className="px-4 py-2 text-xs text-gray-900">
                          {meeting.meetingDate}
                        </td>
                        <td className="px-4 py-2">
                          <div className="flex items-center">
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs text-white font-bold mr-2">
                              M
                            </div>
                            <div className="text-xs">
                              <div className="text-gray-900 font-medium">
                                {meeting.participants}
                              </div>
                              <div className="text-xs text-gray-500">
                                Buyer, Sales
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <button className="p-2 hover:bg-gray-100 rounded-full">
                            <MoreHorizontal className="w-4 h-4 text-gray-400" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="bg-white px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-700">
                  <span className="mr-2">Items Per Page</span>
                  <select className="px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white">
                    <option>50</option>
                    <option>100</option>
                    <option>200</option>
                  </select>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-700">1-50 of 100</span>
                  <button
                    className="p-1 hover:bg-gray-100 rounded disabled:opacity-50"
                    disabled
                  >
                    <ChevronLeft className="w-4 h-4 text-gray-400" />
                  </button>
                  <div className="flex space-x-1">
                    <button className="px-3 py-1 bg-purple-500 text-white rounded text-sm font-medium">
                      1
                    </button>
                    <button className="px-3 py-1 hover:bg-gray-100 text-gray-700 rounded text-sm">
                      2
                    </button>
                    <button className="px-3 py-1 hover:bg-gray-100 text-gray-700 rounded text-sm">
                      3
                    </button>
                    <button className="px-3 py-1 hover:bg-gray-100 text-gray-700 rounded text-sm">
                      4
                    </button>
                    <span className="px-2 py-1 text-gray-500 text-sm">...</span>
                    <button className="px-3 py-1 hover:bg-gray-100 text-gray-700 rounded text-sm">
                      10
                    </button>
                    <button className="px-3 py-1 hover:bg-gray-100 text-gray-700 rounded text-sm">
                      11
                    </button>
                    <button className="px-3 py-1 hover:bg-gray-100 text-gray-700 rounded text-sm">
                      12
                    </button>
                  </div>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
