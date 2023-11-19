import { Box, Text } from "@chakra-ui/react";
import { useFirebase } from "../../firebase/firebaseContext";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";

import * as React from "react";

function Logout() {
  const router = useRouter();
  const { functions, auth } = useFirebase();

  React.useEffect(() => {
    functions.signOut();
  }, []);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/");
      }
    });
  }, []);

  return (
    <Box
      p="10%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Text fontSize="3xl" fontWeight="bold">
        Logging Out...
      </Text>
      <Text fontSize="md" color="gray.500" textAlign="center">
        Please, wait a little bit.
      </Text>
    </Box>
  );
}

export default Logout;
