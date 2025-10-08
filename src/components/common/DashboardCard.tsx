import React from 'react'

interface DashboardCardProps {
  title: string
  value: string
  vs: string
}
const DashboardCard = ({title,value,vs}: DashboardCardProps) => {
  return (
    <div className='rounded-2xl py-3 px-6 flex flex-col gap-2 border border-gray-300' >
        <h6 className='text-black text-xl font-bold  underline decoration-dotted' >{title}</h6>
        <p className='text-gray-600 text-2xl font-extrabold' >{value} <span className='text-gray-400 text-sm font-medium' >vs {vs}</span></p>

    </div>
  )
}

export default DashboardCard