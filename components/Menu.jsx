import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Link, Flex, Spacer } from "@chakra-ui/react";

function Menu() {
  return (
    <Flex as="nav" bg="blue.500" p="4" color="white" >
      <Box>
        <Link as={RouterLink} to="/" mr="4">
          Home
        </Link>
        <Link as={RouterLink} to="/tareas" mr="4">
          Tareas
        </Link>
        <Link as={RouterLink} to="/sobre-nosotros">
          Sobre Nosotros
        </Link>
        
      </Box>
      <Spacer />
    </Flex>
  );
}

export default Menu;
