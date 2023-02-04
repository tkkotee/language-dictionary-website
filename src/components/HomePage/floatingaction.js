import { AddIcon } from '@chakra-ui/icons';
import { IconButton, Box, Input, VStack } from '@chakra-ui/react'
import { useState } from 'react';
import { CloseIcon } from '@chakra-ui/icons';

// Floating action button
export default function NewWordDialog() {
    // Decides whether to display a floating action button or new word form
    const [isButton, setIsButton] = useState(true);

    const handleClick = () => {
        setIsButton(isButton => !isButton);
    }
    if (isButton) {
        return (
            <Box position='fixed' bottom={5} right={5}>
                <IconButton
                    onClick={handleClick}
                    colorScheme='teal'
                    aria-label=''
                    width='50px'
                    height='50px'
                    shadow='lg'
                    borderRadius='25px'
                    icon={<AddIcon />}
                />
            </Box>
        );
    } else {
        return (
            <Box
                position='fixed'
                bottom={5}
                right={5}
                width={300}
                height={400}
                bg='white'
                boxShadow='lg'
                border="1px"
                borderColor="black">
                <CloseIcon position='absolute' top={5} right={5} onClick={handleClick} cursor="pointer" />
                <VStack position='absolute' top={15} spacing={10}>
                    <Input placeholder='Word' size='md' />
                    <Input placeholder='English translation' size='md' />
                    <Input placeholder='Example usage' size='md' />
                    <Input placeholder='Type' size='md' />
                </VStack>
            </Box>
        );
    }

}