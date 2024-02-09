
import axios from 'axios'
import { Box, Button } from '@chakra-ui/react'

function App() {

  const handleClick = async () => {
    const response = await axios.get("http://localhost:3000/hello")
    console.log('response', response)
  }

  return (
    <Box>
      <Box>Hello there Frontend</Box>
      <Button colorScheme='purple' onClick={handleClick}>Click here</Button>
    </Box>
  );
}

export default App;
