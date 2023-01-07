import { Box, Heading, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

// Page displaying info about purpose of the website
export default function AboutPage() {
    return (
        // Make the page fade in
        <motion.div
            key={"about"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
        >
            <Box pl={5} pt={5} pr={5}>
                <Heading>About</Heading>
                <Box h={5}></Box>
                <Text letterSpacing={1}>This website contains an attempt to establish an official dictionary
                    for the language of Le漢leng字ua. Le漢leng字ua attempts to be the
                    world's first universal language with features such as click sounds, inconjugatable verbs,
                    and an associated sign language.
                    Feel free to browse, contribute and edit!
                </Text>
            </Box>
        </motion.div>
    );
}