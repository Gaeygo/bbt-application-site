import React from "react";
import { Flex, Text, chakra,Link } from "@chakra-ui/react";

const _404 = () => {
  return (
    <Flex mt="225px" direction="column">
      <Text fontSize="128px" fontWeight={600} textColor="#141313" letterSpacing={-12.5} >404</Text>
      <Text fontSize="48px" fontWeight={600}>Not suppose to be here</Text>
      <Text mx="auto" w="65%" fontSize="24px" fontWeight={500}>
        Oops the page you are looking for doesn’t exist. Find your way to the
        
        <chakra.span textColor="#04538B" ><Link> homepage</Link></chakra.span>
      </Text>
    </Flex>
  );
};

export default _404;
