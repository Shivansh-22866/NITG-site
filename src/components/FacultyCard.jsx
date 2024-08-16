import React from 'react'
import { Avatar } from '@nextui-org/react'

const FacultyCard = () => {
  return (
    <div>

        <div className='relative flex items-center justify-center p-8 border-5 border-blue-500 rounded-lg shadow-lg w-1/3 mt-24 bg-blue-100'>
            {/* Avatar positioned absolutely */}
            <Avatar 
                src="https://www.nitgoa.ac.in/People/frontend/Dr.%20Veena%20Thenkanidiyoor.png"
                className='absolute top-[-6rem] left-1/2 transform -translate-x-1/2 border-5 border-blue-500 w-48 h-48' // Adjust top value as needed
            />
            <div className='flex flex-col items-center gap-4 pt-24'>
                <h2 className='text-lg font-bold'>Dr. ABC</h2>
                <p className='text-sm text-default-400'>Associate Professor & Head</p>
                <p className='text-sm text-default-400'>Department of Computer Science & Engineering</p>
                <span className='text-sm'>
                    <b>Email ID:</b> xyz123.ac.in
                </span>
                <span className='text-sm'>
                    <b>Research Area:</b> Artificial Intelligence, Machine Learning, and Natural Language Processing
                </span>
            </div>
        </div>

    </div>
  )
}

export default FacultyCard