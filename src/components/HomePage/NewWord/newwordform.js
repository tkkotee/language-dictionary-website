import { Box, Input, VStack, Stack, Radio, RadioGroup, Button} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export default function NewWordForm({ handleClick }) {
    const [radioMenuValue, setRadioMenuValue] = useState("Verb");
    const [word, setWord] = useState("");
    const [translation, setTranslation] = useState("");
    const [usage, setUsage] = useState("");
    const handleChange = (event) => {
        if (event.target.placeholder==="Word") {
            setWord(event.target.value);
        } else if (event.target.placeholder==="English translation") {
            setTranslation(event.target.value);
        } else if (event.target.placeholder==="Example usage") {
            setUsage(event.target.value);
        }
    };

    const handleSubmit = (event) => {
        console.log({
            "word": word,
            "translation": translation,
            "usage" : usage,
            "type": radioMenuValue
        });
    };

    return (
        <Box
            position='fixed'
            bottom={5}
            right={5}
            width={300}
            height={400}
            paddingLeft={2}
            bg='white'
            boxShadow='lg'
            border="1px"
            borderColor="black">
            <CloseIcon position='absolute' top={5} right={5} onClick={handleClick} cursor="pointer" />
            <VStack position='absolute' top={16} spacing={5}>
                <Input value={word} onChange={handleChange} placeholder='Word' size='md' />
                <Input value={translation} onChange={handleChange} placeholder='English translation' size='md' />
                <Input value={usage} onChange={handleChange} placeholder='Example usage' size='md' />
                <RadioGroup onChange={setRadioMenuValue} value={radioMenuValue} defaultValue={1}>
                    <Stack direction='row'>
                        <Radio value='Verb' size="sm">Verb</Radio>
                        <Radio value='Noun' size="sm">Noun</Radio>
                        <Radio value='Adjective' size="sm">Adjective</Radio>
                        <Radio value='Other' size="sm">Other</Radio>
                    </Stack>
                </RadioGroup>
                <Button colorScheme='teal' size='sm' onClick={handleSubmit}>
                    Add!
                </Button>
            </VStack>
        </Box>
    );
}