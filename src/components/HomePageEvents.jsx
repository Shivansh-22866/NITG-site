import React from 'react';
import EventCard from './EventCard';

const HomePageEvents = () => {
    const paragraphs = [
        "Results of P.HD. admissions (A.Y. 2023-24) June Session",
        "Results of P.HD. admissions (A.Y. 2023-24) June Session",
        "Results of P.HD. admissions (A.Y. 2023-24) June Session",
        "Results of P.HD. admissions (A.Y. 2023-24) June Session",
        "Results of P.HD. admissions (A.Y. 2023-24) June Session",
        "Results of P.HD. admissions (A.Y. 2023-24) June Session",
        "Results of P.HD. admissions (A.Y. 2023-24) June Session",
        "Results of P.HD. admissions (A.Y. 2023-24) June Session",
        "Results of P.HD. admissions (A.Y. 2023-24) June Session",
        "Results of P.HD. admissions (A.Y. 2023-24) June Session"
      ];
      
  return (
    <div className='flex flex-row w-full gap-8 p-8'>
    <EventCard
        title="News and Events"
        paragraphs={paragraphs}
        link="#"
      />
      <EventCard
        title="Notice Board"
        paragraphs={paragraphs}
        link="#"
      />
      <EventCard
        title="Tendors"
        paragraphs={paragraphs}
        link="#"
      />
    </div>
  )
}

export default HomePageEvents