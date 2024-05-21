import { Container, Text, VStack, Heading, Box, Input, Button, List, ListItem, Flex } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [attendees, setAttendees] = useState([]);
  const [name, setName] = useState("");

  const addAttendee = () => {
    if (name.trim() !== "") {
      setAttendees([...attendees, name]);
      setName("");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="2xl">Event Attendee Tracker</Heading>
        <Box width="100%">
          <Flex>
            <Input 
              placeholder="Enter attendee name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              mr={2}
            />
            <Button onClick={addAttendee} colorScheme="teal">Add Attendee</Button>
          </Flex>
        </Box>
        <Box width="100%">
          <Heading as="h2" size="lg" mt={6} mb={4}>Attendees</Heading>
          <List spacing={3}>
            {attendees.map((attendee, index) => (
              <ListItem key={index} p={2} borderWidth="1px" borderRadius="md">
                {attendee}
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;