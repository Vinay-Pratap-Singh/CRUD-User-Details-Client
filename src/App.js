import React from 'react'
import AddCard from './components/AddCard'
import UpdateCard from './components/UpdateCard'
import DisplayCard from './components/DisplayCard'

const App = () => {
  return (
    <div className=' w-full flex flex-col items-center justify-center gap-6 bg-gray-300'>
      <div className='flex items-center gap-6 mt-10'>
      <AddCard></AddCard>
      <UpdateCard></UpdateCard>
      </div>
      
      <div className='flex flex-wrap items-center gap-6 my-10'>
      <DisplayCard></DisplayCard>
      </div>
    </div>
  )
}

export default App
