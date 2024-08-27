"use client"
import React, { useState } from 'react'

const Page = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [mainTask, setMainTask] = useState([])

  const addTask = (e) => {
    e.preventDefault()
    if (title && description) {
      setMainTask([...mainTask, { title, description }])
      setTitle("")
      setDescription("")
    }
  }

  const deleteHandler = (index) => {
    const updatedTasks = mainTask.filter((_, i) => i !== index)
    setMainTask(updatedTasks)
  }

  const renderTasks = mainTask.length > 0 ? (
    mainTask.map((task, index) => (
      <li key={index} className="border-b border-gray-300 py-2">
        <div className="flex justify-between items-center p-3 bg-white rounded-md shadow-md">
          <div>
            <h4 className="font-semibold text-lg">{task.title}</h4>
            <h5 className="text-gray-600">{task.description}</h5>
          </div>
          <div className="btns flex space-x-2">
            <button 
              className="close bg-red-500 p-2 rounded-md text-white hover:bg-red-600 transition" 
              onClick={() => deleteHandler(index)}
            >
              Close
            </button>
          </div>
        </div>
      </li>
    ))
  ) : (
    <h2 className="text-center text-gray-500">No tasks</h2>
  )

  return (
    <div className="main max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <form onSubmit={addTask} className="space-y-4">
        <div>
          <label htmlFor="Title" className="block text-gray-700">Title</label>
          <input 
            className='border-2 border-gray-300 p-2 rounded-md w-full' 
            type="text" 
            name="title" 
            id="Title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="Description" className="block text-gray-700">Description</label>
          <input 
            className='border-2 border-gray-300 p-2 rounded-md w-full' 
            type="text" 
            name="description" 
            id="Description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
        </div>
        <button className='w-full p-3 bg-blue-500 rounded-md text-white hover:bg-blue-600 transition'>Add Task</button>
      </form>

      <div className="tasks mt-6 bg-white p-4 rounded-md shadow-md">
        <ul className="space-y-2">
          {renderTasks}
        </ul>
      </div>
    </div>
  )
}

export default Page
