import React from "react";

import { Box, Text } from "@chakra-ui/react";

import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useFirebase } from "@/firebase/firebaseContext";

import {
  Navbar,
  NavbarButton,
  NavbarItem,
  NavbarLogo,
} from "../components/home/Navbar/index";

// prettier-ignore
import { 
  Hero, 
  HeroText, 
  HeroImage, 
  HeroButton 
} from "../components/home/Hero";

import { Footer, FooterFinalText } from "../components/home/Footer";

import { Schedule } from "../components/home/schedule/schedule";
import { WhyComponent } from "../components/home/whyComponent/whyComponent";
import { Sponsors } from "../components/home/sponsors/sponsors";
import { LogoObject } from "../config/metaConfigs";

export default function Swibc() {
  const router = useRouter();
  const { functions, auth } = useFirebase();

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/logged/testPage1");
      }
    });
  });

  return (
    <>
      <Navbar>
        <NavbarLogo ml={6}>
          <Text fontWeight={500}>Model Website</Text>
        </NavbarLogo>
        <NavbarItem animationDiv="start">Start</NavbarItem>
        <NavbarItem animationDiv="item1">Item 1</NavbarItem>

        <NavbarButton
          actionButtonClick={() => {
            functions.signIn();
          }}
        >
          Subscribe
        </NavbarButton>
        <NavbarButton
          actionButtonClick={() => {
            functions.signIn();
          }}
        >
          Login
        </NavbarButton>
      </Navbar>

      <div id="start" />

      <Hero backgroundImageLink={LogoObject.heroImagePath} vh="90vh">
        <HeroText subtitle="Hero subtitle. Write something worth it.">
          Hero Title
        </HeroText>
        <HeroImage src={LogoObject.imagePath} />
        <HeroButton
          link={() => {
            router.push("/");
          }}
          colorScheme="gray"
        >
          Hero Button
        </HeroButton>
        <HeroButton colorScheme="orange" link={functions.signIn}>
          Login
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </HeroButton>
      </Hero>

      <WhyComponent />
      <div id="item1" />
      <Schedule />
      <Box mt="100px" />
      <Sponsors />

      <Footer>
        <FooterFinalText>All rights reserved. Lucas Tejedor.</FooterFinalText>
      </Footer>
    </>
  );
}
