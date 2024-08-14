import React from 'react';
import EventCard from './EventCard';
import { Button, Divider, Card, CardHeader, CardFooter, Image } from '@nextui-org/react';
import { FaLink } from 'react-icons/fa';

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
    <>
    <div className='hidden flex-row w-full gap-8 p-8 lg:flex'>
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
    <div>
      <div className='w-full my-4'>
        <div className='px-8 py-4 flex flex-row items-center gap-4'>
          <Divider orientation='vertical' className='py-4 w-1 bg-black'/>
          <div className='text-2xl'>Announcements</div>
        </div>
        <div className='px-8 py-4 grid grid-cols-2 grid-rows-2 text-sm'>
          <div className='flex flex-row gap-2 items-center'>
            <FaLink className='w-8 h-8 m-2'/>
            <span>Results of P.HD. admissions (A.Y. 2023-24) June Session</span>
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <FaLink className='w-8 h-8 m-2'/>
            <span>Results of P.HD. admissions (A.Y. 2023-24) June Session</span>
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <FaLink className='w-8 h-8 m-2'/>
            <span>Results of P.HD. admissions (A.Y. 2023-24) June Session</span>
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <FaLink className='w-8 h-8 m-2'/>
            <span>Results of P.HD. admissions (A.Y. 2023-24) June Session</span>
          </div>
        </div>
        <div className='flex justify-center'>
          <Button color='primary'>
            More
          </Button>
        </div>
      </div>
      <div className='w-full bg-blue-700 text-white py-4'>
        <div className='px-8 py-4 flex flex-row items-center gap-4'>
          <Divider orientation='vertical' className='py-4 w-1 bg-white'/>
          <div className='text-2xl'>News and Events</div>
        </div>
        <div className='px-8 py-4 text-sm'>
          <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src="https://nextui.org/images/card-example-6.jpeg"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="font-bold text-white">14th August 2024</p>
                <p className="text-white">Lorem Ipsum adit solor amit</p>
              </div>
              <Button className="text-tiny" color="primary" radius="full" size="sm">
                More
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className='px-8 py-4 text-sm'>
          <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src="https://nextui.org/images/card-example-6.jpeg"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="font-bold text-white">14th August 2024</p>
                <p className="text-white">Lorem Ipsum adit solor amit</p>
              </div>
              <Button className="text-tiny" color="primary" radius="full" size="sm">
                More
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className='flex justify-center'>
          <Button color='primary'>
            More
          </Button>
        </div>
      </div>
      <div className='w-full my-4'>
        <div className='px-8 py-4 flex flex-row items-center gap-4'>
          <Divider orientation='vertical' className='py-4 w-1 bg-black'/>
          <div className='text-2xl'>Notice Board</div>
        </div>
        <div className='px-8 py-4 grid grid-cols-2 grid-rows-2 text-sm'>
          <div className='flex flex-row gap-2 items-center'>
            <FaLink className='w-8 h-8 m-2'/>
            <span>Results of P.HD. admissions (A.Y. 2023-24) June Session</span>
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <FaLink className='w-8 h-8 m-2'/>
            <span>Results of P.HD. admissions (A.Y. 2023-24) June Session</span>
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <FaLink className='w-8 h-8 m-2'/>
            <span>Results of P.HD. admissions (A.Y. 2023-24) June Session</span>
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <FaLink className='w-8 h-8 m-2'/>
            <span>Results of P.HD. admissions (A.Y. 2023-24) June Session</span>
          </div>
        </div>
        <div className='flex justify-center'>
          <Button color='primary'>
            More
          </Button>
        </div>
      </div>
    </div>

    </>
  )
}

export default HomePageEvents