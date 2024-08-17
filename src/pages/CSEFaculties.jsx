import React from 'react'
import FacultyCard from '../components/FacultyCard'

const CSEFaculties = () => {

    const professorsData = [
        {
          avatarSrc: "https://www.nitgoa.ac.in/People/frontend/Dr.%20Veena%20Thenkanidiyoor.png",
          name: "Dr. Veena Thenkanidiyoor",
          profession: "Associate Professor & Head",
          email: "veena@example.com",
          researchArea: "Artificial Intelligence, Machine Learning, and Natural Language Processing",
        },
        {
          avatarSrc: "https://example.com/professor2.png",
          name: "Dr. John Doe",
          profession: "Professor",
          email: "john.doe@example.com",
          researchArea: "ArtificialMachine Learning, and Natural Language Processing",
        },
        // Add more professor objects here
      ];

  return (
    <div className='flex flex-row gap-8 h-full overflow-hidden'>
    {professorsData.map((professor, index) => (
        <FacultyCard
          key={index}
          avatarSrc={professor.avatarSrc}
          name={professor.name}
          profession={professor.profession}
          email={professor.email}
          researchArea={professor.researchArea}
        />
      ))}
    </div>
  )
}

export default CSEFaculties