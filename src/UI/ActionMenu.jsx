import { Eye, Edit, Activity, Trash2 } from 'lucide-react'

export default function ActionMenu() {
  return (
    <div className="w-48 bg-white border rounded-md shadow-lg">
      <ul className="py-1 text-sm text-gray-700">
        <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <Eye className="w-4 h-4 mr-2 text-gray-600" />
          View
        </li>
        <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <Edit className="w-4 h-4 mr-2 text-gray-600" />
          Edit
        </li>
        <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <Activity className="w-4 h-4 mr-2 text-gray-600" />
          Activity Log
        </li>
        <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600">
          <Trash2 className="w-4 h-4 mr-2" />
          Delete
        </li>
      </ul>
    </div>
  )
}
