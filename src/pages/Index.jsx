import React, { useState } from "react";
import { Box, Container, Heading, Text, VStack, Input, Button, useToast } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const [url, setUrl] = useState("");
  const toast = useToast();

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = () => {
    if (!url) {
      toast({
        title: "Error",
        description: "Please enter a URL to monitor.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: `Monitoring has started for ${url}`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      // Implement actual monitoring logic here
    }
  };

  return (
    <Container maxW="container.md" py={5}>
      <VStack spacing={4} align="stretch">
        <Box>
          <Heading as="h1" size="xl" textAlign="center">
            Website Change Monitor
          </Heading>
          <Text mt={2} textAlign="center">
            Enter a website URL below to start monitoring for changes.
          </Text>
        </Box>
        <Box>
          <Input placeholder="Enter website URL" value={url} onChange={handleUrlChange} />
        </Box>
        <Button leftIcon={<FaSearch />} colorScheme="teal" onClick={handleSubmit}>
          Start Monitoring
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
