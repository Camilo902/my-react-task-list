import React from "react";
import { Box, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import { StarIcon, } from "@chakra-ui/icons";

function SobreNosotros() {
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
        Acerca de Task List
      </Heading>
      <Text fontSize="lg" mb="4">
        Task List es una aplicación diseñada para ayudarte a organizar y gestionar tus tareas diarias de manera eficiente.
      </Text>
      <UnorderedList textAlign="left" mb="4" listStyleType="none" pl="0">
        <ListItem mb="2">
          <Text fontSize="lg" ml="4">
            <StarIcon color="green.500" mr="2" /> 
            Registro y gestión de tareas diarias.
          </Text>
        </ListItem>
        <ListItem mb="2">
          <Text fontSize="lg" ml="4">
            <StarIcon color="green.500" mr="2" /> 
            Edición y eliminación de tareas según sea necesario.
          </Text>
        </ListItem>
        <ListItem mb="2">
          <Text fontSize="lg" ml="4">
            <StarIcon color="green.500" mr="2" />
            Validación de formularios para garantizar información adecuada.
          </Text>
        </ListItem>
        <ListItem mb="2">
          <Text fontSize="lg" ml="4">
            <StarIcon color="green.500" mr="2" />
            Orden y filtrado de tareas para una organización personalizada.
          </Text>
        </ListItem>
        <ListItem mb="2">
          <Text fontSize="lg" ml="4">
            <StarIcon color="green.500" mr="2" />
            Persistencia de datos utilizando localStorage para recordar tus tareas.
          </Text>
        </ListItem>
      </UnorderedList>
      <Text fontSize="lg" mb="4">
        Hemos desarrollado Task List utilizando tecnologías modernas, incluyendo React y React Router para una interfaz de usuario dinámica y una navegación eficiente entre páginas. La gestión del estado y la lógica de la aplicación se realiza con la ayuda de Hooks personalizados para un código limpio y modular.
        Además, hemos integrado Chakra UI para un estilo consistente y atractivo.
      </Text>
      <Text fontSize="lg" mb="4">
        ¡Esperamos que Task List sea la herramienta perfecta para mejorar tu productividad y mantenerte organizado!
      </Text>
    </Box>
  );
}

export default SobreNosotros;
