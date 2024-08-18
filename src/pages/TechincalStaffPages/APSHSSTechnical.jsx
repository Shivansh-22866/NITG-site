import React from 'react'
import FacultyCard from '../../components/FacultyCard';

const APSHSSTechnical = () => {

    const staffData = [
        {
          avatarSrc: "https://www.nitgoa.ac.in/People/frontend/Dr.%20Veena%20Thenkanidiyoor.png",
          name: "Dr. Veena Thenkanidiyoor",
          profession: "Associate Professor & Head",
          email: "veenat@nitgoa.ac.in",
          researchArea: "Deep Learning, Kernel Methods, Pattern Recognition, Applied Machine Learning, Computer Vision, Speech Processing, Weather Data Analysis, Content based Information Retrieval",
        },
        {
          avatarSrc: "https://www.nitgoa.ac.in/People/frontend/Dr.%20Damodar%20Reddy%20Edla.png",
          name: "Dr. Damodar Reddy Edla",
          profession: "Associate Professor",
          email: "dr.reddy@nitgoa.ac.in",
          researchArea: "Artificial Intelligence; Cognitive Neuroscience; Brain Computer Interface; Medical Imaging; Wireless Sensor Networks; Machine Learning/Deep Learning; Internet of Medical Things (IoMT)",
        },
        // Add more professor objects here
      ];

  return (
    <div className='grid sm:grid-cols-3 grid-cols-1 sm:flex-row gap-8'>
    {staffData.map((professor, index) => (
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

export default APSHSSTechnical