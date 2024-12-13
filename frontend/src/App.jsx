import React from 'react'
import ToDo from './components/ToDo'
import Navbar from './components/Navbar'
import { useState } from 'react'

function App() {
  const [activeTab, setActiveTab] = useState('todo');

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  return (
    <div className='bg-stone-900 grid min-h-screen'>
      <header className='fixed top-o left-0 right-0'>
q        <Navbar onTabChange={handleTabChange} />
      </header>
      <main className='pt-24'>
      {activeTab === 'todo' && <ToDo />}
      {activeTab === 'calendar' && <div>Calendar Component</div>}
      </main>
      <footer>

      </footer>
    </div>
  )
}

export default App
