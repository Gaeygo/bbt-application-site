import React from "react";
import {
  Flex,
  Box,
  Text,
  Button,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import Sponsors from "./Sponsors";
import Product from "./Product";
import cloud from "../images/cloud.svg";
import data from "../images/data.svg";
import api from "../images/api.svg";
import sharepoint from "../images/sharepoint.svg";
import devops from "../images/devops.svg";
import { transform } from "framer-motion";

const Homepage = () => {
  return (
    <>
      <Flex
        direction={{ base: "column", lg: "row" }}
        justify="space-between"
        w="85%"
        mx="auto"
        mt="31px"
        gap="30px"
      >
        <Box
          w={{ lg: "390px" }}
          maxW={{ base: "350px", lg: "490px" }}
          h={{ base: "350px", lg: "378px" }}
          border="2px solid #04538B"
          borderRadius="5px"
        >
          <Box
            borderRadius="5px"
            w={{ lg: "390px" }}
            maxW={{ base: "350px", lg: "490px" }}
            h={{ base: "350px", lg: "398px" }}
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
          w={{ base: "100%", md: "51%" }}
        >
          <Text
            mt={{ base: "32px", md: "0" }}
            fontSize={{ base: "32px", md: "48px" }}
            fontWeight={500}
          >
            Start using the cloud for your business today
          </Text>
          <Text
            mt="10px"
            mb={{ base: "50px", md: "22px" }}
            fontSize={{ base: "14px", md: "20px" }}
            fontWeight={400}
          >
            ESA is a department under the BBT Enterprise a company that is blah
            blah blah{" "}
          </Text>
          <Flex
            gap={{ base: "20px", md: "0" }}
            w="70%"
            direction="row"
            mb={{ base: "60px", md: "0" }}
          >
            <Button
              w={{ base: "170px", md: "400px" }}
              h="45px"
              borderRadius="4px"
              backgroundColor="#04538B"
              fontSize={{ base: "14px", md: "16px" }}
              textColor=" #FDFCFC"
              variant="unstyled"
              _hover={{
                backgroundColor: " #FDFCFC",
                textColor: "#04538B",
                border: "1px solid #04538B ",
              }}
              _active={{
                border: "none",
                transform: "scale(1.1)",
              }}
              _focus={{
                border: "none",
              }}
            >
              Learn More
            </Button>
            <Button
              w={{ base: "170px", md: "400px" }}
              h="45px"
              borderRadius="4px"
              backgroundColor="white"
              fontSize={{ base: "14px", md: "16px" }}
              variant="unstyled"
              _active={{
                borderColor: "none",
                transform: "scale(1.1)",
              }}
              _focus={{
                border: "none",
              }}
              onClick={() => window.open("http://blueprintnet.com/", "_blank")}
            >
              Visit BBT's Site
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Sponsors />
      <Stack mt="150px" w="85%" mx="auto">
        <Text
          fontSize={{ base: "22px", md: "28px" }}
          fontWeight={600}
          textAlign="center"
        >
          Providing essential tools & sevices for your business{" "}
        </Text>
        <Text
          fontSize={{ base: "16px", md: "18px" }}
          fontWeight={500}
          textAlign="center"
        >
          We Provide a wide array of services targetted at business owners to
          efficiently carry out their day to day activities without stress and
          wahala .
        </Text>
      </Stack>
      <Flex
        mt="120px"
        w="85%"
        gap={{ base: "120px", md: "150px" }}
        mx="auto"
        flexWrap="wrap"
        // alignItems="center"
        justify="center"
      >
        <Product
          src={cloud}
          Title="Cloud Computing"
          desc="Services like On-demand Self-service,
          Security Governance,
          Resource pooling,
          Analytics,
          Machine learning,
          Migration and
          Containers.
          "
        />
        <Product
          src={api}
          Title="API Integration & Management"
          desc="Services like Authentication, Authorization,lifecycle, management and version management, consumption management, analytics and self service"
        />
        <Product
          src={devops}
          Title="Devops"
          desc="Devops engineering, Migration of workloads, Disaster Recovery & Backup, Serverless applications, Cloud native solutions ati be be lo"
        />
        <Product
          src={data}
          Title="Data & Application"
          desc="Software Development, Frontend Development, Mobile Application Development, Unit testing, Data Analysis, Data Migration & Machine Learning"
        />
        <Product
          src={sharepoint}
          Title="Sharepoint"
          desc="Document management and collaboration, Site creation, Regulatory compliance, Data Security, Business process automation & Building custom apps"
        />
      </Flex>
      <Flex w="100%" backgroundColor="black" minH="500px" mt="245px">
        <Flex
          align="center"
          justify="center"
          w="85%"
          mx="auto"
          direction={{ base: "column", lg: "row" }}
        >
          <Stack textAlign="left" textColor="white">
            <Text w={{base:"100%",md:"65%"}} textColor="#F6E9E9" fontSize={{base: "26px",md:"32px"}} fontWeight={500} mb={{base: "45px",lg: "0"}} >
              We Provide Quality & Efficient Solutions for Businesses
            </Text>
            <Text mb={{base: "25px", md: "25px",lg: "0"}} fontWeight={400} fontSize="18px">
              Some frequently asked questions{" "}
            </Text>
          </Stack>
          <Accordion mt={{base: "50px", md: "0"}} w={{base: "100%",lg:"55%"}} textColor="white" allowMultiple>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <AccordionButton _focus={{outline: "none"}}>
                    <Box
                      fontSize={{base:"16px",md:"20px"}}
                      fontWeight={500}
                      flex="1"
                      textAlign="left"
                    >
                      Which Cloud Services Do you work with
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                  <AccordionPanel textAlign="left" pb={4} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <AccordionButton  _focus={{outline: "none"}}>
                    <Box
                      fontSize={{base:"16px",md:"20px"}}
                      fontWeight={500}
                      flex="1"
                      textAlign="left"
                    >
                      Which Programming Languages you work with
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                  <AccordionPanel textAlign="left" pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </Flex>
      </Flex>
    </>
  );
};

export default Homepage;
