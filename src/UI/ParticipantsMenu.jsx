import React from 'react'

const participants = [
  { name: 'Mohd Saleem', role: 'Buyer, Sales' },
  { name: 'Mohd Saleem', role: 'Adam, Merchandiser' },
  { name: 'Mohd Saleem', role: 'Adam, Admin' },
  { name: 'Mohd Saleem', role: 'Buyer, CEO' },
  { name: 'Mohd Saleem', role: 'Buyer, Design Head' },
  { name: 'Extra User', role: 'Developer' },
  { name: 'Another User', role: 'Manager' },
]

export default function ParticipantsMenu() {
  const visibleParticipants = participants.slice(0, 5)

  return (
    <div className="w-52 bg-white shadow-md rounded-lg p-3">
      {visibleParticipants.map((p, i) => (
        <div
          key={i}
          className={`flex items-center gap-3 p-2 rounded-md ${
            i === 0 ? 'bg-gray-100' : 'hover:bg-gray-50'
          }`}
        >
          {/* Avatar */}
          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-semibold text-sm">
            {p.name.charAt(0)}
          </div>

          {/* Info */}
          <div>
            <p className="text-sm font-medium text-gray-800">{p.name}</p>
            <p className="text-xs text-gray-500">{p.role}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
