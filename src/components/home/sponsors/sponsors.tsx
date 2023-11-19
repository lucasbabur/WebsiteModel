"use client";

import { Box, Container, Flex, Heading, Stack } from "@chakra-ui/react";

interface CardProps {
  src: string;
  alt: string;
}

const Card = ({ src, alt }: CardProps) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <img src={src} alt={alt} />
    </Box>
  );
};

export function Sponsors() {
  return (
    <Box p={4} bg={"gray.800"}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading
          fontSize={{ base: "2xl", sm: "4xl" }}
          fontWeight={"bold"}
          mt={8}
        >
          Patrocinadores
        </Heading>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card src="./static/images/SampleSVG.svg" alt="TestLogo1" />
          <Card src="./static/images/SampleSVG.svg" alt="TestLogo1" />
          <Card src="./static/images/SampleSVG.svg" alt="TestLogo1" />
          <Card src="./static/images/SampleSVG.svg" alt="TestLogo1" />
          <Card src="./static/images/SampleSVG.svg" alt="TestLogo1" />
        </Flex>
      </Container>
    </Box>
  );
}
