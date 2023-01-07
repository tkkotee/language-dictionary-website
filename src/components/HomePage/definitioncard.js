import { Box, Text, Heading, Stack } from '@chakra-ui/react'
import { Card, CardBody } from '@chakra-ui/react'

// The card displaying each definition
export default function DefinitionCard({definition}) {
    return (
        <Box pb='25px' borderColor='grey'>
            <Card>
                <CardBody>
                    <Stack spacing='4'>
                        <Box>
                            <Heading size='md'>
                                {definition.foreign}
                            </Heading>
                        </Box>
                        <Box>
                            <Text pt='2' fontSize='sm'>
                                {definition.english}
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Usage
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                {definition.usage}
                            </Text>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </Box>
    );
}