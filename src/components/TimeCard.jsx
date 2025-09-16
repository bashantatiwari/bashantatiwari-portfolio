import React, { useState, useEffect } from 'react'

const KathmanduTime = () => {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kathmandu',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }
      const formatter = new Intl.DateTimeFormat('en-US', options)
      setTime(formatter.format(new Date()))
    }

    updateTime() // run once immediately
    const interval = setInterval(updateTime, 1000) // update every second

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <p className='text-3xl font-mono'>{time}</p>
      <p className='text-sm text-gray-400 mt-2'>Kathmandu, Nepal</p>
    </>
  )
}

export default KathmanduTime
