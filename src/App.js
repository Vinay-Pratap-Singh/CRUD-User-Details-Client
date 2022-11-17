import React from 'react'
import AddCard from './components/AddCard'
import UpdateCard from './components/UpdateCard'
import DisplayCard from './components/DisplayCard'

const App = () => {
  return (
    <div className='h-[100vh] w-full flex items-center justify-center gap-6 bg-gray-300'>
      <AddCard></AddCard>
      <UpdateCard></UpdateCard>
      <DisplayCard></DisplayCard>
    </div>
  )
}

export default App
