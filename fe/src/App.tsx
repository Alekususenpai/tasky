import { useState, useEffect } from 'react'
import axios from 'axios'
import { Box, Button, Text, Input } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Header from './Components/Header'

function App() {
  const [names, setNames] = useState([])
  const [inputName, setInputName] = useState()

  useEffect(() => {
    axios.get("http://localhost:3000/names").then(
      (response) => {
        setNames(response.data);
      })
  }, [])

  const handleChange = (e: any) => {
    setInputName(e.target.value)
  }

  const handleClick1 = async () => {
    const response = await axios.get("http://localhost:3000/name")
    setNames(response.data)
    console.log('response', response)
  }

  const handleClick2 = async () => {
    const response = await axios.post("http://localhost:3000/name", {
      name: inputName,
    })
    setNames(response.data)
    console.log('response', response)
  }

  return (
    <ChakraProvider>
      <Header />
      <Outlet />
      <Input placeholder='type something' onChange={handleChange} />
      <Box>Hello there Frontend</Box>
      <Button colorScheme='purple' onClick={handleClick1}>get</Button>
      <Button colorScheme='green' onClick={handleClick2}>post</Button>
      {
        names.map((name: any) => {
          return <Text>{name}</Text>
        })
      }
    </ChakraProvider>
  );
}

export default App;
