import React from "react";
import * as Scroll from "react-scroll";

var Link = Scroll.Link;
import { Button } from "@chakra-ui/react";

interface NavbarItemProps {
  children: React.ReactNode;
  colorScheme?: string;
  width?: string;
  animationDiv: string;
}

function NavbarItem(props: NavbarItemProps) {
  return (
    <Link
      as="div"
      to={props.animationDiv}
      spy={true}
      smooth={true}
      offset={50}
      duration={2000}
      href="#"
    >
      <Button
        variant="ghost"
        colorScheme={props.colorScheme}
        width={props.width}
        as="button"
      >
        {props.children}
      </Button>
    </Link>
  );
}
NavbarItem.displayName = "NavbarItem";
export default NavbarItem;
