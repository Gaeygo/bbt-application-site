import React from "react";
import {
  Flex,
  Button,
  Box,
  Text,
  Link,
  Spacer,
  textDecoration,
  Image
} from "@chakra-ui/react";
import Logo from "../images/esa.png"

const Navbar = () => {
  return (
    <Flex
      w={{base: "100%",md:"80%"}}
      h="100px"
      direction="row"
      justifyContent={{base: "space-around",md: "space-between"}}
      alignItems="center"
      margin="auto"
      fontSize={{base: "18px", md: "24px"}}
    >
      <Image w="94px" h="33px" src={Logo}  />
      <Flex
        fontWeight={400}
        w={{md: "344px"}}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        my="auto"
        ml={{md:"10%"}}
        gap={3}
        textDecoration="none"
      >
        <Link _hover={{ textDecoration: "none" }}>About us</Link>
        <Link _hover={{ textDecoration: "none" }}>Partners </Link>
        <Link _hover={{ textDecoration: "none" }}>Services</Link>
      </Flex>

      <Button
        fontWeight={500}
        variant="unstyled"
        borderRadius={0}
        w={{base: "140px",md: "200px"}}
        h={{base: "40px",md:"50px"}}
        border="1px"
        borderColor="black"
        fontSize={{base: "18px",md:"22px"}}
      >
        Contact Us
      </Button>
    </Flex>
  );
};

export default Navbar;
