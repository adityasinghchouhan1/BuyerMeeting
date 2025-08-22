import React, { useState } from 'react'
import {
  Download,
  Plus,
  Search,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import ActionMenu from '../UI/ActionMenu'
import ParticipantsMenu from '../UI/ParticipantsMenu'
import { ChevronUp, ChevronDown } from 'lucide-react'
import { ArrowUp, ArrowDown } from 'lucide-react'

const BuyerMeetingPage = () => {
  const [open, setOpen] = useState(false)

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

  const [searchTerm, setSearchTerm] = useState('')
  //
  const [buyerFilter, setBuyerFilter] = useState('')
  const [brandFilter, setBrandFilter] = useState('')
  const [deptFilter, setDeptFilter] = useState('')
  const [typeFilter, setTypeFilter] = useState('')
  const [participantsFilter, setParticipantsFilter] = useState('')
  const [dateFilter, setDateFilter] = useState('')
  const [statusFilter, setStatusFilter] = useState('')

  // 🔹 Filtering Logic
  const filteredData = meetingData.filter((meeting) => {
    return (
      (searchTerm === '' ||
        meeting.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        meeting.buyerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        meeting.brand.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (buyerFilter === '' || meeting.buyerName === buyerFilter) &&
      (brandFilter === '' || meeting.brand === brandFilter) &&
      (deptFilter === '' || meeting.dept === deptFilter) &&
      (typeFilter === '' || meeting.type === typeFilter) &&
      (participantsFilter === '' ||
        meeting.participants === participantsFilter) &&
      (dateFilter === '' || meeting.meetingDate === dateFilter) &&
      (statusFilter === '' || meeting.status === statusFilter)
    )
  })

  const getUniqueValues = (key) => {
    return [...new Set(meetingData.map((item) => item[key]))]
  }

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

  return (
    <div className="px-3 pt-2">
      {/* Page Header Section */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <h1 className="text-xl font-semibold text-gray-900 mb-2">
            Buyer Meeting List View
          </h1>
          <nav className="text-sm">
            <span className="text-purple-600 font-medium">Buyer Meeting</span>
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
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-2 mb-2">
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
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 pt-4 mb-4">
        <div className="flex items-center mb-3 ms-3 flex-wrap gap-2">
          {/* Search */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-7 pr-3 py-1.5 border border-gray-300 rounded text-xs 
                 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Buyer Name */}
          <select
            value={buyerFilter}
            onChange={(e) => setBuyerFilter(e.target.value)}
            className="px-2 py-1.5 border border-gray-300 rounded text-xs bg-white 
               focus:ring-1 focus:ring-purple-500 text-gray-400"
          >
            <option value="">Buyer</option>
            {getUniqueValues('buyerName').map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>

          {/* Brand */}
          <select
            value={brandFilter}
            onChange={(e) => setBrandFilter(e.target.value)}
            className="px-2 py-1.5 border border-gray-300 rounded text-xs bg-white 
               focus:ring-1 focus:ring-purple-500 text-gray-400"
          >
            <option value="">Brand</option>
            {getUniqueValues('brand').map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>

          {/* Dept */}
          <select
            value={deptFilter}
            onChange={(e) => setDeptFilter(e.target.value)}
            className="px-2 py-1.5 border border-gray-300 rounded text-xs bg-white 
               focus:ring-1 focus:ring-purple-500 text-gray-400"
          >
            <option value="">Dept</option>
            {getUniqueValues('dept').map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>

          {/* Meeting Type */}
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-2 py-1.5 border border-gray-300 rounded text-xs bg-white 
               focus:ring-1 focus:ring-purple-500 text-gray-400"
          >
            <option value="">Type</option>
            {getUniqueValues('type').map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>

          {/* Participants */}
          <select
            value={participantsFilter}
            onChange={(e) => setParticipantsFilter(e.target.value)}
            className="px-2 py-1.5 border border-gray-300 rounded text-xs bg-white 
               focus:ring-1 focus:ring-purple-500 text-gray-400"
          >
            <option value="">Participants</option>
            {getUniqueValues('participants').map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>

          {/* Meeting Date */}
          <select
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="px-2 py-1.5 border border-gray-300 rounded text-xs bg-white 
               focus:ring-1 focus:ring-purple-500 text-gray-400"
          >
            <option value="">Date</option>
            {getUniqueValues('meetingDate').map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>

          {/* Status */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-2 py-1.5 border border-gray-300 rounded text-xs bg-white 
               focus:ring-1 focus:ring-purple-500 text-gray-400"
          >
            <option value="">Status</option>
            {getUniqueValues('status').map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="overflow-x-auto max-h-[600px] overflow-y-auto relative">
            <table className="w-full border-collapse">
              <thead className="bg-gray-100 border-b border-gray-200 sticky top-0 z-20">
                <tr>
                  <th className="px-3 py-1 left-0 bg-gray-100 z-30">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 w-3 h-3"
                    />
                  </th>
                  <th className="px-4 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[140px]">
                    <div className="flex items-center gap-1">
                      Date & Time
                      <span className="flex flex-col">
                        <ChevronUp className="h-2.5 w-2.5 text-gray-400" />
                        <ChevronDown className="h-2.5 w-2.5 text-gray-400 -mt-1" />
                      </span>
                    </div>
                  </th>
                  <th className="px-4 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[140px]">
                    <div className="flex items-center gap-1">
                      Status
                      <span className="flex flex-col">
                        <ChevronUp className="h-2.5 w-2.5 text-gray-400" />
                        <ChevronDown className="h-2.5 w-2.5 text-gray-400 -mt-1" />
                      </span>
                    </div>
                  </th>
                  <th className="px-4 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[80px]">
                    <div className="flex items-center gap-2">
                      Type
                      <span className="p-1 rounded-md bg-orange-100">
                        <ArrowUp className="h-3.5 w-3.5 text-purple-600" />
                      </span>
                    </div>
                  </th>
                  <th className="px-4 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[80px]">
                    <div className="flex items-center gap-2">
                      Buyer Name
                      <span className="p-1 rounded-md bg-orange-100">
                        <ArrowDown className="h-3.5 w-3.5 text-purple-700" />
                      </span>
                    </div>
                  </th>
                  <th className="px-4 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[80px]">
                    <div className="flex items-center gap-2">
                      Brand
                      <span className="p-1 rounded-md bg-orange-100">
                        <ArrowDown className="h-3.5 w-3.5 text-purple-700" />
                      </span>
                    </div>
                  </th>
                  <th className="px-4 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[80px]">
                    <div className="flex items-center gap-2">
                      Dept.
                      <span className="p-1 rounded-md bg-orange-100">
                        <ArrowDown className="h-3.5 w-3.5 text-purple-700" />
                      </span>
                    </div>
                  </th>
                  <th className="px-4 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[140px]">
                    <div className="flex items-center gap-1">
                      Title
                      <span className="flex flex-col">
                        <ChevronUp className="h-2.5 w-2.5 text-gray-400" />
                        <ChevronDown className="h-2.5 w-2.5 text-gray-400 -mt-1" />
                      </span>
                    </div>
                  </th>
                  <th className="px-4 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[140px]">
                    <div className="flex items-center gap-1">
                      Meeting Date
                      <span className="flex flex-col">
                        <ChevronUp className="h-2.5 w-2.5 text-gray-400" />
                        <ChevronDown className="h-2.5 w-2.5 text-gray-400 -mt-1" />
                      </span>
                    </div>
                  </th>
                  <th className="px-4 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[140px]">
                    <div className="flex items-center gap-1">
                      Participants
                      <span className="flex flex-col">
                        <ChevronUp className="h-2.5 w-2.5 text-gray-400" />
                        <ChevronDown className="h-2.5 w-2.5 text-gray-400 -mt-1" />
                      </span>
                    </div>
                  </th>
                  {/* ✅ Sticky Action Column */}
                  <th className="px-x py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[30px] sticky right-0 bg-gray-100 z-30">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((meeting) => (
                  <tr key={meeting.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2  left-0 bg-white z-20">
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
                    <td className="px-4 py-2">{getTypeBadge(meeting.type)}</td>
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
                      <div
                        className="relative inline-block"
                        onMouseEnter={() => setOpen(true)}
                        onMouseLeave={() => setOpen(false)}
                      >
                        {/* Participant small snippet */}
                        <div className="flex items-center cursor-pointer">
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

                        {/* Popup menu */}
                        {open && (
                          <div className="absolute right-0 mt-2 z-50">
                            <ParticipantsMenu />
                          </div>
                        )}
                      </div>
                    </td>
                    {/* ✅ Sticky Action Column */}
                    <td className="px-2 py-4 sticky right-0 bg-gray-50 shadow-md">
                      <div className="relative inline-block group z-50">
                        {/* Action Button */}
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                          <MoreHorizontal className="w-4 h-4 text-gray-400" />
                        </button>

                        {/* Action Menu */}
                        <div
                          className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg
                    opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                    transition-all duration-200 z-50 me-20"
                        >
                          <ActionMenu />
                        </div>
                      </div>
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
    </div>
  )
}

export default BuyerMeetingPage
