/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button
} from "@nextui-org/react";

import '../output.css'

export default function MCNavbar() {
    return (
        <Navbar isBordered maxWidth="full">
            <NavbarBrand>
                <Link color="foreground" href="/">
                    <p className="font-bold text-inherit">MattCraft</p>
                </Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/features">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link color="foreground" href="/rules" aria-current="page">
                        Rules
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/installation">
                        Installation
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/faq">
                        FAQ
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color="primary" href="/map" variant="flat">
                        View World Map
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}