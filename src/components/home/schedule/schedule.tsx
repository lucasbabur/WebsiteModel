"use client";

import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
} from "@chakra-ui/react";

import { BsCalendar2Date } from "react-icons/bs";

interface FeatureProps {
  heading: string;
  text: string;
}

const Feature = ({ heading, text }: FeatureProps) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="xl" fontWeight="600">
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
  );
};

export function Schedule() {
  return (
    <Box as={Container} maxW="4xl" mt={14} p={4}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
      >
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="20px">
            <Flex display="flex">
              <chakra.h2 fontSize="3xl" fontWeight="700" mr={3}>
                Schedule
              </chakra.h2>
              <BsCalendar2Date size={30} style={{ marginTop: "3px" }} />
            </Flex>
          </VStack>
        </GridItem>
      </Grid>
      <Divider mt={6} mb={6} />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        }}
        gap={{ base: "8", sm: "12", md: "16" }}
      >
        <Feature heading={"1th of November"} text={"Test"} />
        <Feature
          heading={"19th of November"}
          text={"Finish of the first phase."}
        />
        <Feature
          heading={"20th of November"}
          text={"Start of the second phase."}
        />
        <Feature
          heading={"21th of November"}
          text={"Finish of the second phase."}
        />
      </Grid>
    </Box>
  );
}
