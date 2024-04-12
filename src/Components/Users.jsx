import React from 'react'
import { useParams } from 'react-router-dom'

function Users() {
    const {userid} = useParams()
  return (
    <div className=' bg-gray-500 text-2xl p-3px text-center'>Users: {userid}</div>
  )
}

export default Users