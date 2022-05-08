import React from "react";
import { motion } from "framer-motion";
import {
  Flex,
  Box,
  Text,
  Link,
  Spacer,
  textDecoration,
  Button,
  Image,
  chakra,
} from "@chakra-ui/react";
import Logo from "../images/esa.png";
import {
  Link as reactLink,
  useLocation,
  useNavigate,
  NavLink,
} from "react-router-dom";

const Navbar = ({ aboutRef, serviceRef, partnerRef }) => {
  const scrollToElement = (inputRef) => {};
  const navigate = useNavigate()
  const location = useLocation()

  const handleNav = (path) => {
    // if(location.pathname === path) return
    navigate(path)
  }
  return (
    <Flex
      as={motion.div}
      w={{ base: "85%", md: "85%" }}
      h="100px"
      direction="row"
      justifyContent={{ base: "space-between", md: "space-between" }}
      alignItems="center"
      margin="auto"
      fontSize={{ base: "18px", md: "24px" }}
    >
      <Image onClick={() => handleNav("/")} w="94px" h="33px" src={Logo} />
      <Flex
        fontWeight={400}
        w={{ md: "344px" }}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        my="auto"
        ml={{ md: "10%" }}
        gap={3}
        textDecoration="none"
        display={{ base: "none", md: "flex" }}
      >
        <Link onClick={scrollToElement} _hover={{ textDecoration: "none" }}>
          About us
        </Link>
        <Link _hover={{ textDecoration: "none" }}>Partners </Link>
        <Link _hover={{ textDecoration: "none" }}>Services</Link>
      </Flex>

      <Button
        as={motion.button}
        fontWeight={500}
        variant="unstyled"
        borderRadius={0}
        w={{ base: "140px", md: "200px" }}
        h={{ base: "40px", md: "50px" }}
        border="1px"
        borderColor="black"
        fontSize={{ base: "18px", md: "22px" }}
        _hover={{
          scale: 1.1,
          backgroundColor: "black",
          textColor: "#FDFCFC",
        }}
        whileHover={{
          scale: 1.1,
        }}
        onClick={() => handleNav("/contact")}
        
      >
        Contact Us
      </Button>
    </Flex>
  );
};

export default Navbar;
