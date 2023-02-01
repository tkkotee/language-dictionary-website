import { SimpleGrid, Box, Text } from '@chakra-ui/react'
import DefinitionCard from './definitioncard';
import { useState, useEffect } from "react";

// The group of all definition cards. Takes in an array
// of definitions and maps them to definition cards
export default function DefinitionCardGroup() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    // Load in word data from backend
    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(`https://narrow-rabbit-90.deno.dev/words`, { method: "GET"});
                const receivedData = await response.json();
                setData(receivedData);
                setError(null);
            } catch(err) {
                setError(err.message);
                setData(null);
            }
        }
        getData();
    }, []);
    // Return a grid of definition cards if the data is not null
    return (
        <Box>
            <SimpleGrid columns={2} spacing='25px'>
                {   
                    data === null ? [<Text>{error}</Text>] : data.map((definition) => {
                        return <DefinitionCard definition={definition} />;
                    })
                }
            </SimpleGrid>
        </Box>
    );
}