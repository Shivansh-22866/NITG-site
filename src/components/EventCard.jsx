import React from 'react';
import PropTypes from 'prop-types';
import { FaLink, FaArrowRight } from 'react-icons/fa';
import { Card, CardBody, CardHeader, CardFooter } from '@nextui-org/react';

const EventCard = ({ title, paragraphs, link }) => (
  <Card className="w-1/3">
    <CardHeader className="justify-center my-4 z-0">
      <div className="flex flex-col gap-1 items-center justify-center">
        <h1 className="font-semibold leading-none text-center text-3xl">{title}</h1>
      </div>
    </CardHeader>
    <CardBody className="px-3 py-0 text-medium">
      <div className="pt-2 overflow-x-hidden h-72 flex flex-col gap-4">
        {paragraphs.map((text, index) => (
          <div key={index} className="flex items-start justify-center gap-1">
            <FaLink className="w-6 h-6 m-2" />
            <p className='text-xl font-light'>{text}</p>
          </div>
        ))}
      </div>
    </CardBody>
    <CardFooter>
      <div className="flex items-center gap-2 justify-center text-blue-500 hover:text-blue-700">
        <a href={link} className="">Read More</a>
        <FaArrowRight />
      </div>
    </CardFooter>
  </Card>
);

// Define PropTypes for the component
EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string.isRequired,
};

export default EventCard;
