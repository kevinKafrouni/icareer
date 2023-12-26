import React from 'react'
import { useState } from 'react'

export default function Task(props) {
    const [showModal,setShowModal]= useState(false);

    const toggleModal = (state)=>{
        setShowModal(state)
    }
  return (
    <>
    <div draggable
          onDragStart={e=> e.dataTransfer.setData("id",props.id)}
         className='border rounded-lg px-2 m-2 bg-gray-200 w-48 h-24'
         onClick={()=>toggleModal(true)}
         >
        <h1 className='text-base font-semibold py-2'>{props.first_name} {props.last_name}</h1>
        <div className='flex gap-2 justify-between py-2'>
            <div></div>
            <div></div>
        </div>
    </div>

    {
        showModal && 
        <div className="fixed top-0 right-0 bottom-0 left-0 z-50 flex justify-center items-center bg-black bg-opacity-70">
        <div className=" bg-white rounded-lg shadow-lg dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {props.first_name} {props.last_name}
            </h3>
            <button
                onClick={() => toggleModal(false)}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
                X
            </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
                <p className='text-white-700'>Application Date : <span>27/8/2023</span></p>
                <p className='text-white-700'>Email: <span>{props.email}</span></p>
            
            </div>
        </div>
        </div>

    }
    </>
  )
}
