'use client'

import React from 'react'

function Bookingslot() {
  return (
    <div>
          <input type="text" placeholder="Enter Name" className="w-full p-2 border rounded-lg" />
    <input type="text" placeholder='Mobile Number' className="w-full p-2 border rounded-lg mt-2" />
    <select name="court" id="court" className="w-full p-2 border rounded-lg mt-2">
      <option value="">Select Court</option>
      <option value="1">Court 1</option>
      <option value="2">Court 2</option>
      <option value="3">Court 3</option>
    </select>
    </div>
  )
}

export default Bookingslot