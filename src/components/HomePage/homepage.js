import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import DefinitionCardGroup from './definitioncardgroup';
import NewWordDialog from './floatingaction';

// The main page of the app
export default function HomePage() {
  // Animation so that it fades in
  return (
    <motion.div
      key={"home"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <Box pl={5} pr={5}>
        <Box h='50px'></Box>
        <DefinitionCardGroup />
        <NewWordDialog />
      </Box>
    </motion.div>
  );
}