import { Button, Dropdown, DropdownMenu, DropdownItem, DropdownTrigger, Link } from '@nextui-org/react';

const MenuNavbar = () => {
  return (
    <nav className="p-4 sticky top-0 z-20 bg-white">
      <ul className="flex flex-wrap justify-center sm:gap-2 text-white">
        {/* For large screens */}
        <li className="hidden md:flex">
          <Button variant='light' as={Link} href="/">
            Home
          </Button>
        </li>
        <li className="hidden md:flex">
          <Dropdown>
            <DropdownTrigger>
              <Button variant='light'>Administration</Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem key="admin1">Submenu 1</DropdownItem>
              <DropdownItem key="admin2">Submenu 2</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </li>
        <li className="hidden md:flex">
          <Button variant='light'>Academics</Button>
        </li>
        <li className="hidden md:flex">
          <Button variant='light'>Admissions</Button>
        </li>
        <li className="hidden md:flex">
          <Button variant='light'>Training & Placements</Button>
        </li>
        <li className="hidden md:flex">
          <Dropdown>
            <DropdownTrigger>
              <Button variant='light'>People</Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem key="faculty" href="/people/faculty">Faculty</DropdownItem>
              <DropdownItem key="admin2">Submenu 2</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </li>
        <li className="hidden md:flex">
          <Button variant='light'>Research</Button>
        </li>
        <li className="hidden md:flex">
          <Button variant='light'>Outreach Activities</Button>
        </li>
        <li className="hidden md:flex">
          <Button variant='light'>NIRF</Button>
        </li>
        <li className="hidden md:flex">
          <Button variant='light'>Alumni</Button>
        </li>
        <li className="hidden md:flex">
          <Button variant='light'>Fee Payment</Button>
        </li>
        <li className="hidden md:flex">
          <Button variant='light'>Hostels</Button>
        </li>

        {/* For small screens */}
        <li className="md:hidden">
          <Dropdown>
            <Button size='sm' variant='light'>
              Administration
            </Button>
            <DropdownMenu>
              <DropdownItem key="admin1">Submenu 1</DropdownItem>
              <DropdownItem key="admin2">Submenu 2</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </li>
        <li className="md:hidden">
          <Button size='sm' variant='light'>Training & Placement</Button>
        </li>
        <li className="md:hidden">
          <Button size='sm' variant='light'>Results</Button>
        </li>
      </ul>
    </nav>
  );
};

export default MenuNavbar;
