import { Box, Text } from "@chakra-ui/react";

import * as React from "react";

function TestPage3() {
  return (
    <Box
      p="10%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Text fontSize="3xl" fontWeight="bold" textAlign="center">
        Page
      </Text>
      <Text fontSize="md" color="gray.500" textAlign="center">
        Test page.
      </Text>
    </Box>
  );
}

export default TestPage3;
