import React from 'react';
import {
  Container,
  Box,
  VStack,
  Input,
  Button,
  Heading,
  FormControl,
  FormLabel,
  Text,
  Link,
} from '@chakra-ui/react';

const SignUp = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" maxW={{ base: "95%", md: "85%", lg: "75%" }}>
      <VStack spacing={4} margin="5" padding="5" maxW={{ base: "95%", md: "85%", lg: "75%" }}>
        <Heading>Create an Account</Heading>
        <FormControl id="name" w="100%">
          <FormLabel>Name:</FormLabel>
          <Input placeholder="Enter your name" />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email address:</FormLabel>
          <Input placeholder="Enter your email" />
        </FormControl>
        <FormControl id="username">
          <FormLabel>Username:</FormLabel>
          <Input placeholder="Choose a username" />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password:</FormLabel>
          <Input type="password" placeholder="Choose a password" />
        </FormControl>
        <FormControl id="profile-photo">
          <FormLabel>Profile Photo:</FormLabel>
          <Input type="file" />
        </FormControl>
        <Button colorScheme="blue" width="full">
          Submit
        </Button>
        <Text>
          Already have an account?{' '}
          <Link color="teal.500" href="#">
            Log in instead
          </Link>
        </Text>
      </VStack>
    </Box>
  );
};

export default SignUp;
