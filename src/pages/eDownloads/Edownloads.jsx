import { Breadcrumbs, BreadcrumbItem, DropdownMenu, DropdownTrigger, Button, Dropdown, DropdownItem } from '@nextui-org/react';
import { Card, CardBody, CardFooter } from '@nextui-org/react';
import { Image } from '@nextui-org/react';
import { MdGroup } from 'react-icons/md';
import { PiStudentFill } from 'react-icons/pi';

const Edownloads = () => {
  return (
    <>
    
      <div className='sm:h-72 relative bg-blue-700 flex flex-col sm:justify-between justify-evenly'>
              <div className='p-4 text-white flex flex-col sm:flex-row gap-8 items-center justify-between'>
                  <Breadcrumbs size='lg' variant='solid'>
                      <BreadcrumbItem href='/'>
                          <Button variant='light'>Home</Button>
                      </BreadcrumbItem>
                      <BreadcrumbItem>
                          <Button variant='light'>E-downloads</Button>
                      </BreadcrumbItem>
                  </Breadcrumbs>
              </div>
              
              <h1 className='text-5xl text-white p-4 font-bold'>
                  E-downloads
              </h1>
      </div>

      <div className='sm:h-72 sm:flex-row gap-8 relative p-8 flex flex-col justify-evenly'>
        <Card shadow="sm" isPressable onPress={() => console.log("item pressed")} className='min-w-72'>
            <CardBody className="overflow-visible p-0 flex items-center justify-center">
                <PiStudentFill className='w-32 h-32 mx-auto' />
            </CardBody>
            <CardFooter className="text-small justify-between">
                <b className='mx-auto'>For Students</b>
            </CardFooter>
        </Card>

        <Card shadow="sm" isPressable onPress={() => console.log("item pressed")} className='min-w-72'>
            <CardBody className="overflow-visible p-0 flex items-center justify-center">
                <MdGroup className='w-32 h-32 mx-auto' />
            </CardBody>
            <CardFooter className="text-small justify-between">
                <b className='mx-auto'>For Staff & Faculty</b>
            </CardFooter>
        </Card>
      </div>
    
    </>
  )
}

export default Edownloads