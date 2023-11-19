import React from "react";
import { Box, Stack } from "@chakra-ui/react";

const Hero = (props: {
  children: any;
  backgroundImageLink: string;
  backgroundColor?: string;
  vh: string;
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${props.backgroundImageLink})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: `${props.backgroundColor}`,
      }}
    >
      <Box
        px={8}
        py={24}
        mx="auto"
        bg={props.backgroundColor}
        mt={0}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height={props.vh}
      >
        {React.Children.map(props.children, (child) => {
          if (child.type.displayName == "HeroImage") {
            return child;
          }
        })}

        <Box
          w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
          mx="auto"
          textAlign={{ base: "center", md: "center" }}
          alignItems={{ base: "center" }}
          justifyContent={{ base: "center" }}
        >
          {React.Children.map(props.children, (child) => {
            if (child.type.displayName == "HeroText") return child;
          })}

          <Stack
            direction={{ base: "column", sm: "row" }}
            mb={{ base: 4, md: 8 }}
            spacing={2}
            justifyContent={{ sm: "center", md: "center" }}
          >
            {React.Children.map(props.children, (child) => {
              if (
                child.type.displayName == "HeroButton" ||
                child.type.displayName == "Link"
              )
                return child;
            })}
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default Hero;
