import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button, Image } from "@nextui-org/react";
import { navbarData } from "../utils/data";
import ToothIcon from "./icons/Tooth";

export default function NavbarC() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar
            className="border-b border-gray-200 shadow-sm py-2"
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            maxWidth="xl"
        >

            <NavbarContent className="gap-4" justify="start">
                <NavbarBrand>
                    <Link href="/" color="foreground" className="flex items-center gap-2">
                        <Image src="logo-2.webp" className="w-8 h-8" alt="logo"/>
                        <span>Angela Villamizar</span>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="end">
                {
                    navbarData.map((item) => (
                        <NavbarItem key={item.title}>
                            <Link className="font-normal text-primary-900 hover:text-primary-400" href={item.href}>{item.title}</Link>
                        </NavbarItem>
                    ))
                }
            </NavbarContent>

            <NavbarContent className="sm:hidden" justify="end">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarMenu className="flex flex-col items-center pt-16" onClick={() => setIsMenuOpen(false)}>
                {
                    navbarData.map((item) => (
                        <NavbarMenuItem key={item.title} className="w-52">
                            <Button 
                                as={Link} 
                                href={item.href} 
                                variant="ghost" 
                                color="primary" 
                                className="w-full justify-between"
                                startContent={<ToothIcon />}
                                endContent={<ToothIcon />}
                            >
                                {item.title}
                            </Button>
                        </NavbarMenuItem>
                    ))
                }
            </NavbarMenu>
        </Navbar>
    );
}
