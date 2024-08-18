import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '@nextui-org/react';

const FacultyCard = ({ avatarSrc, name, profession, email, researchArea }) => {
  return (
    <div className='w-full'>
        <div className='relative flex items-start justify-center p-8 border-5 border-blue-500 rounded-lg shadow-lg mt-24 bg-blue-100 sm:h-[30rem]'>
            {/* Avatar positioned absolutely */}
            <Avatar 
                src={avatarSrc}
                className='absolute top-[-6rem] left-1/2 transform -translate-x-1/2 border-5 border-blue-500 w-48 h-48'
            />
            <div className='flex flex-col items-center gap-4 pt-24'>
                <h2 className='text-lg font-bold'>{name}</h2>
                <p className='text-sm text-default-400'>{profession}</p>
                <p className='text-sm text-default-400'>{researchArea}</p>
                <span className='text-sm'>
                    <b>Email ID:</b> {email}
                </span>
                <span className='text-sm'>
                    <b>Research Area:</b> {researchArea}
                </span>
            </div>
        </div>
    </div>
  );
}

FacultyCard.propTypes = {
  avatarSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  researchArea: PropTypes.string.isRequired,
};

export default FacultyCard;
