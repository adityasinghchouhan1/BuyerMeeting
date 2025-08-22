import React from 'react'

export default function NotificationsCard() {
  const notifications = [
    {
      id: 1,
      title: 'Task completed',
      description: '[task_name] marked as completed..',
      time: '10 mins ago',
      img: 'https://i.pravatar.cc/40?img=12',
    },
    {
      id: 2,
      title: 'Meeting Created',
      description: 'New meeting [meeting_title] is created for [date_time]',
      time: '5 mins ago',
      icon: '📅',
    },
    {
      id: 3,
      title: 'Action Item Added',
      description: '[action_item_name] is added in meeting [meeting_title]',
      time: '22 May 2025',
      icon: '📝',
    },
    {
      id: 4,
      title: 'Task assigned',
      description: '[task_name] has been assigned to [user_name].',
      time: '2 hours ago',
      img: 'https://i.pravatar.cc/40?img=15',
    },
  ]

  // Highlight placeholders like [task_name] in sky blue
  const highlightText = (text) => {
    return text.replace(/\[(.*?)\]/g, `<span class="text-sky-500">[$1]</span>`)
  }

  return (
    <div className="w-96 bg-white shadow-md rounded-lg p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-bold text-lg">Notifications</h2>
        <span className="text-sm bg-green-100 text-green-600 px-3 py-1 rounded-md">
          5 new
        </span>
      </div>

      {/* Notification List */}
      <div className="space-y-3">
        {notifications.map((item) => (
          <div
            key={item.id}
            className="flex items-start justify-between border-b pb-3"
          >
            <div className="flex items-start space-x-3">
              {item.img ? (
                <img
                  src={item.img}
                  alt="user"
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-lg">
                  {item.icon}
                </div>
              )}
              <div>
                <p className="font-semibold text-sm">{item.title}</p>
                <p
                  className="text-xs text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: highlightText(item.description),
                  }}
                />
                <p className="text-xs text-gray-400">{item.time}</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">✕</button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4">
        <button className="w-full bg-purple-600 text-white py-2 rounded-md font-medium hover:bg-purple-700 transition">
          View All
        </button>
      </div>
    </div>
  )
}
