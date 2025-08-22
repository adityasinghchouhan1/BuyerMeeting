import React, { useState } from 'react'
import { MoreVertical, Edit, Trash } from 'lucide-react'

const ActionItemsPage = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState(null)

  const actionItems = [
    {
      task: 'Share revised costing with the Buyer and get it approved.',
      status: 'In Progress',
      date: '01 May, 2025',
      assignedTo: { name: 'Mohd Saleem', role: 'Merchandiser' },
    },
    {
      task: 'Send fabric swatches',
      status: 'Pending',
      date: '01 May, 2025',
      assignedTo: { name: 'Mohd Saleem', role: 'Merchandiser' },
    },
    {
      task: 'Confirm delivery window',
      status: 'Completed',
      date: '01 May, 2025',
      assignedTo: { name: 'Mohd Saleem', role: 'Merchandiser' },
    },
  ]

  const getStatusClasses = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-200 text-yellow-800'
      case 'In Progress':
        return 'bg-orange-500 text-white'
      case 'Completed':
        return 'bg-green-500 text-white'
      case 'Overdue':
        return 'bg-red-500 text-white'
      default:
        return 'bg-gray-200 text-gray-800'
    }
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-gray-800 font-semibold mb-3">Action Items 4</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-sm text-gray-600">
              <th className="p-2 text-left">Action Items</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Due Date</th>
              <th className="p-2 text-left">Assigned to</th>
              <th className="p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {actionItems.map((item, index) => (
              <tr
                key={index}
                className="border-b text-sm text-gray-700 hover:bg-gray-50"
              >
                {/* Action Item */}
                <td className="p-2">{item.task}</td>

                {/* Status */}
                <td className="p-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${getStatusClasses(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>

                {/* Due Date */}
                <td className="p-2">{item.date}</td>

                {/* Assigned To */}
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">
                      {item.assignedTo.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 text-xs">
                        {item.assignedTo.name}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {item.assignedTo.role}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Actions */}
                <td className="p-2 relative">
                  <button
                    onClick={() =>
                      setOpenMenuIndex(openMenuIndex === index ? null : index)
                    }
                    className="p-1 rounded hover:bg-gray-100"
                  >
                    <MoreVertical className="w-4 h-4 text-gray-600" />
                  </button>

                  {/* Dropdown */}
                  {openMenuIndex === index && (
                    <div className="absolute right-0 mt-1 bg-white border rounded shadow-md w-28 z-10">
                      <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 w-full text-sm text-gray-700">
                        <Edit className="w-4 h-4" /> Edit
                      </button>
                      <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 w-full text-sm text-red-600">
                        <Trash className="w-4 h-4" /> Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Status legend */}
      <div className="mt-6 text-sm">
        <p className="font-medium text-gray-700 mb-2">Statuses in dropdown</p>
        <div className="flex gap-3 flex-wrap">
          <span className="px-2 py-1 rounded bg-yellow-200 text-yellow-800 text-xs font-medium">
            Pending
          </span>
          <span className="px-2 py-1 rounded bg-orange-500 text-white text-xs font-medium">
            In Progress
          </span>
          <span className="px-2 py-1 rounded bg-green-500 text-white text-xs font-medium">
            Completed
          </span>
          <span className="px-2 py-1 rounded bg-red-500 text-white text-xs font-medium">
            Overdue
          </span>
        </div>
      </div>
    </div>
  )
}

export default ActionItemsPage
