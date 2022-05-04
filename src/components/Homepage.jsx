import React from "react";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

const Homepage = () => {
  return (
    <Flex justify="space-between" w="80%" mx="auto" mt="31px">
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
      <Flex textAlign="left" direction="column" w="51%">
        <Text fontSize="48px" fontWeight={500} >Start using the cloud for your business today</Text>
        <Text mt="10px" mb="20px" fontSize="20px" fontWeight={400}>ESA is a department under the BBT Enterprise a company that is blah blah blah </Text>
        <Flex w="70%" direction="row" align="center">
          <Button w="400px" h="45px" borderRadius="4px" backgroundColor="#04538B" textColor=" #FDFCFC" variant="unstyled">Learn More</Button>
          <Button w="400px" h="45px" borderRadius="4px" backgroundColor="white" variant="unstyled">Visit BBT's Site</Button>

        </Flex>
      </Flex>
    </Flex>
  );
};

export default Homepage;
