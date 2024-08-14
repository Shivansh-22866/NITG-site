import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Input} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import { FaSearch, FaChevronDown  } from "react-icons/fa";

export default function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
        <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen} className="sm:bg-white bg-blue-600 py-2 sm:h-[150px]">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <img src="/NITG-logo.png"/>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem className="flex flex-row gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-4">
                  <Link aria-current="page" href="#">
                  Home
                </Link>
                <Link href="#" color="foreground">
                  Tenders
                </Link>
                <Link color="foreground" href="#">
                  G.I.A.N
                </Link>
                <Link color="foreground" href="#">
                  Rajsabha
                </Link>
                <Link color="foreground" href="#">
                  Webmail
                </Link>
              </div>
              <div className="flex flex-row gap-2">
                <Input placeholder="Search..." startContent={
                  <FaSearch/>
                }/>
                <Dropdown>
                  <DropdownTrigger>
                    <Button 
                      variant="bordered" 
                    >
                      English
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu 
                    aria-label="Action event example" 
                    onAction={(key) => alert(key)}
                  >
                    <DropdownItem key="Language changed to Hindi">Hindi</DropdownItem>
                    <DropdownItem key="Language changed to English">English</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </NavbarItem>
        </NavbarContent>

        {/* <NavbarContent className="flex flex-col items-center sm:hidden">
        <Link className="text-sm text-white">GIAN</Link>
        </NavbarContent> */}

        {/* <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent> */}
        <NavbarMenu className="mt-4">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
  );
}
