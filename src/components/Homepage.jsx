import React from "react";
import { Flex, Box, Text, Button, Stack } from "@chakra-ui/react";
import Sponsors from "./Sponsors";
import Product from "./Product";
import cloud from "../images/cloud.svg";

const Homepage = () => {
  return (
    <>
      <Flex justify="space-between" w="85%" mx="auto" mt="31px">
        <Box border="2px solid #04538B" borderRadius="5px">
          <Box
            borderRadius="5px"
            w="400px"
            h="378px"
            backgroundColor="#04538B"
            position="relative"
            left="20px"
            top="10px"
          ></Box>
        </Box>
        <Flex
          h="fit-content"
          textAlign="left"
          my="auto"
          direction="column"
          w="51%"
        >
          <Text fontSize="48px" fontWeight={500}>
            Start using the cloud for your business today
          </Text>
          <Text mt="10px" mb="22px" fontSize="20px" fontWeight={400}>
            ESA is a department under the BBT Enterprise a company that is blah
            blah blah{" "}
          </Text>
          <Flex w="70%" direction="row">
            <Button
              w="400px"
              h="45px"
              borderRadius="4px"
              backgroundColor="#04538B"
              textColor=" #FDFCFC"
              variant="unstyled"
              _hover={{
                backgroundColor: " #FDFCFC",
                textColor: "#04538B",
                border: "1px solid #04538B ",
              }}
            >
              Learn More
            </Button>
            <Button
              w="400px"
              h="45px"
              borderRadius="4px"
              backgroundColor="white"
              variant="unstyled"
            >
              Visit BBT's Site
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Sponsors />
      <Stack mt="200px" w="85%" mx="auto">
        <Text fontSize="28px" fontWeight={600} textAlign="center">
          Providing essential tools & sevices for your business{" "}
        </Text>
        <Text fontSize="18px" fontWeight={500} textAlign="center">
          We Provide a wide array of services targetted at business owners to
          efficiently carry out their day to day activities without stress and
          wahala .
        </Text>
      </Stack>
      <Flex
        mt="120px"
        w="85%"
        gap="60px"
        mx="auto"
        flexWrap="wrap"
        alignItems="center"
        justify="center"
      >
        <Product
          src={cloud}
          Title="Cloud Computing"
          desc="We use Machine Learning to generate analytics while pooling resources , managing containers without compromising on security"
        />
        <Product
          src={cloud}
          Title="Cloud Computing"
          desc="We use Machine Learning to generate analytics while pooling resources , managing containers without compromising on security"
        />
        <Product
          src={cloud}
          Title="Cloud Computing"
          desc="We use Machine Learning to generate analytics while pooling resources , managing containers without compromising on security"
        />
        <Product
          src={cloud}
          Title="Cloud Computing"
          desc="We use Machine Learning to generate analytics while pooling resources , managing containers without compromising on security"
        />
        <Product
          src={cloud}
          Title="Cloud Computing"
          desc="We use Machine Learning to generate analytics while pooling resources , managing containers without compromising on security"
        />
      </Flex>
    </>
  );
};

export default Homepage;
