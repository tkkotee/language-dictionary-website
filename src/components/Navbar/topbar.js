import { Box, HStack, Text } from '@chakra-ui/react'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'


export default function TopBar() {
    return (
        // Navbar is box with shadowing
        <Box bg='white' w='100%' boxShadow='md' p='20px'>
            {/*Hstack allows us to form row*/}
            <HStack>
                {/*Language title in bold, clicking takes back to home page*/}
                <Box>
                    <Link to={"/language-dictionary-website"}>
                        <Text as='b' pr='25px' whiteSpace='nowrap'>Le漢leng字ua</Text>
                    </Link>
                </Box>
                {/*Search bar to search for words*/}
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<SearchIcon color='gray.300' />}
                    />
                    <Input type='tel' placeholder='Search Dictionary' />
                </InputGroup>
                {/*Link to About Page*/}
                <Box>
                    <Link to={"/language-dictionary-website/about"}>
                        <Text as='b' pl='25px' pr='25px' color='teal' whiteSpace='nowrap'>
                            About
                        </Text>
                    </Link>
                </Box>
            </HStack>
        </Box>
    );
}