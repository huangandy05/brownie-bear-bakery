'use client'

import { useState } from 'react'
import { AlertTriangle, X } from 'lucide-react'

export default function UnavailabilityBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="flex justify-center items-start p-4">
      <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded-r shadow-md max-w-2xl w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <AlertTriangle className="h-6 w-6 text-yellow-400 mr-4 flex-shrink-0" />
            <div>
              <p className="font-bold text-yellow-700">Temporary Closure</p>
              <p className="text-yellow-600">
                We will be unavailable for a few weeks. Look forward to our return with more delicious brownies!
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-yellow-400 hover:text-yellow-500 ml-4 flex-shrink-0"
            aria-label="Close banner"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}