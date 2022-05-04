import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import aws from "../images/aws.png";
import cisco from "../images/cisco.png";
import huawei from "../images/huawei.png";
import ibm from "../images/ibm.png";
import microsoft from "../images/microsoft.png";

const Sponsors = () => {
  return (
    <Flex direction="row" width="80%" mx="auto" justify="space-around" align="center">
      <Image src={aws} w="107px" h="64px" />
      <Image src={cisco} w="165px" h="87px" />
      <Image src={ibm} w="178px" h="64px" />
      <Image src={microsoft} w="303px" h="152px" />
      <Image src={huawei} w="260px" h="60px" />
    </Flex>
  );
};

export default Sponsors;
