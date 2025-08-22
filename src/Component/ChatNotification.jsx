import React from 'react'

export default function ChatNotification() {
  const messages = [
    {
      id: 1,
      name: '[user_name]',
      time: '10 mins ago',
      img: 'https://i.pravatar.cc/40?img=1',
    },
    {
      id: 2,
      name: '[user_name]',
      time: '10 mins ago',
      img: 'https://i.pravatar.cc/40?img=2',
    },
    {
      id: 3,
      name: '[user_name]',
      time: '10 mins ago',
      img: 'https://i.pravatar.cc/40?img=3',
    },
    {
      id: 4,
      name: '[user_name]',
      time: '10 mins ago',
      img: 'https://i.pravatar.cc/40?img=4',
    },
  ]

  return (
    <div className="w-96 bg-white shadow-md rounded-lg p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-bold text-lg">Chat</h2>
        <span className="text-sm bg-green-100 text-green-600 px-3 py-1 rounded-md">
          5 new
        </span>
      </div>

      {/* Messages */}
      <div className="space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="flex items-start justify-between bg-gray-50 p-3 rounded-md shadow-sm"
          >
            <div className="flex items-start space-x-3">
              <img
                src={msg.img}
                alt="user"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold text-sm">New Message</p>
                <p className="text-xs text-gray-600">
                  You have a new messages from{' '}
                  <span className="text-blue-500">{msg.name}</span>
                </p>
                <p className="text-xs text-gray-400">{msg.time}</p>
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
