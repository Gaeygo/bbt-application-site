import React from "react";
import { Flex, Text, Image, Stack, Box, chakra } from "@chakra-ui/react";
import Logo from "../images/esa.png";

const Footer = () => {
  return (
    <Flex
      mx={{ base: "auto", md: "auto" }}
      mt="158px"
      mb="133px"
      w={{ base: "85%", md: "85%" }}
      direction="column"
    >
      <Flex
        fontSize="18px"
        direction={{ base: "column", md: "row" }}
        fontWeight={400}
        justify={{ base: "space-around", md: "space-between" }}
      >
        <Box mb={{ base: "145px", md: "0" }}>
          <Image mb="16px" h="33px" w="94px" src={Logo} />
          <Text textAlign="left">Helping business break threshold</Text>
        </Box>

        <Flex
          gap={{ base: "100px", md: "70px" }}
          direction={{ base: "column", md: "row" }}
          textAlign="left"
        >
          <Stack>
            <Text fontSize="24px" fontWeight={600}>
              Contact
            </Text>
            <Text>hello@esa.com</Text>
            <Text>+234 800 1234 567</Text>
          </Stack>
          <Stack>
            <Text fontSize="24px" fontWeight={600}>
              Company
            </Text>
            <Text>Team</Text>
            <Text>About</Text>
            <Text>Partners</Text>
            <Text>Services</Text>
          </Stack>{" "}
          <Stack>
            <Text fontSize="24px" fontWeight={600}>
              Legal
            </Text>
            <Text>Privacy Policy</Text>
            <Text>Terms of use</Text>
            <Text>Cookie Policy</Text>
          </Stack>
        </Flex>
      </Flex>
      <Flex
        fontSize="20px"
        fontWeight={400}
        textAlign="left"
        justify={{ base: "space-around", md: "space-between" }}
        direction="column"
      >
        <Text fontSize="24px" fontWeight={600}>
          Contact
        </Text>
        <Text>No 42, Awolowo Road, Ikoyi, Lagos.</Text>
        <Text>hello@esa.com</Text>
      </Flex>
      <Flex
        mt="100px"
        gap="20px"
        fontSize="20px"
        fontWeight={400}
        textAlign="left"
        justify={{ base: "space-around", md: "space-between" }}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Text mt={{ base: "60px", md: "0" }}>
          <chakra.span fontWeight={500}>ESA 2022.</chakra.span> All rights
          reserved
        </Text>
        <Stack direction={{ base: "column", md: "row" }}>
          <Text>Twitter</Text>
          <Text>Facebook</Text>
          <Text>Instagram</Text>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Footer;
