import React from 'react'
import { User, Settings, LogOut } from 'lucide-react'

const ProfileMenu = () => {
  return (
    <div className="w-48 border rounded-md shadow-sm bg-white">
      {/* Profile */}
      <button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 border-b text-gray-600">
        <User className="w-4 h-4 text-gray-600" />
        <span>Profile</span>
      </button>

      {/* Settings */}
      <button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 border-b text-gray-600">
        <Settings className="w-4 h-4 text-gray-600" />
        <span>Settings</span>
      </button>

      {/* Log Out */}
      <button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 border-b text-gray-600">
        <LogOut className="w-4 h-4 text-gray-600" />
        <span>Log Out</span>
      </button>
    </div>
  )
}

export default ProfileMenu
