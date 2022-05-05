import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";

const Product = ({ src, Title, desc }) => {
  return (
    <Flex gap="20px" maxW="460px" alignItems="flex-start" >
      <Image h="70px" w="70px" src={src} />
      <Flex textAlign="left" direction="column" >
        <Text lineHeight="normal" fontSize="24px" fontWeight={600} >{Title}</Text>
        <Text fontSize="16px" fontWeight={400} >{desc}</Text>
      </Flex>
    </Flex>
  );
};

export default Product;
