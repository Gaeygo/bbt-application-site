import React from "react";
import { Flex, Stack, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Flex pl={{base: "10%",md:"90px"}} py={{base: "20%",md: "0"}} gap="25px" textAlign="left" my="auto" justify="center" borderRadius="28px" mt="100px" h={{md: "500px"}} direction="column" mx="auto" textColor="#FDFCFC" fontSize="22px" w="85%" backgroundColor="#04538B" >
      <Stack>
        <Text fontSize="26px" >Contact Us</Text>
        <Text fontSize="36px" fontWeight={600} >Talk to Us Today</Text>
      </Stack>
      <Stack>
        <Text w={{base: "75%",md:"55%"}}>
          We help businesses break thresholds. Contact us today if you want to
          do the same
        </Text>
      </Stack>{" "}
      <Stack>
        <Text onClick={() => window.location = 'mailto:yourmail@gmail.com'} >hello@esa.com</Text>
        <Text>0800 100 2345</Text>
      </Stack>
    </Flex>
  );
};

export default Contact;
