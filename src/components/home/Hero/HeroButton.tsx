import { Button } from "@chakra-ui/react";
import React from "react";

function HeroButton(props: {
  children: React.ReactNode;
  colorScheme?: string;
  display?: string;
  link?: () => void;
}) {
  return (
    <>
      <Button
        as="button"
        variant="solid"
        colorScheme={props.colorScheme}
        display={props.display}
        alignItems="center"
        justifyContent="center"
        w={{ base: "full", sm: "auto" }}
        mb={{ base: 2, sm: 0 }}
        size="lg"
        cursor="pointer"
        onClick={props?.link}
      >
        {React.Children.map(props.children, (child) => {
          if (typeof child == "string") return child;
          else return null;
        })}
      </Button>
    </>
  );
}
HeroButton.displayName = "HeroButton";

export default HeroButton;
