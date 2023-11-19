import { chakra, useColorModeValue } from "@chakra-ui/react";
import React from "react";

function HeroText(props: { children: React.ReactNode; subtitle: string }) {
  return (
    <>
      <chakra.h1
        mb={6}
        fontSize={{ base: "4xl", md: "6xl", sm: "2xl" }}
        fontWeight="bold"
        lineHeight="none"
        letterSpacing={{ base: "normal", md: "tight" }}
        color={useColorModeValue("white", "gray.100")}
      >
        {props.children}
      </chakra.h1>
      <chakra.p
        px={{ base: 0, lg: 24 }}
        mb={6}
        fontSize={{ base: "lg", md: "xl" }}
        color={useColorModeValue("gray.200", "gray.300")}
      >
        {props.subtitle}
      </chakra.p>
    </>
  );
}

HeroText.displayName = "HeroText";

export default HeroText;
