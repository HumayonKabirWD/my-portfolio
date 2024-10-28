"use client"

import React from 'react'
import Maxwidth from './Maxwidth'
import { ActivityIcon, ArrowUp, BarChart3Icon, FileTextIcon, MessageSquareIcon, User } from 'lucide-react'

const Myproject = () => {
  return (
    <Maxwidth className='mt-0'>
        <div className="w-full max-w-7xl mx-auto p-4 space-y-8">
      {/* Second Grid - 4 Box Layout */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-6">My project</h2>
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {/* Box 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transition-all hover:shadow-xl">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Activity</h3>
                <p className="text-gray-600">Daily updates</p>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-blue-500">245</span>
                  <span className="text-green-500 text-sm ml-2">+12%</span>
                </div>
              </div>
              <ActivityIcon className="h-6 w-6 text-blue-500" />
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transition-all hover:shadow-xl">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Messages</h3>
                <p className="text-gray-600">Communication stats</p>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-purple-500">89</span>
                  <span className="text-green-500 text-sm ml-2">+24%</span>
                </div>
              </div>
              <MessageSquareIcon className="h-6 w-6 text-purple-500" />
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transition-all hover:shadow-xl">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Documents</h3>
                <p className="text-gray-600">File analytics</p>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-orange-500">156</span>
                  <span className="text-red-500 text-sm ml-2">-3%</span>
                </div>
              </div>
              <FileTextIcon className="h-6 w-6 text-orange-500" />
            </div>
          </div>

          {/* Box 4 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transition-all hover:shadow-xl">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Statistics</h3>
                <p className="text-gray-600">Performance data</p>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-green-500">92%</span>
                  <span className="text-green-500 text-sm ml-2">+5%</span>
                </div>
              </div>
              <BarChart3Icon className="h-6 w-6 text-green-500" />
            </div>
          </div>
        </div>
        <div className="">
            
        </div>
    </div>
        
      </div>
    </div>
    </Maxwidth>
    
  )
}

export default Myproject