import { IconButton, Box,} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons';

export default function FloatingAction({handleClick}) {
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
}