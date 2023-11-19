import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function HeroImage(props: { src: string }) {
  return (
    <Flex
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      mb={5}
      mt={-5}
    >
      <Image width="200" height="200" src={props.src} alt="logo" />
    </Flex>
  );
}
HeroImage.displayName = "HeroImage";

export default HeroImage;
