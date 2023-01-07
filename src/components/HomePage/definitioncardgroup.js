import { SimpleGrid , Box} from '@chakra-ui/react'
import DefinitionCard from './definitioncard';

// The group of all definition cards. Takes in an array
// of definitions and maps them to definition cards
export default function DefinitionCardGroup({ definitions }) {
    return (
        <Box>
            <SimpleGrid columns={2} spacing='25px'>
                {
                    definitions.map((definition) => {
                        return <DefinitionCard definition={definition} />;
                    })
                }
            </SimpleGrid>
        </Box>
    );
}