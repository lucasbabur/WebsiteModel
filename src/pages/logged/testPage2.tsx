import { Box, Text } from "@chakra-ui/react";

import * as React from "react";

function TestPage2() {
  return (
    <Box
      p="10%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Text fontSize="3xl" fontWeight="bold" textAlign="center">
        Another page
      </Text>
      <Text fontSize="md" color="gray.500" textAlign="center">
        Results will be shown here.
      </Text>
    </Box>
  );
}

export default TestPage2;
