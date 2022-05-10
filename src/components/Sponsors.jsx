import React from "react";
import { Flex, Image, Grid, Text } from "@chakra-ui/react";
import aws from "../images/aws.png";
import cisco from "../images/cisco.png";
import huawei from "../images/huawei.png";
import ibm from "../images/ibm.png";
import microsoft from "../images/microsoft.png";
import { motion } from "framer-motion";

const Sponsors = () => {
  return (
    <>
      <Text id="partners"
        mt={{base: "100px",md: "170px"}}
        fontSize={{base: "16px",md:"24px"}}
        fontWeight={500}
        w="85%"
        mx="auto"
        textAlign="left"
        mb={{base: "20px", md: "0"}}
      >
        Our Partners
      </Text>
      <Flex
        direction="row"
        flexWrap="wrap"
        width={"85%"}
        mx="auto"
        justify="space-around"
        align="center"
      >
        <Image
          as={motion.img}
          src={aws}
          w={{ base: "75px", md: "107px" }}
          h={{ base: "44px", md: "64px" }}
          filter="grayscale(100%)"
          _hover={{ filter: "grayscale(0%)" }}
          whileTap={{ scale: 1.1 }}
        />
        <Image
          as={motion.img}
          filter="grayscale(100%)"
          _hover={{ filter: "grayscale(0%)" }}
          src={cisco}
          w={{ base: "87px", md: "165px" }}
          h={{ base: "45px", md: "87px" }}
          whileTap={{ scale: 1.1 }}
        />
        <Image
          as={motion.img}
          filter="grayscale(100%)"
          _hover={{ filter: "grayscale(0%)" }}
          src={ibm}
          w={{ base: "131px", md: "178px" }}
          h={{ base: "47px", md: "64px" }}
          whileTap={{ scale: 1.1 }}
        />
        <Image
          as={motion.img}
          filter="grayscale(100%)"
          _hover={{ filter: "grayscale(0%)" }}
          src={microsoft}
          w={{ base: "168px", md: "303px" }}
          h={{ base: "75px", md: "152px" }}
          whileTap={{ scale: 1.1 }}
        />
        <Image
          as={motion.img}
          filter="grayscale(100%)"
          _hover={{ filter: "grayscale(0%)" }}
          src={huawei}
          w={{ base: "149px", md: "260px" }}
          h={{ base: "40px", md: "60px" }}
          whileTap={{ scale: 1.1 }}
        />
      </Flex>
    </>
    // <Grid
    //  templateColumns={{base:"repeat(3, auto)",md:"repeat(5,auto)"}}
    // //  gridAutoFlow="column"
    //   width={"85%"}
    //   mx="auto"
    //   mt="200px"
    //   justifyContent={{md:"space-between"}}
    //   alignItems={"center"}
    // >
    //   <Image
    //     src={aws}
    //     w="107px"
    //     h="64px"
    //     filter="grayscale(100%)"
    //     _hover={{ filter: "grayscale(0%)" }}
    //   />
    //   <Image
    //     filter="grayscale(100%)"
    //     _hover={{ filter: "grayscale(0%)" }}
    //     src={cisco}
    //     w="165px"
    //     h="87px"
    //   />
    //   <Image
    //     filter="grayscale(100%)"
    //     _hover={{ filter: "grayscale(0%)" }}
    //     src={ibm}
    //     w="178px"
    //     h="64px"
    //   />
    //   <Image
    //     filter="grayscale(100%)"
    //     _hover={{ filter: "grayscale(0%)" }}
    //     src={microsoft}
    //     w="303px"
    //     h="152px"
    //     grid
    //   />
    //   <Image
    //     filter="grayscale(100%)"
    //     _hover={{ filter: "grayscale(0%)" }}
    //     src={huawei}
    //     w="260px"
    //     h="60px"
    //   />
    // </Grid>
  );
};

export default Sponsors;
