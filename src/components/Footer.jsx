import React from "react";
import { Flex, Text, Image, Stack, Box } from "@chakra-ui/react";
import Logo from "../images/esa.png";

const Footer = () => {
  return (
    <Flex mx={{md:"auto" }}mt="158px" mb="133px" w={{base: "100%",md:"80%"}} direction="column">
      <Flex fontSize="18px" fontWeight={400}  justify={{base: "space-around",md:"space-between"}}>
        <Box>
          <Image mb="16px" h="33px" w="94px" src={Logo} />
          <Text textAlign="left" >Helping business break threshold</Text>
        </Box>
        <Flex gap={{md:"70px"}} textAlign="left">
          <Stack>
            <Text fontSize="24px" fontWeight={600}>
              Contact
            </Text>
            <Text>hello@esa.com</Text>
            <Text>+234 800 1234 567</Text>
          </Stack>
          <Stack>
            <Text fontSize="24px" fontWeight={600}>
              Contact
            </Text>
            <Text>hello@esa.com</Text>
            <Text>+234 800 1234 567</Text>
          </Stack>{" "}
          <Stack>
            <Text fontSize="24px" fontWeight={600}>
              Contact
            </Text>
            <Text>hello@esa.com</Text>
            <Text>+234 800 1234 567</Text>
          </Stack>
        </Flex>
      </Flex>
      <Flex justify={{base: "space-around",md:"space-between"}} mt="260px">
        <Text>ESA 2022. All rights reserved</Text>
        <Stack direction="row">
          <Text>Twitter</Text>
          <Text>Facebook</Text>
          <Text>Instagram</Text>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Footer;
