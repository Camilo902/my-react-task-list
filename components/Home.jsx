import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function Home() {
  return (
    <Box
      className="container"
      textAlign="center"
      maxW="600px"
      m="20px auto"
      p="20px"
      borderRadius="8px"
      boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
      bg="white"
      color="gray.700" 
    >
      <Heading as="h1" size="xl" mb="4" color="blue.500"> 
        Bienvenido a Task List
      </Heading>
      <Text fontSize="lg">
        Organiza tu vida con nuestras increíbles funciones de gestión de tareas.
      </Text>
    </Box>
  );
}

export default Home;
