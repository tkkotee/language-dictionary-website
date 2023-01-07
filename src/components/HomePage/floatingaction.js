import { AddIcon } from '@chakra-ui/icons';
import { IconButton, Box } from '@chakra-ui/react'
import { useState } from 'react';

// Floating action button
export default function FloatingAction() {
    // Makes floating action color switch on click
    const [evenClick, setEvenClick] = useState(true);
    const handleClick = () => {
        setEvenClick(evenClick => !evenClick);
    }

    return (
        <Box position='fixed' bottom={5} right={5}>
            <IconButton
                onClick={handleClick}
                colorScheme={evenClick ? 'teal' : 'orange'}
                aria-label=''
                width='50px'
                height='50px'
                shadow='lg'
                borderRadius='25px'
                icon={<AddIcon />}
            />
        </Box>
    );
}