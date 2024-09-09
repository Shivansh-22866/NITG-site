import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '@nextui-org/react';

const FacultyCard = ({ avatarSrc, name, profession, email, researchArea }) => {
  return (
    <div className='w-full flex-1 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col'>
      <div className='flex flex-col items-center p-6'>
        {/* Avatar */}
        <Avatar
          src={avatarSrc}
          className='w-24 h-24 mb-4 border-2 border-blue-500'
        />
        {/* Name and Profession */}
        <div className='text-center'>
          <h2 className='text-xl font-bold mb-2'>{name}</h2>
          <p className='text-sm text-gray-600 mb-4'>{profession}</p>
        </div>
        {/* Email and Research Area */}
        <div className='text-center text-sm text-gray-600 hidden sm:block'>
          <p><b>Email ID:</b> {email}</p>
          <p><b>Research Area:</b> {researchArea}</p>
        </div>
      </div>
    </div>
  );
};

FacultyCard.propTypes = {
  avatarSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  researchArea: PropTypes.string.isRequired,
};

export default FacultyCard;
