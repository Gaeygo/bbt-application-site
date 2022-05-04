import React from "react";
import { Flex, Image, Grid } from "@chakra-ui/react";
import aws from "../images/aws.png";
import cisco from "../images/cisco.png";
import huawei from "../images/huawei.png";
import ibm from "../images/ibm.png";
import microsoft from "../images/microsoft.png";

const Sponsors = () => {
  return (
    <Flex
      direction="row"
      flexWrap="wrap"
      width={"80%"}
      mx="auto"
      justify="space-around"
      align="center"
      mt="170px"

    >
      <Image
        src={aws}
        w={{base: "75px",md:"107px"}}
        h={{base: "44px",md:"64px"}}
        filter="grayscale(100%)"
        _hover={{ filter: "grayscale(0%)" }}
      />
      <Image
        filter="grayscale(100%)"
        _hover={{ filter: "grayscale(0%)" }}
        src={cisco}
        w={{base: "87px",md:"165px"}}
        h={{base: "45px",md:"87px"}}
      />
      <Image
        filter="grayscale(100%)"
        _hover={{ filter: "grayscale(0%)" }}
        src={ibm}
        w={{base: "131px",md:"178px"}}
        h={{base: "47px",md:"64px"}}
      />
      <Image
        filter="grayscale(100%)"
        _hover={{ filter: "grayscale(0%)" }}
        src={microsoft}
        w={{base:"168px",md:"303px"}}
        h={{base: "75px",md:"152px"}}

      />
      <Image
        filter="grayscale(100%)"
        _hover={{ filter: "grayscale(0%)" }}
        src={huawei}
        w={{base: "149px",md:"260px"}}
        h={{base: "40px",md:"60px"}}
      />
    </Flex>
    // <Grid
    //  templateColumns={{base:"repeat(3, auto)",md:"repeat(5,auto)"}}
    // //  gridAutoFlow="column"
    //   width={"80%"}
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
