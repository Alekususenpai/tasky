import React, { useState } from 'react';
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
import axios from 'axios';

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [profilePhoto, setProfilePhoto] = useState('')

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const onSubmit = () => {
    axios.post('http://localhost:3001/auth/sign-up', { name, email, username, password }).then((response) => {
      console.log(response)
      setName('');
      setEmail('');
      setUsername('');
      setPassword('');
    })
  }

  return (
    <Box maxW={{ base: "95%", md: "55%" }} margin="0 auto">
      <VStack spacing={7} margin="5" padding="5" display="flex" flexDirection="column" alignItems="center">
        <Heading m="5">Create an Account</Heading>
        <FormControl id="name" w="100%" isRequired>
          <FormLabel>Name:</FormLabel>
          <Input placeholder="Enter your name" onChange={onNameChange} value={name} autoComplete="on" />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email address:</FormLabel>
          <Input placeholder="Enter your email" onChange={onEmailChange} value={email} autoComplete="on" />
        </FormControl>
        <FormControl id="username" isRequired>
          <FormLabel>Username:</FormLabel>
          <Input placeholder="Choose a username" onChange={onUsernameChange} value={username} autoComplete="on" />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password:</FormLabel>
          <Input type="password" placeholder="Choose a password" onChange={onPasswordChange} value={password} />
        </FormControl>
        <FormControl id="profile-photo">
          <FormLabel>Profile Photo:</FormLabel>
          <Input type="file" />
        </FormControl>
        <Button colorScheme="blue" width="full" onClick={onSubmit}>
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
